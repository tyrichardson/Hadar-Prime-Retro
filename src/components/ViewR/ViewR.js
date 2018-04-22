import React, { Component } from 'react';
import axios from 'axios';
import './ViewR.css';
import ViewRList from './ViewRList';


class ViewR extends Component {
  constructor(props) {
    super(props)

    this.state = ({
      viewList: []
    })
  }

  getViewItems = () => {
    axios.get('/viewR').then((response) => {
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

    let viewRList = this.state.viewList.map((view) => {
      return (<ViewRList key={view.id} view={view}/>)
    })

    return (

      <div>
        {viewRList}
      </div> 

    );
  }
} 
          
const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default ViewR;