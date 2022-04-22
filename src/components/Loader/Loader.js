import React, { useContext } from 'react';
import blackhole from '../../assets/blackhole.png'
import { DataContext } from '../../contexts/DataContext';
import './Loader.css'


const Loader = () => {
  const loadingInfo = useContext(DataContext);

  return ( 
    <section className='loading-page'>
        <h1>Launch Lookout preparing for liftoff!</h1>
        <img className='blackhole-spinning' src={blackhole} alt={'blackhole spinning loading'}></img>
    </section>
  );
}
 
export default Loader;