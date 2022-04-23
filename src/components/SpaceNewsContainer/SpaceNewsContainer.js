import React, { useContext, useEffect, useState } from 'react';
import './SpaceNewsContainer.css'
import { fetchUpcomingData } from '../../apiCalls';
import Event from '../Event/Event';
import { format } from 'date-fns';
import { DataContext } from '../../contexts/DataContext';
import Loader from '../Loader/Loader';
import astronaut from '../../assets/astronaut.png'


const SpaceNewsContainer = () => {
  
  const [upcomingEvents, setUpcomingEvents] = useState(null)
  const errorInfo = useContext(DataContext);
  const [isEventLoading, setIsEventLoading] = useState(false)

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
    setIsEventLoading(true)
    fetchUpcomingData('event')
      .then((data) => {
        setUpcomingEvents(data.results)
      })
      .catch(err => errorInfo.setError(true))
      .finally(setIsEventLoading(false))
  }, [])

  return (
    <section className='events-section'>
      <h2 className='events-header'>Upcoming Events in Spaceflight</h2>
        <div className='events-container'>
          {upcomingEvents && !isEventLoading ? sortEvents() :
          <div className='astronaut-loader'>
            <h3>Events loading...</h3>
            <img className='astronaut-spinning' src={astronaut} alt={'astronaut spinning loading'}></img>
          </div>
          }
        </div>
    </section>
  );
}
 
export default SpaceNewsContainer;