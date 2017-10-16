import React from 'react';

class Custombutton extends React.Component {
    constructor(props) {
    super(props);
  }
    render() {
    return(
    <button type="button" >{this.props.value}
    </button>
    ); 
  }
} 
module.exports=Custombutton;