import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from './components/ThemeContext';
import { AuthProvider } from './components/Login'; 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);


reportWebVitals();
