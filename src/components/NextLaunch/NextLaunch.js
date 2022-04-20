import React, { useContext } from 'react';
import { DataContext } from '../../contexts/DataContext';
import './NextLaunch.css'

const NextLaunch = () => {
  const launchInfo = useContext(DataContext)
  const nextLaunch = launchInfo.upcomingLaunches[0]

  return (  
    <section className='next-launch-section'>
      <h2>Next Launch: {nextLaunch.name}</h2>
      <p>{nextLaunch.window_start}</p>
      <div className='next-launch-btn-container'>
        <button>View launch details</button>
        <button>Bookmark this launch</button>
      </div>
    </section>
  );
}
 
export default NextLaunch;