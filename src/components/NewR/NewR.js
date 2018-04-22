import React, { Component } from 'react';
import axios from 'axios';
import './NewR.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux';

class NewR extends Component {
  constructor(props) {
    super()

    this.state = {
      newTopic: '',
      newDescription: ''
    }
      
  }

  handleChange = (event) => {
    this.setState({
      newTopic: event.target.value,
      newDescription: event.target.value
    })
  }
  
  handleSubmit = (event) => {
    let newRView = {topic: this.state.newTopic, description: this.state.newDescription}
    event.preventDefault();
    console.log('submit clicked', newRView);
    axios.post('/newR', newRView).then((response) => {
      this.setState({
       newTopic: '',
       newDescription: ''
      })
      console.log('succes posting newRView');
    }).catch((error) => {
      console.log('error posting newRView');
    })
  }

  render() {

    return (

        <div className="NewForm">
          <form>
            <p>Topic</p>
            <input type="text" id="newTopic" name="topic" onChange={this.handleChange}></input>
            <p>Reflection</p>
            <textarea rows="flex" cols="flex" name="description" onChange={this.handleChange}></textarea>
            <br />
            <button type="button"  id="newSubmit" onClick={this.handleSubmit}>Submit</button>
          </form>
        </div> 
    );
  }
 }

 const mapReduxStateToProps = (reduxState) => ({
  reduxState
});       
 
 export default NewR;