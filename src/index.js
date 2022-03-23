import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Web3ReactProvider } from '@web3-react/core';
import { getLibrary, contract } from './utils/web3Library';


ReactDOM.render(
  <React.StrictMode>
    <Web3ReactProvider getLibrary={getLibrary} >
        <App />
    </Web3ReactProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
