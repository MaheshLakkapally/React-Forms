import React from 'react';

class CustomInput extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
return(<input type="textarea" placeholder={this.props.name}></input>);
    }
}

module.exports=CustomInput;