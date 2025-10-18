import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { RegisterProvider } from './components/context/RegisterContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RegisterProvider>
        <App />
      </RegisterProvider>
    </BrowserRouter>
  </React.StrictMode>
);

