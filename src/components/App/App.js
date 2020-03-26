import React from 'react';
import './App.css';
import { Route, Switch, } from 'react-router-dom'
import LoginPage from '../../routes/LoginPage/LoginPage';
import RegistrationPage from '../../routes/RegistrationPage/RegistrationPage';
import GameListPage from '../../routes/GameListPage/GameListPage';
import ReviewListPage from '../../routes/ReviewListPage/ReviewListPage';
import PrivateRoute from '../../routes/PrivateRoute/PrivateRoute';


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
        <PrivateRoute
          path={'/games'}
          component={GameListPage}
          />
        <PrivateRoute
          path={'/reviews'}
          component={ReviewListPage}
        />

      </Switch>
    </div>
  );
}

export default App;
