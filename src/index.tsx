import React from 'react';
import ReactDOM from 'react-dom/client';
import './pages/style/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


// Create a QueryClient instance
const queryClient = new QueryClient();

// Create the root and render the app
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* Ensure QueryClientProvider wraps the entire app */}
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);

// Optionally measure and report web vitals
reportWebVitals();
