import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { BookmarkContext } from '../../contexts/BookmarkContext';
import { DataContext } from '../../contexts/DataContext';
import LaunchDetails from '../LaunchDetails/LaunchDetails';
import './SingleLaunchPage.css'
import Countdown from '../Countdown/Countdown';
import {IoChevronBackOutline, IoCheckmarkOutline} from "react-icons/io5";


const SingleLaunchPage = ({ id }) => {
  const allLaunchData = useContext(DataContext)
  const specificLaunch = allLaunchData.upcomingLaunches.filter(launch => launch.id === id)
  const launch = specificLaunch[0]
  const bookmarkData = useContext(BookmarkContext);

  const [isBookmarked, setIsBookmarked] = useState(false);

  const addBookmark = () => {
    const checkedMission = launch.mission ? launch.mission.description : "No mission description available at this time!"
    const newLaunch = {
      id: id, 
      name: launch.name, 
      company: launch.launch_service_provider.name, 
      image: launch.image,
      mission: checkedMission,
      launchDate: format(new Date(launch.window_start), "E. MMMM dd, yyy, p")
    }
    bookmarkData.setBookmarks([...bookmarkData.bookmarks, newLaunch])
    setIsBookmarked(true)
  }

  useEffect(() => {
    if (bookmarkData.bookmarks.some(bookmark => bookmark.id === id)) {
      setIsBookmarked(true)
    }
  }, [])

  return (  
    <section className='single-launch-page'>
      <div className='titles-div'>
        <div className='title-text'>
          <h1 className='mission-name'>{launch.name}</h1>
          <p className='single-launch-date'>{format(new Date(launch.window_start), "E. MMMM dd, yyy, p")}</p>
          {launch.status.name !== 'Launch Successful' && <p className='launch-status'>Status: {launch.status.name}</p>}
        </div>
        <div className='single-countdown-container'>
          <Countdown date={launch.window_start} status={launch.status.name} statusDescription={launch.status.description}/>
        </div>
        <div className='title-buttons'>
          <div className='routing-btns'>
            <Link to='/'>
              <button className='back-to-main'><IoChevronBackOutline className='back-icon'/></button>
            </Link>
            <Link to='/bookmarks'>
              <button className='to-bookmarks'>My Bookmarks</button>
            </Link>
          </div>
          {isBookmarked ? <button className='bookmark-btn bookmarked' disabled><IoCheckmarkOutline className='check-icon'/>Launch Bookmarked</button> : <button className='bookmark-btn' onClick={() => addBookmark()}>Bookmark this Launch</button>}
        </div>
      </div>
      <LaunchDetails launch={launch}/>
    </section>
  );
}
 
export default SingleLaunchPage;