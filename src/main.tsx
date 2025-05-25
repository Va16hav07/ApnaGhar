import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { initEmailJS } from './utils/emailService.ts';
import { EMAIL_CONFIG } from './constants/config.ts';

// Initialize EmailJS with your user ID
initEmailJS(EMAIL_CONFIG.USER_ID);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);