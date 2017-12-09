import React from 'react';
import { UpDownComponent } from './components';
import reactLogo from './img/logo.svg';
import reduxLogo from './img/redux.svg';
import reduxSagaLogo from './img/redux-saga.svg';

import './App.scss';

const App = () => (
  <div className="App">
    <header className="App-header">
      <div className="logo-container">
        <img src={reactLogo} className="react-logo" alt="logo" />
        <img src={reduxLogo} className="redux-logo" alt="logo" />
        <img src={reduxSagaLogo} className="redux-saga-logo" alt="logo" />
      </div>
      <h1 className="App-title">{'Welcome to Danny\'s React/Redux Skeleton (feat. Redux-Saga)!'}</h1>
    </header>
    <UpDownComponent />
  </div>
);

export default App;
