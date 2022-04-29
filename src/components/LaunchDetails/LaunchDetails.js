import "./LaunchDetails.css";
import { format } from "date-fns";
import { FaSpaceShuttle } from "react-icons/fa";
import { GiSpaceShuttle } from "react-icons/gi";
import PropTypes from 'prop-types';

const LaunchDetails = ({ launch }) => {
  return (
    <section className="launch-details-section">
      <div className="mission-div">
        <div className="mission-patch">
          {launch.mission_patches.length ? (
            <img
              className="mission-patch-img"
              src={launch.mission_patches[0].image_url}
              alt={`${launch.name} mission patch`}
            />
          ) : (
            <img
              className="mission-patch-img"
              alt="Rocket lifting off against bright blue sky"
              src={
                "https://images.unsplash.com/photo-1580551730007-11f498ebb39d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1501&q=80"
              }
            />
          )}
        </div>
        <div className="mission-description">
          <h2 className="mission-details-header">
            <FaSpaceShuttle className="shuttle-icon" />
            Mission Details
          </h2>
          <div className="mission-text-style">
            {launch.mission ? (<p className="description">{launch.mission.description}</p>) : (<p className="description">No mission details available yet for this launch. Please checkback later!</p>)}
            {launch.mission ? (<p className="orbit">Destination: {launch.mission.orbit.name}</p>) : (<p className="orbit"></p>)}
            {launch.mission ? (<p className="mission-type">Mission type: {launch.mission.type}</p>) : (<p className="mission-type">Mission type: Mission type is not available for this launch.</p>)}
            <div className="launch-provider-details">
              <p className="launch-provider-name">
                {launch.launch_service_provider.name}
              </p>
              <p className="launch-provider-description">
                {launch.launch_service_provider.description}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="launch-div">
        <div className="launch-details">
          <h2 className="launch-details-header">Launch Details</h2>
          {launch.vidURLs.length ? (
            <div className="launch-vid-container">
              <a className="launch-vid" href={launch.vidURLs[0].url}>
                Watch live webcast
              </a>
            </div>
          ) : null}
          <div className="launch-window">
            <p>
              Launch window start:{" "}
              {format(new Date(launch.window_start), "E. MMMM dd, yyy, p")}
            </p>
          </div>
          <div className="rocket-details">
            <p className="rocket-type">
              Rocket: {launch.rocket.configuration.full_name}
            </p>
            <p className="rocket-description">
              {launch.rocket.configuration.description}
            </p>
          </div>
          <p className="launch-location">
            <GiSpaceShuttle className="shuttle-icon" />
            Launching from: {launch.pad.name} {launch.pad.location.name}
          </p>
        </div>
        <div className="map">
          <img
            className="map-img"
            alt={`Map of ${launch.pad.location.name}`}
            src={launch.pad.map_image}
          />
        </div>
      </div>
    </section>
  );
};

export default LaunchDetails;

LaunchDetails.propTypes = {
  launch: PropTypes.object
};