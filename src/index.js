import React from 'react';
import ReactDOM from 'react-dom/client'; // Guna `react-dom/client` untuk React 18
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root')); // Guna createRoot
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
