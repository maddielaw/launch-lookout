import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BookmarkContext } from '../../contexts/BookmarkContext';
import SavedLaunch from '../SavedLaunch/SavedLaunch';
import './Bookmarks.css'


const Bookmarks = () => {
  const bookmarkData = useContext(BookmarkContext);


// TESTING NOTIFICATION API -- WILL NEED TO DEPLOY TO TRULY TEST SINCE ONLY WORKS OVER HTTPS PROTOCOL
  // const showNotification = () => {
  //   return new Notification('Go for Launch!', {
  //     body: "You have an upcoming launch at 11:30am 4/22"
  //   })
  // }

  // useEffect(() => {
  //   if (Notification.permission === 'granted') {
  //     showNotification()
  //   } else if (Notification.permission !== 'denied') {
  //     Notification.requestPermission().then(permission => {
  //       return permission === 'granted' ? showNotification() : null
  //     })
  //   }
  // }, [])

  const renderBookmarkCards = () => {
    return bookmarkData.bookmarks.map(bookmark => {
      return <SavedLaunch 
        id={bookmark.id} 
        key={bookmark.id} 
        name={bookmark.name} 
        company={bookmark.company} 
        image={bookmark.image} 
        mission={bookmark.mission}
        launchDate={bookmark.launchDate} 
        removeBookmark={bookmarkData.removeBookmark}
      />
    })
  }

  return (
    <section className='bookmark-section'>
      <div className='bookmark-header'>
        <h1>🚀 My Bookmarked Launches</h1>
        <Link to='/'><button className='back-to-main'>X</button></Link>
      </div>
      <div className='bookmark-container'>
        {bookmarkData.bookmarks.length ? renderBookmarkCards() : "No launches bookmarked yet!"}
      </div>
    </section>
  );
}
 
export default Bookmarks;