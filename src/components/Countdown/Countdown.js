import React, { useState, useEffect } from 'react';
import { intervalToDuration, isBefore } from 'date-fns';
import './Countdown.css'


const Countdown = ({ date, status, statusDescription }) => {
  const [now, setNow] = useState(new Date())
  const launchDate = new Date(date)
  // const launchDate = new Date("2022-04-23T22:35:00Z")
  const isTimeUp = isBefore(launchDate, now);
  let days, hours, minutes, seconds = 0

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date())
    }, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [])

  if (!isTimeUp) {
    const duration = intervalToDuration({start: now, end: launchDate})
    days = duration.days;
    hours = duration.hours;
    minutes = duration.minutes;
    seconds = duration.seconds
  } 

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
}
 
export default Countdown;