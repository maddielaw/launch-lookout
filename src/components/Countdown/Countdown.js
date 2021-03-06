import React, { useState, useEffect } from 'react';
import { intervalToDuration, isBefore } from 'date-fns';
import './Countdown.css';
import PropTypes from 'prop-types';

const Countdown = ({ date, status, statusDescription }) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const launchDate = new Date(date);
  const isTimeUp = isBefore(launchDate, currentTime);
  let days, hours, minutes, seconds = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  if (!isTimeUp) {
    const duration = intervalToDuration({start: currentTime, end: launchDate});
    days = duration.days;
    hours = duration.hours;
    minutes = duration.minutes;
    seconds = duration.seconds;
  };

  return (  
    <section className='countdown-container'>
      {isTimeUp ? 
        <div className='mission-success-msg'>
          <h3 className='status'>{status}</h3>
          <p className='status-description'>{statusDescription}</p>
        </div> :
        <div className='countdown-timer'>
          <p className='days'>{days} days</p>
          <p className='separator'>  |  </p>
          <p className='hours'>{hours} hours</p>
          <p className='separator'>  |  </p>
          <p className='minutes'>{minutes} minutes</p>
          <p className='separator'>  |  </p>
          <p className='seconds'>{seconds} seconds</p>
        </div>
      }
    </section>
  );
};
 
export default Countdown;

Countdown.propTypes = {
  date: PropTypes.string,
  status: PropTypes.string,
  statusDescription: PropTypes.string
};