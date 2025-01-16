// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Main App component

// Renders the App component to the root div in index.html
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
