import React from 'react';
import './NextLaunch.css'

const NextLaunch = () => {
  
  return (  
    <section className='next-launch-section'>
      <h2>Next Launch: Falcon 9 | Starlink</h2>
      <p>April 21, 2022 | Launch Window Start: 15:16:00</p>
      <div className='next-launch-btn-container'>
        <button>Bookmark this launch</button>
        <button>View launch details</button>
      </div>
    </section>
  );
}
 
export default NextLaunch;