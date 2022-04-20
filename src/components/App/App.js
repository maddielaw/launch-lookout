import React from 'react';
import { DataContextProvider } from '../../contexts/DataContext';
import NextLaunch from '../NextLaunch/NextLaunch';
import UpcomingLaunches from '../UpcomingLaunches/UpcomingLaunches';
import './App.css';


const App = () => {

  return (  
    <main className='App'>

      <section className='main-section'>
        <nav className='nav'>
          <h1 className='header'>🔭 Launch Lookout</h1>
          <button>My Bookmarked Launches</button>
        </nav>
        <DataContextProvider>
          <section>
              <NextLaunch />
              <UpcomingLaunches />
          </section>
        </DataContextProvider>
      </section>

      <section className='space-news'>

      </section>
    </main>
  );
}
 
export default App;
