import React, { createContext, useState, useEffect } from 'react';
import Error from '../components/Error/Error';
import Loader from '../components/Loader/Loader';
import { fetchUpcomingData } from '../apiCalls';

const DataContext = createContext();

const DataContextProvider = ({ children }) => {

  const [upcomingLaunches, setUpcomingLaunches] = useState(null);
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    fetchUpcomingData('launch')
      .then((data) => {
        setUpcomingLaunches(data.results)
      })
      .catch(err => setError(true))
      .finally(() => setIsLoading(false))
  }, [])

  return (  
    <DataContext.Provider value={{upcomingLaunches, error, setError}}>
      {upcomingLaunches && children}
      {isLoading && <Loader />}
      {!upcomingLaunches && error ? (
        <React.Fragment>
          <Error />
        </React.Fragment>
      ) : null}
    </DataContext.Provider>
  );
}
 
export {DataContextProvider, DataContext};