import React from 'react';
import './App.css';
import Header from '../Header/Header'
import { Route, Switch, } from 'react-router-dom'
import LoginPage from '../../routes/LoginPage/LoginPage';
import RegistrationPage from '../../routes/RegistrationPage/RegistrationPage';
import GameListPage from '../../routes/GameListPage/GameListPage';
import ReviewListPage from '../../routes/ReviewListPage/ReviewListPage';
import STORE from '../../STORE'

function App() {
   

  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path={'/'}
          component={LoginPage}
          
        />
        <Route
          path={'/registration'}
          component={RegistrationPage}
        />
        <Route
          path={'/games'}
          render={(props) => <GameListPage {...props} STORE = {STORE} />}
          
        />
        <Route
          path={'/reviews'}
          render={(props) => <ReviewListPage {...props} STORE = {STORE} />}
        />

      </Switch>
    </div>
  );
}

export default App;
