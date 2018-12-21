import React from "react";

class Header extends React.Component{

  clickRed(e){
    this.props.setColor("red");
  }

  clickGreen(e){
    this.props.setColor("green");
  }

  clickBlue(e){
    this.props.setColor("blue");
  }

  render(){
    return(
      <div>

        <button onClick={this.clickRed.bind(this)}>Red</button>
        <button onClick={this.clickGreen.bind(this)}>Blue</button>
        <button onClick={this.clickBlue.bind(this)}>Green</button>

      </div>
    );
  }

}

export default Header;
