import React from "react";
import '../App.css';

class Header extends React.Component{

  clickRed(e){
    this.props.setColor("#f44336");
  }

  clickGreen(e){
    this.props.setColor("#4CAF50");
  }

  clickBlue(e){
    this.props.setColor("#008CBA");
  }

  handleDecrament(e){
    const count = e.target.value;
    this.props.decrament(count);
  }

  render(){
    return(
      <div>
        <nav>
          <div className="colors">
            <span>Click a Color: </span>
            <button className="color-button red" onClick={this.clickRed.bind(this)}>Red</button>
            <button className="color-button green" onClick={this.clickGreen.bind(this)}>Green</button>
            <button className="color-button blue" onClick={this.clickBlue.bind(this)}>Blue</button>
          </div>
          <div className="actions">
            <button className="color-button grey" onClick={this.handleDecrament.bind(this)}>Undo</button>
            <button className="color-button light-grey">Save</button>
          </div>
          <div className="data">
            <p>Total Clicks: {this.props.count}</p>
            <p>Clicks This Session: {this.props.count}</p>
          </div>
        </nav>
      </div>
    );
  }

}

export default Header;
