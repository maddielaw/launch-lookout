import React, { createContext } from 'react';

const DataContext = createContext;

const DataContextProvider = () => {
  return (  
    <DataContext.Provider>
      {children}
    </DataContext.Provider>
  );
}
 
export {DataContextProvider, DataContext};