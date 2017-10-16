import React from 'react';

class Checkbox extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                {this.props.value}  <input type = {this.props.t2} name={this.props.name} placeholder = {this.props.p1} />

            </div>
        )
    }

}
module.exports=Checkbox;