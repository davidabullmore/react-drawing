import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Draw from './components/Draw';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Draw />
      </div>
    );
  }
}

export default App;
