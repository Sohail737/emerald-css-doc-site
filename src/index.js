import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {AsideProvider} from "./aside-component/AsideContext"

ReactDOM.render(
  <React.StrictMode>
    <AsideProvider>
    <App />
    </AsideProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

