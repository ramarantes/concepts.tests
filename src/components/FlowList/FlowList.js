import React from 'react';
import API from './API';
import FlowItem from './FlowItem'

export default class extends React.Component {
    constructor(props){
        super(props);
        this.state = {obj:[]};
    }
    componentDidMount(){
        let x;
        API().then(res => this.setState({obj: res.data}));
    }
    render(){
        var obj = this.state.obj.map(x => 
            <FlowItem key={x.code}  {...x} /> 
        );

        return (<div>{obj}</div>)
    }
}
// export default props => {
//     let x;
//     let dataShow;
//     API().then(res => {x = res.data});
//     //dataShow = x.map(x => <div key={x.code}>{x.text}</div>);
//     debugger; 
// };