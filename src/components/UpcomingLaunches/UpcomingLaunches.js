import React, { useContext } from 'react';
import { DataContext } from '../../contexts/DataContext';
import Launch from '../Launch/Launch';
import './UpcomingLaunches.css'

const UpcomingLaunches = () => {
  const launchInfo = useContext(DataContext);

  const sortLaunches = () => {
    const updatedLaunchInfo = launchInfo.upcomingLaunches.filter((data, i) => i !== 0)
    return updatedLaunchInfo.map(launch => {
      return <Launch 
      mission={launch.mission}
      name={launch.name} 
      launchDate={launch.window_start} 
      company={launch.launch_service_provider.name} 
      image={launch.image} 
      key={launch.id}
      id={launch.id}
      />
    })
  }

  return (  
    <section className='upcoming-launches-container'>
      <div className='upcoming-header'>
        <h2>Upcoming Launches</h2>
      </div>
      <div className='upcoming-cards-container'>
        {sortLaunches()}
      </div>
    </section>
  );
}
 
export default UpcomingLaunches;