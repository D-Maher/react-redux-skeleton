import React from 'react';
import { UpDownComponent } from './components';
import reactLogo from './logo.svg';
import reduxLogo from './redux.svg';

import './App.scss';

const App = () => (
  <div className="App">
    <header className="App-header">
      <div className="logo-container">
        <img src={reactLogo} className="react-logo" alt="logo" />
        <img src={reduxLogo} className="redux-logo" alt="logo" />
      </div>
      {/*<img src="winter_is_coming.png" className="App-logo" alt="logo" />*/}
      <h1 className="App-title">{'Welcome to Danny\'s React/Redux Skeleton!'}</h1>
    </header>
    <UpDownComponent />
  </div>
);

export default App;
