import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { PhoneListContextProvider } from './phoneContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <PhoneListContextProvider>
    <App />
  </PhoneListContextProvider>
);

