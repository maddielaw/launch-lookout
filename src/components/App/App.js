import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { BookmarkContextProvider } from '../../contexts/BookmarkContext';
import { DataContextProvider } from '../../contexts/DataContext';
import Bookmarks from '../Bookmarks/Bookmarks';
import NextLaunch from '../NextLaunch/NextLaunch';
import Error from '../Error/Error';
import SingleLaunchPage from '../SingleLaunchPage/SingleLaunchPage';
import SpaceNewsContainer from '../SpaceNewsContainer/SpaceNewsContainer';
import UpcomingLaunches from '../UpcomingLaunches/UpcomingLaunches';
import './App.css';


const App = () => {

  return (  
    <main className='App'>
      <DataContextProvider>
        <BookmarkContextProvider>
          <Switch>
            
            <Route exact path='/'>
              <section className='main-section'>
                <nav className='nav'>
                  <h1 className='header'>Launch Lookout</h1>
                  <Link to='/bookmarks'><button className='bookmarks-page-btn'>My Bookmarked Launches</button></Link>
                </nav>
                  <NextLaunch />
                  <UpcomingLaunches />
              </section>
              <section className='space-news'>
                <SpaceNewsContainer />
              </section>
            </Route>

            <Route exact path='/bookmarks'>
              <Bookmarks />
            </Route>

            <Route 
              exact path='/launches/:id'
              render={({ match }) => {
                return <SingleLaunchPage id={match.params.id}/>
              }}/>

            <Route>
              <Error />
            </Route>

          </Switch>
        </BookmarkContextProvider>
      </DataContextProvider>

    </main>
  );
}
 
export default App;
