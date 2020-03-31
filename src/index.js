import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { Router } from 'react-router-dom'
import history from './history'
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons'
import {
  faStar as fasStar,
} from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(
  farStar,
  fasStar,
)

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById('root')
);

