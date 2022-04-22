import React from 'react';
import { Link } from 'react-router-dom';


const Error = () => {
  return (  
    <section className='error-page'>
      <nav className='nav'>
        <h1 className='header'>🔭 Launch Lookout</h1>
        <Link to='/'><button className='back-to-main'>Back to Main</button></Link>
        </nav>
      <h1>Failure to liftoff!</h1>
    </section>
  );
}
 
export default Error;