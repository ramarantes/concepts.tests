import React from 'react'

export default class extends React.Component{
    constructor(props){
        super(props);
        this.state = {counter:0};
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        document.title = `you have clicked ${this.state.counter} times`;
    }
    componentDidUpdate() {
        document.title = `you have clicked ${this.state.counter} times`;
    }

    handleClick(){
        this.setState({counter: this.state.counter + 1});
    }
    render(){
        return (
            <div>
                <p>You clicked {this.state.counter} times</p>
                <button onClick={this.handleClick}>Clicked</button>
            </div>
        )
    }
}