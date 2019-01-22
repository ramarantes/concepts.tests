import React from 'react'

export default class Cep extends React.Component {
    EventHandler = () => {
        this.props.click();
    };
    render(){

        return <div onClick={this.EventHandler}> Cep </div>
    }
}