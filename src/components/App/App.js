import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { DataContextProvider } from '../../contexts/DataContext';
import NextLaunch from '../NextLaunch/NextLaunch';
import LaunchDetails from '../LaunchDetails/LaunchDetails';
import SpaceNewsContainer from '../SpaceNewsContainer/SpaceNewsContainer';
import UpcomingLaunches from '../UpcomingLaunches/UpcomingLaunches';
import './App.css';


const App = () => {

  return (  
    <main className='App'>
      <Switch>

        <Route exact path='/'>
          <section className='main-section'>
            <nav className='nav'>
              <h1 className='header'>🔭 Launch Lookout</h1>
              <button>My Bookmarked Launches</button>
            </nav>
            <DataContextProvider>
                  <NextLaunch />
                  <UpcomingLaunches />
            </DataContextProvider>a
          </section>
          <section className='space-news'>
            <SpaceNewsContainer />
          </section>
        </Route>

        <Route 
          exact path='/launches/:name'
          render={({ match }) => {
            return <LaunchDetails name={match.params.name}/>
          }}

        
        />




    </Switch>
    </main>
  );
}
 
export default App;
