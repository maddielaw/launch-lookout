import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../../contexts/DataContext';
import LaunchDetails from '../LaunchDetails/LaunchDetails';
import './SingleLaunchPage.css'

const SingleLaunchPage = ({ id }) => {
  const allLaunchData = useContext(DataContext)
  const specificLaunch = allLaunchData.upcomingLaunches.filter(launch => launch.id === id)
  const launch = specificLaunch[0]

  return (  
    <section className='single-launch-page'>
      <div className='titles-div'>
        <div className='title-text'>
          <h1>{launch.name}</h1>
          <p>{launch.window_start}</p>
          <p>Status: {launch.status.name}</p>
        </div>
        <div className='title-buttons'>
          <Link to='/'>
            <button>X</button>
          </Link>
          <button>Bookmark this Launch</button>
        </div>
      </div>
      <LaunchDetails launch={launch}/>

    </section>
  );
}
 
export default SingleLaunchPage;