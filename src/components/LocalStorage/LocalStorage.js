import React from 'react'

export default class LocalStorage extends React.Component {
    constructor(props){
        super(props);

        const key = "qtOpened";
        var qtOpened = localStorage.getItem(key);
        if(!qtOpened)
            qtOpened = "0";

        qtOpened = parseInt(qtOpened);
        qtOpened = ++qtOpened;
        localStorage.setItem(key,qtOpened);
        this.state = {qtOpened}
    }
    render(){
     
        return <div>Page opened {this.state.qtOpened} times</div>
    }
}