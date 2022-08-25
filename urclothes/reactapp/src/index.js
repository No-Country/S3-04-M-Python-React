import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import {AuthContextProvider} from './contexts/authContext';
import { Auth0Provider } from '@auth0/auth0-react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { ClothesProvider } from './contexts/AppProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <AuthContextProvider>
      <BrowserRouter>
        <Auth0Provider
            domain="rapahael.auth0.com"
            clientId="lWpX1ARyIi5qkU5FZhU3V72tVIJia62X"
            redirectUri={window.location.origin}
            >
          <ClothesProvider>
            <App />
          </ClothesProvider>
        </Auth0Provider>
      </BrowserRouter>
    </AuthContextProvider>
  </React.StrictMode>
);

// JWT token for testing purposes expire in 36000 seconds (10 hours)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
