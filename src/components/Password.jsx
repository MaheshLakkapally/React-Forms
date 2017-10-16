import React from 'react';

class Password extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
return(<input type="text" placeholder={this.props.Password}></input>);
    }
}

module.exports=Password;