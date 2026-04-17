import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import App from './App';
import './index.css';
import { TimelineProvider } from './context/TimelineContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <TimelineProvider>
        <App />
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 2200,
            style: {
              background: '#143c31',
              color: '#fff',
              borderRadius: '16px',
              padding: '14px 16px',
            },
          }}
        />
      </TimelineProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
