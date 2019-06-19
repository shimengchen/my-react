import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import { LocaleProvider } from 'antd';
import RouterView from './components/RouterView'
import './App.css';

function App() {
  return (
    <LocaleProvider>
      <Router>
        <RouterView/>
      </Router>
    </LocaleProvider>
  );
}

export default App;
