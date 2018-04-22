import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux';
import NewR from '../NewR/NewR.js'
import ViewR from '../ViewR/ViewR.js'


class App extends Component {
  render() {
    return (
     
    <Router>
      <div className="App">
        <nav>
         <header className="App-header">
           <h1 className="App-title">Oh, the places you've been</h1>
            <h4><i>Reflection Board</i></h4>
               <ul>
               <li>
                  <Link to="/NewR" className="navLink active">Add New Reflection</Link>
                 </li>
                 <li >
                   <Link to="/" className="navLink active">View Reflections</Link>
                 </li>
               </ul>
              <br/>
            </header>
          </nav>
          <div>
        <Route exact path="/" component={ViewR}/>
          </div>
          <div>
        <Route exact path="/NewR" component={NewR}/>
        </div>
       </div>
     </Router> 
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default App;
