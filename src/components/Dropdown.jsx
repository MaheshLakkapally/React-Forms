import React from 'react';

class CustomSelect extends React.Component{
    constructor(props){
    super(props);
    }
    render(){
    return(
    <div>
    <select type="dropdown" name="Employement type">
    <option>{this.props.value}</option>
    <option>{this.props.value1}</option>
    <option>{this.props.value2}</option>
    </select>
    </div>)
    }
    }

module.exports=CustomSelect;