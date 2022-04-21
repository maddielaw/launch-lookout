import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BookmarkContext } from '../../contexts/BookmarkContext';
import { DataContext } from '../../contexts/DataContext';
import LaunchDetails from '../LaunchDetails/LaunchDetails';
import './SingleLaunchPage.css'

const SingleLaunchPage = ({ id }) => {
  const allLaunchData = useContext(DataContext)
  const specificLaunch = allLaunchData.upcomingLaunches.filter(launch => launch.id === id)
  const launch = specificLaunch[0]
  const bookmarkData = useContext(BookmarkContext);

  const [isBookmarked, setIsBookmarked] = useState(false);

  const addBookmark = () => {
    const newLaunch = {
      id: id, 
      name: launch.name, 
      company: launch.launch_service_provider.name, 
      image: launch.image,
      mission: launch.mission.description,
      launchDate: launch.window_start
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
          <p>{launch.window_start}</p>
          <p>Status: {launch.status.name}</p>
        </div>
        <div className='title-buttons'>
          <Link to='/'>
            <button className='back-to-main'>X</button>
          </Link>
          <button disabled={isBookmarked} onClick={() => addBookmark()}>Bookmark this Launch</button>
        </div>
      </div>
      <LaunchDetails launch={launch}/>

    </section>
  );
}
 
export default SingleLaunchPage;