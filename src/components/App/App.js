import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import New from '../New/New.js'
import View from '../View/View.js'


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
                  <Link to="/New" className="active">Add New Reflection</Link>
                 </li>
                 <li >
                   <Link to="/" className="active">View Reflections</Link>
                 </li>
               </ul>
              <br/>
            </header>
          </nav>
          <div>
        <Route exact path="/" component={View}/>
          </div>
          <div>
        <Route exact path="/New" component={New}/>
        </div>
       </div>
     </Router> 
    );
  }
}

export default App;
