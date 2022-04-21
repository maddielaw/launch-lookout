import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BookmarkContext } from '../../contexts/BookmarkContext';
import SavedLaunch from '../SavedLaunch/SavedLaunch';
import './Bookmarks.css'


const Bookmarks = () => {
  const bookmarkData = useContext(BookmarkContext);

  const renderBookmarkCards = () => {
    return bookmarkData.bookmarks.map(bookmark => {
      return <SavedLaunch 
        id={bookmark.id} 
        key={bookmark.id} 
        name={bookmark.name} 
        company={bookmark.company} 
        image={bookmark.image} 
        mission={bookmark.mission} 
        removeBookmark={bookmarkData.removeBookmark}
      />
    })
  }

  return (
    <section className='bookmark-section'>
      <div className='bookmark-header'>
        <h1>🚀 My Bookmarked Launches</h1>
        <Link to='/'><button>X</button></Link>
      </div>
      <div className='bookmark-container'>
        {renderBookmarkCards()}
      </div>
    </section>
  );
}
 
export default Bookmarks;