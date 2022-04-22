import React, { useEffect, useState } from 'react';
import './SpaceNewsContainer.css'
import { fetchUpcomingData } from '../../apiCalls';
import Event from '../Event/Event';
import { format } from 'date-fns';


const SpaceNewsContainer = () => {
  
  const [upcomingEvents, setUpcomingEvents] = useState(null)


  const sortEvents = () => {
    return upcomingEvents.map(item => {
      return <Event 
        id={item.id} 
        key={item.id} 
        name={item.name} 
        description={item.description} 
        location={item.location} 
        date={format(new Date(item.date), "E. MMMM dd, yyy, p")}
        videoLink={item.video_url}
      />
    })
  }

  useEffect(() => {
    fetchUpcomingData('event')
      .then((data) => {
        setUpcomingEvents(data.results)
      })
  }, [])

  return (
    <section className='events-section'>
      <h2 className='events-header'>Upcoming Events in Spaceflight</h2>
      <div className='events-container'>
        {upcomingEvents && sortEvents()}
      </div>
    </section>
  );
}
 
export default SpaceNewsContainer;