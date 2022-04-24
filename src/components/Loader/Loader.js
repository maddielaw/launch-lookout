import React, { useContext } from 'react';
import blackhole from '../../assets/blackhole.png'
import './Loader.css'


const Loader = () => {

  return ( 
    <section className='loading-page'>
        <h1 className='loading-header'>Launch Lookout preparing for liftoff!</h1>
        <img className='blackhole-spinning' src={blackhole} alt={'blackhole spinning loading'}></img>
    </section>
  );
}
 
export default Loader;