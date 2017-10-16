import React from 'react';

class CustomMail extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(<input type="email" placeholder={this.props.mail}></input>);
    }
}

module.exports=CustomMail;