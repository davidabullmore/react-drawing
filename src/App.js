import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Draw from './components/Draw';
import Header from './components/Header';

class App extends Component {

  state={
    color: "#000",
  }

  setColor(newColor){
    this.setState({color: newColor});
  }


  render() {
    return (
      <div className="App">

        <Header
          color={this.state.color}
          setColor={this.setColor.bind(this)}
        />

        <Draw
          color={this.state.color}
          setColor={this.setColor.bind(this)}
        />
      </div>
    );
  }
}

export default App;
