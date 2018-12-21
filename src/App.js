import React, { Component } from 'react';
import './App.css';
import Draw from './components/Draw';
import Header from './components/Header';

class App extends Component {

  state={
    color: "#000",
    count: 0,
  }

  setColor(newColor){
    this.setState({color: newColor});
  }

  incrament(count){
    this.setState({count: this.state.count + 1});
  }

  decrament(count){
    if(this.state.count === 0){
      this.setState({count: 0});
    } else{
      this.setState({count: this.state.count -1});
    }
  }

  render() {
    return (
      <div className="App">
        <Header
          color={this.state.color}
          setColor={this.setColor.bind(this)}
          count={this.state.count}
          decrament={this.decrament.bind(this)}
        />

        <Draw
          color={this.state.color}
          setColor={this.setColor.bind(this)}
          count={this.state.count}
          incrament={this.incrament.bind(this)}
        />
      </div>
    );
  }
}

export default App;
