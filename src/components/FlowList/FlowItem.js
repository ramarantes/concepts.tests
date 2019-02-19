import React from 'react';

export default class FlowItem extends React.Component{

    componentDidMount(){
        console.log(`component ${this.props.code} just mounted`);
    }
    render(){
        return <div style={{"height":"100px"}}>{this.props.text}</div>
    }
}