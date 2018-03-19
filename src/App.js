import React, { Component } from 'react';
import Medal from './Medal/Medal';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src='./img/logo.png' className="App-logo" alt="logo" />
        </header>
        <div className="App-intro">
          <Medal />
        </div>
      </div>
    );
  }
}

export default App;
