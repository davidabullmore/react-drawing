import React from "react";

class Header extends React.Component{

  handleChange(e){
  const count = e.target.value;
  this.props.decrament(count);
}

}
