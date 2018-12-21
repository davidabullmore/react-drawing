import React from "react";
import CanvasDraw from "react-canvas-draw";
import '../App.css';

class Draw extends React.Component{

  handleIncrament(e){
    const count = e.target.value;
    this.props.incrament(count);
  }

  render(){

    return(
      <div className="Draw" onClick={this.handleIncrament.bind(this)}>
        <CanvasDraw
          ref="thisCanvas"
          lazyRadius="0"
          brushRadius="1"
          brushColor={this.props.color}
          canvasWidth="100%"
          canvasHeight="100vh"
        />
      </div>
    );
  }
}

export default Draw;
