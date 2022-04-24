import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BookmarkContext } from '../../contexts/BookmarkContext';
import { DataContext } from '../../contexts/DataContext';
import { format } from 'date-fns';
import './NextLaunch.css'
import Countdown from '../Countdown/Countdown';
import {IoCheckmarkOutline} from "react-icons/io5";


const NextLaunch = () => {
  const launchInfo = useContext(DataContext)
  const nextLaunch = launchInfo.upcomingLaunches[0]
  const bookmarkData = useContext(BookmarkContext);

  const [isBookmarked, setIsBookmarked] = useState(false);

  const addBookmark = () => {
    const checkedMission = nextLaunch.mission ? nextLaunch.mission.description : "No mission description available at this time!"
    const newLaunch = {
      id: nextLaunch.id, 
      name: nextLaunch.name, 
      company: nextLaunch.launch_service_provider.name, 
      image: nextLaunch.image,
      mission: checkedMission,
      launchDate: format(new Date(nextLaunch.window_start), "E. MMMM dd, yyy, p")
    }
    bookmarkData.setBookmarks([...bookmarkData.bookmarks, newLaunch])
    setIsBookmarked(true)
  }

  useEffect(() => {
    if (bookmarkData.bookmarks.some(bookmark => bookmark.id === nextLaunch.id)) {
      setIsBookmarked(true)
    }
  }, [])

  return (
    <section className='next-launch-section'>
      <h2 className='next-launch-name'>Next Launch | {nextLaunch.name}</h2>
      <p className='next-launch-date'>{format(new Date(nextLaunch.window_start), "E. MMMM dd, yyy, p")}</p>
      <Countdown date={nextLaunch.window_start} status={nextLaunch.status.name} statusDescription={nextLaunch.status.description}/>
       <div className='next-launch-btn-container'>
        <Link to={`/launches/${nextLaunch.id}`}>
          <button className='launch-details-btn'>View launch details</button>
        </Link>
        {isBookmarked ? <button className='bookmark-btn bookmarked' disabled><IoCheckmarkOutline className='check-icon'/>Launch Bookmarked</button> : <button className='bookmark-btn' onClick={() => addBookmark()}>Bookmark this Launch</button>}
      </div>
    </section>
  );
}
 
export default NextLaunch;