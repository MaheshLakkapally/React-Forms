import React from 'react';

class Date extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(<input type="date" placeholder={this.props.Date}></input>);
    }
}

module.exports=Date;