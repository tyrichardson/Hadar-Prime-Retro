import React, { Component } from 'react';
import './ViewR.css';
import { connect } from 'react-redux';

class ViewRList extends Component {
 


  render() {
    return (

      <div className="View">
        <h4>{this.props.view.topic}</h4>
          <h6><i>Added on: {this.props.view.date}</i></h6>
          <p>{this.props.view.description}</p>
        <div className="ViewFooter">
            <button className="btn Delete"><i className="fa fa-trash"></i></button>
            <button className="btn Bookmark"><i className="fa fa-bookmark"></i></button>
        </div>
      </div> 


    );
  }
} 
          
const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default ViewRList;