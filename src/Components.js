/* eslint-disable */
import React, { Component } from 'react';
import './App.css';

class Components extends Component {
  render() {
    return (
    <div>
       <div>
         <br />
         <div className="container">
          <h2>Alerts Examples</h2>
          <p>The below are example alerts</p>

          <div className="alert alert-primary" role="alert">
            A simple primary alert—check it out!
          </div>
          <div className="alert alert-secondary" role="alert">
            A simple secondary alert—check it out!
          </div>
          <div className="alert alert-success" role="alert">
            A simple success alert—check it out!
          </div>

          <hr />
          <h2>Buttons Examples</h2>
          <p>The below are example buttons</p>

          <button type="button" className="btn btn-primary">Primary</button>
          <button type="button" className="btn btn-secondary">Secondary</button>
          <button type="button" className="btn btn-success">Success</button>
          <button type="button" className="btn btn-danger">Danger</button>
          <button type="button" className="btn btn-warning">Warning</button>
          <button type="button" className="btn btn-info">Info</button>
          <button type="button" className="btn btn-light">Light</button>
          <button type="button" className="btn btn-dark">Dark</button>

          <hr />
          <h2>Cards Examples</h2>
          <p>The below are example cards</p>

          <div className="card" style={{width: '18rem'}}>
           <div className="card-body">
             <h5 className="card-title">Card title</h5>
             <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
             <a className="btn btn-primary">Go somewhere</a>
           </div>
         </div>

       </div>
      </div>
    </div>
    );
  }
}

export default Components;
