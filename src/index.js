import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import store from './redux/configureStore';
import App from './App';
import './assets/App.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store} />
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
