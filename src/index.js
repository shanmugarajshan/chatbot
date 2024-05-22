import React from 'react';
import { createRoot } from 'react-dom';
import './index.css';
import App from './App';

// Call createRoot before rendering
const root = createRoot(document.getElementById('root'));

// Render your React component inside the root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
