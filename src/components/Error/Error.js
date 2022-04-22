import React from 'react';
import { Link } from 'react-router-dom';
import './Error.css'


const Error = () => {
  return (  
    <section className='error-page'>
      <nav className='error-nav'>
        <h1 className='header'>🔭 Launch Lookout</h1>
      </nav>
      <div className='error-text'>
        <h1>Failure to liftoff!</h1>
        <Link to='/'><button className='error-back-to-main'>Back to Main</button></Link>
      </div>
    </section>
  );
}
 
export default Error;