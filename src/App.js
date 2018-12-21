import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Draw from './components/Draw';

class App extends Component {

  state={
    color: "#000",
  }

  swapState(){
    this.setState({color: "#ffc600"});
  }


  render() {
    return (
      <div className="App">



        <Draw
          color={this.state.color}
          swapState={this.swapState.bind(this)}
        />
      </div>
    );
  }
}

export default App;
