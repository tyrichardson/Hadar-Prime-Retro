import React, { Component } from 'react';
import axios from 'axios';
import './View.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


class View extends Component {
  constructor(props) {
    super(props)

    this.state = ({
      viewList: []
    })
  }

  getViewItems = () => {
    axios.get('/new').then((response) => {
      console.log('getViewItems response', response);
      this.setState({
        viewList: response.data
      })
    }).catch((error) => {
      console.log("error getting viewList", error);
    })
  }

  componentDidMount() {
    this.getViewItems();
  }

  render() {
    return (

      <div className="View">
        <h4>What went well?</h4>
          <h6><i>Added on: 2018-04-20</i></h6>
          <p>Gave an icebreaker at public speaking practice. It was great. I loved it. What could have been better? Nothing.</p>
        <div className="ViewFooter">
            <button className="btn Delete"><i className="fa fa-trash"></i></button>
            <button className="btn Bookmark"><i className="fa fa-bookmark"></i></button>
        </div>
      </div> 


    );
  }
} 
          export default View;