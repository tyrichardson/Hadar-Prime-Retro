import React, { Component } from 'react';
import axios from 'axios';
import './NewR.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux';

class NewR extends Component {
  render() {
    return (

        <div className="NewForm">
          <form>
            <p>Topic</p>
            <input type="text" id="newTopic" name="topic"></input>
            <p>Reflection</p>
            <textarea rows="flex" cols="flex" name="description"></textarea>
            <br />
            <button type="button"  id="newSubmit">Submit</button>
          </form>
        </div> 
    );
  }
 }

 const mapReduxStateToProps = (reduxState) => ({
  reduxState
});       
 
 export default NewR;