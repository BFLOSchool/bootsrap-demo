import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';

import Home from './Home';
import Grid from './Grid';
import Components from './Components';
import Payment from './Payment';
import Welcome from './Welcome';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={Home}/>
      <Route exact path="/grid" component={Grid}/>
      <Route exact path="/components" component={Components}/>
      <Route exact path="/payment" component={Payment}/>
      <Route exact path="/welcome" component={Welcome}/>
    </div>
  </Router>,
 document.getElementById('root')
);


serviceWorker.unregister();
