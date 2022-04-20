import React from 'react';
import { Link } from 'react-router-dom';
import './Launch.css'


const Launch = ({name, launchDate, company, image, mission}) => {
  return (
    <section className='launch-card'>
      <div className='img-company-container'>
        <img className='launch-img'src={image} />
        <p>{company}</p>
      </div>
      <div className='launch-deets-container'>
        <p>{launchDate}</p>
        <h3>{name}</h3>
        {mission ? <p className='launch-mission-description'>{mission.description}</p> : <p>No mission description available at this time!</p>}
        <div className='launch-card-btn-container'>
          <Link to={`/launches/${name}`}>
            <button>View Launch Details</button>
          </Link>
          <button>Bookmark this Launch</button>
        </div>
      </div>

    </section>
  );
}
 
export default Launch;