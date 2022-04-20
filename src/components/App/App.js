import React from 'react';
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
        <section>
          <NextLaunch />
          <UpcomingLaunches />
        </section>
      </section>
      <section className='space-news'>
      </section>

    </main>
  );
}
 
export default App;
