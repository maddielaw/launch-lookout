import React, { createContext, useState, useEffect } from 'react';
import { fetchUpcomingData } from '../apiCalls';

const DataContext = createContext();

const DataContextProvider = ({ children }) => {

  const [upcomingLaunches, setUpcomingLaunches] = useState(null);

  useEffect(() => {
    fetchUpcomingData('launch')
      .then((data) => {
        setUpcomingLaunches({
          upcomingLaunches: data.results
        })
      })
  }, [])

  return (  
    <DataContext.Provider value={upcomingLaunches}>
      {upcomingLaunches && children}
    </DataContext.Provider>
  );
}
 
export {DataContextProvider, DataContext};