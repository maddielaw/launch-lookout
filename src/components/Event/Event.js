import React from "react";
import "./Event.css";
import PropTypes from 'prop-types';

const Event = ({ id, name, description, location, date, videoLink }) => {
  return (
    <section className="event-card">
      <div className="title-date">
        <h3 className="event-name">{name}</h3>
        <p className="event-date">{date}</p>
      </div>
      <p className="event-description">{description}</p>
      <p className="event-location">Location | {location}</p>
      {videoLink && (
        <div className="event-video-box">
          <a className="event-video-link" href={videoLink}>
            Watch Livestream
          </a>
        </div>
      )}
    </section>
  );
};

export default Event;

Event.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  location: PropTypes.string,
  date: PropTypes.string,
  videoLink: PropTypes.string
};
