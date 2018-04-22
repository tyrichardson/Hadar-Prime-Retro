import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux'; 
import { Provider } from 'react-redux'; 
import logger from 'redux-logger' 

const storeInstance = createStore(
  combineReducers({

  }),
  //middleware
  applyMiddleware(logger),
)






ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
