import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';

import Grid from './Grid';
import Components from './Components';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/grid" component={Grid}/>
      <Route exact path="/components" component={Components}/>
    </div>
  </Router>,
 document.getElementById('root')
);


serviceWorker.unregister();
