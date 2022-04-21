import React from 'react';
import { Link } from 'react-router-dom';
import './SavedLaunch.css'

const SavedLaunch = ({id, name, company, image, mission, launchDate, removeBookmark}) => {

  return (
    <section className='saved-launch-card'>
      <div className='date-delete'>
        <p>{launchDate}</p>
        <button>X</button>
      </div>
      <div className='saved-launch-details'>
        <img className='saved-launch-img'src={image} />
        <h2>{name}</h2>
        <p>{company}</p>
        <p>{mission}</p>
        <Link to={`/launches/${id}`}><button>View Launch Details</button></Link>
      </div>
    </section>


  );
}
 
export default SavedLaunch;