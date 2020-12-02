// Core
import { StrictMode } from 'react';
import ReactDOM from 'react-dom';

// Components
import { App } from './app';

// Instruments
import reportWebVitals from './reportWebVitals';

// Styles
import './index.css';

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
