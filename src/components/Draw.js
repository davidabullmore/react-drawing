import React from "react";
import CanvasDraw from "react-canvas-draw";

class Draw extends React.Component{

  newState(e){
    const color = e.target.value;
    this.props.swapState();
  }

  render(){
    return(
      <div>
        <CanvasDraw
          brushRadius="1"
          brushColor={this.props.color}
          canvasWidth="100%"
          canvasHeight="100vh"
        />
        <button onClick={this.newState.bind(this)}>Press</button>
      </div>
    );
  }
}

export default Draw;
