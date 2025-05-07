import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';  // Pastikan App.jsx ada di dalam src
import './index.css';      // Jika anda menggunakan CSS

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
