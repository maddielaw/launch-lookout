import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { DataContextProvider } from '../../contexts/DataContext';
import NextLaunch from '../NextLaunch/NextLaunch';
import SingleLaunchPage from '../SingleLaunchPage/SingleLaunchPage';
import SpaceNewsContainer from '../SpaceNewsContainer/SpaceNewsContainer';
import UpcomingLaunches from '../UpcomingLaunches/UpcomingLaunches';
import './App.css';


const App = () => {

  return (  
    <main className='App'>
      <Switch>

        <DataContextProvider>
          <Route exact path='/'>
            <section className='main-section'>
              <nav className='nav'>
                <h1 className='header'>🔭 Launch Lookout</h1>
                <button>My Bookmarked Launches</button>
              </nav>
                    <NextLaunch />
                    <UpcomingLaunches />
            </section>
            <section className='space-news'>
              <SpaceNewsContainer />
            </section>
          </Route>

          <Route 
            exact path='/launches/:id'
            render={({ match }) => {
              return <SingleLaunchPage id={match.params.id}/>
            }}/>
        </DataContextProvider>

    </Switch>
    </main>
  );
}
 
export default App;
