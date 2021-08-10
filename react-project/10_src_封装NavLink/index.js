import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';      //记录页面性能

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    {/* BrowserRouter路由器       */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
