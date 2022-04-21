import React from 'react';
import { Link } from 'react-router-dom';
import './SavedLaunch.css'

const SavedLaunch = ({id, name, company, image, mission, launchDate, removeBookmark}) => {

  return (
    <section className='saved-launch-card'>
      <div className='date-delete'>
        <p>{launchDate}</p>
        <button className='remove-bookmark-btn' onClick={() => removeBookmark(id)}>X</button>
      </div>
      <div className='saved-launch-details-container'>
        <div className='saved-img-container' >
          <img className='saved-launch-img'src={image} />
        </div>
        <div className='saved-launch-details'>
          <h2>{name}</h2>
          <p>{company}</p>
          <p>{mission}</p>
        </div>
          <Link to={`/launches/${id}`}><button>View Launch Details</button></Link>
      </div>
    </section>


  );
}
 
export default SavedLaunch;