import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Ensure this file includes global styles
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from './components/ThemeContext'; // Adjust the path as necessary
import { AuthProvider } from './components/Login'; // Adjust the path to Login component if necessary

// Create the root element for rendering
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the application within the ThemeProvider and AuthProvider
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);

// Performance measuring function (optional)
reportWebVitals();
