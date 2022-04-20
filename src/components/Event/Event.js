import React from 'react';
import './Event.css'


const Event = ({ id, name, description, location, date, videoLink }) => {
  return (
    <section className='event-card'>
      <div className='title-date'>
        <h3 className='event-name'>{name}</h3>
        <p>{date}</p>
      </div>
      <p>{description}</p>
      <p>Location | {location}</p>
      {videoLink ? <a href={videoLink}>Watch Livestream</a> : <p>No Livestream available for this event.</p>}
    </section>
  );
}
 
export default Event;