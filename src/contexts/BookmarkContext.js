import React, { createContext, useState } from 'react';

const BookmarkContext = createContext();

const BookmarkContextProvider = ({ children }) => {

  const [bookmarks, setBookmarks] = useState([]);

  const removeBookmark = (launch) => {
    let index = bookmarks.map(bookmark => {return bookmark.name}).indexOf(launch)
    bookmarks.splice(index, 1)
  }


  return (  
    <BookmarkContext.Provider value={{ bookmarks, setBookmarks, removeBookmark }}>
      {children}
    </BookmarkContext.Provider>
  );
}
 
export {BookmarkContextProvider, BookmarkContext};