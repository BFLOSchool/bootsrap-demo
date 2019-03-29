/* eslint-disable */
import React, { Component } from 'react';

import './App.css';

class Home extends Component {
  render() {
    return (
      <div>
        <div>
          <br />
          <div className="container">
            <h2>Bootstrap Examples</h2>
            <p>We've put together a series of example bootstrap templates, make sure to view the source in your browser to see how these elements work</p>
            <hr />
            <ol>
              <li>
                <a href="/grid">Grid Page</a>
              </li>
              <li>
                <a href="/components">Components Page</a>
              </li>
              <li>
                <a href="/payment">Payment Page</a>
              </li>
              <li>
                <a href="/welcome">Welcome Page</a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
