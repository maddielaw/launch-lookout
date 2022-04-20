import React, { createContext } from 'react';

const BookmarkContext = createContext;

const BookmarkContextProvider = () => {
  return (  
    <BookmarkContext.Provider>
      {children}
    </BookmarkContext.Provider>
  );
}
 
export {BookmarkContextProvider, BookmarkContext};