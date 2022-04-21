import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BookmarkContext } from '../../contexts/BookmarkContext';
import { DataContext } from '../../contexts/DataContext';
import './NextLaunch.css'

const NextLaunch = () => {
  const launchInfo = useContext(DataContext)
  const nextLaunch = launchInfo.upcomingLaunches[0]
  const bookmarkData = useContext(BookmarkContext);

  const [isBookmarked, setIsBookmarked] = useState(false);

  const addBookmark = () => {
    const newLaunch = {
      id: nextLaunch.id, 
      name: nextLaunch.name, 
      company: nextLaunch.launch_service_provider.name, 
      image: nextLaunch.image,
      mission: nextLaunch.mission.description,
      launchDate: nextLaunch.window_start
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
      <h2 className='next-launch-name'>Next Launch: {nextLaunch.name}</h2>
      <p className='next-launch-date'>{nextLaunch.window_start}</p>
       <div className='next-launch-btn-container'>
        <Link to={`/launches/${nextLaunch.id}`}>
          <button className='launch-details-btn'>View launch details</button>
        </Link>
        {isBookmarked ? <button disabled>Launch Bookmarked 👍</button> : <button onClick={() => addBookmark()}>Bookmark this Launch</button>}
      </div>
    </section>
  );
}
 
export default NextLaunch;