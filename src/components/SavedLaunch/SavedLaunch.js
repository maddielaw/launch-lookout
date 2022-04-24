import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './SavedLaunch.css'

const SavedLaunch = ({id, name, company, image, mission, launchDate, removeBookmark}) => {
  return (
    <section className='saved-launch-card'>
      <header className='date-delete'>
        <p className='saved-launch-date'>{launchDate}</p>
        <button className='remove-bookmark-btn' onClick={() => removeBookmark(id)}>X</button>
      </header>
      <section className='saved-img-container'>
        <img className='saved-launch-img'src={image} />
      </section>
      <footer className='saved-launch-details-container'>
        <div className='saved-launch-details'>
          <h2 className='saved-name'>{name}</h2>
          <p className='saved-company'>{company}</p>
          {mission.length > 159 ? <p className='saved-mission'>{`${mission.substring(0, 159)} ...`}</p> : <p className='saved-mission'>{mission}</p> }
        </div>
          <Link to={`/launches/${id}`}><button className='launch-details-btn'>View Launch Details</button></Link>
      </footer>
    </section>


  );
}
 
export default SavedLaunch;