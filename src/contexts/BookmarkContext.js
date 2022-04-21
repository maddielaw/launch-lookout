import React, { createContext, useState } from 'react';

const BookmarkContext = createContext();

const BookmarkContextProvider = ({ children }) => {

  const [bookmarks, setBookmarks] = useState([]);

  const removeBookmark = (launchID) => {
    const filteredLaunches = bookmarks.filter(bookmark => bookmark.id !== launchID)
    setBookmarks(filteredLaunches)
  }

  return (  
    <BookmarkContext.Provider value={{ bookmarks, setBookmarks, removeBookmark }}>
      {children}
    </BookmarkContext.Provider>
  );
}
 
export {BookmarkContextProvider, BookmarkContext};