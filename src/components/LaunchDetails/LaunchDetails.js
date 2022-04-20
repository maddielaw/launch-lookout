import React, { useContext } from 'react';
import { DataContext } from '../../contexts/DataContext';
import './LaunchDetails.css'

const LaunchDetails = ({ name }) => {
  const allLaunchData = useContext(DataContext)

  return (  
    <h1>I'm the launch details page</h1>
  );
}
 
export default LaunchDetails;