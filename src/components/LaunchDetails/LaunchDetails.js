import './LaunchDetails.css'

const LaunchDetails = ({ launch }) => {

  return (
    <section className='launch-details-section'>
      <div className='mission-div'>
        <div className='mission-patch'>
          {launch.mission_patches.length ? <img className='mission-patch-img' src={launch.mission_patches[0].image_url} /> : <img className='mission-patch-img' src={'https://images.unsplash.com/photo-1580551730007-11f498ebb39d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1501&q=80'}/>}
          </div>
        <div className='mission-description'>
          <h2>Mission Details</h2>
          {launch.mission ? <p>{launch.mission.description}</p> : <p>No mission details available yet for this launch. Please check back later!</p>}
          {launch.mission ? <p>Destination: {launch.mission.orbit.name}</p> : <p>Destination: Orbit information is not available for this launch.</p> }          
          {launch.mission ? <p>Mission type: {launch.mission.type}</p> : <p>Mission type: Mission type is not available for this launch.</p>}
          <p>Launch Provider: {launch.launch_service_provider.name}</p>
        </div>
      </div>
      <div className='launch-div'>
        <div className='launch-details'>
          <h2>Launch Details</h2>
          {launch.vidURLs.length ? <a href={launch.vidURLs[0].url}>Watch live webcast</a> : null}
          <div className='launch-window'>
            <p>Launch window start: {launch.window_start}</p>
            {launch.probability && <p>Launch probability: {launch.probability}%</p>}
          </div>
          <p>Rocket: {launch.rocket.configuration.full_name}</p>
          <p>{launch.rocket.configuration.description}</p>
          <p>Launching from: {launch.pad.name} {launch.pad.location.name}</p>
        </div>
        <div className='map'>
          <img className='map-img'src={launch.pad.map_image} />
        </div>
      </div>
    </section>
  );
}
 
export default LaunchDetails;