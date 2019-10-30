import React from 'react';
import { Router } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import Routes from './routes';
import history from './services/history';

import GlobalStyle from './styles/global';

import 'react-toastify/dist/ReactToastify.css';

require('dotenv').config();

function App() {
  return (
    <Router history={history}>
      <Routes />
      <GlobalStyle />
      <ToastContainer />
    </Router>
  );
}

export default App;
