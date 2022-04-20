import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { isCompositeComponent } from 'react-dom/test-utils';
import { DataContext } from '../../contexts/DataContext';
import './LaunchDetails.css'

const LaunchDetails = ({ name }) => {
  const allLaunchData = useContext(DataContext)
  const specificLaunch = allLaunchData.upcomingLaunches.filter(launch => launch.name === name)
  const launch = specificLaunch[0]

  return (
    <section className='launch-details-section'>

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

      <div className='mission-div'>
        <div className='mission-deets'>
          {launch.mission_patches.length ? 
            <img className='mission-patch-img' src={launch.mission_patches[0].image_url} /> : null
          }
          <p>{launch.launch_service_provider.name}</p>
          <p>Destination: {launch.mission.orbit.name}</p>
          <p>Mission type: {launch.mission.type}</p>
        </div>
        <div className='mission-description'>
          <h2>Mission Details</h2>
          <p>{launch.mission.description}</p>
        </div>
      </div>

      <div className='launch-div'>
        <div className='launch-details'>
          <h2>Launch Details</h2>
          <div>
            <p>Launch window start: {launch.window_start}</p>
            <p>Launch probability: {launch.probability}</p>
          </div>
          <p>Rocket: {launch.rocket.configuration.full_name}</p>
          <p>{launch.rocket.configuration.description}</p>
          <p>Launching from: {launch.pad.name} {launch.pad.location.name}</p>
        </div>
        <div className='map-webcast'>
          <img className='map-img'src={launch.pad.map_image} />
          <a>Watch live webcast</a>
        </div>
      </div>

    </section>

  );
}
 
export default LaunchDetails;