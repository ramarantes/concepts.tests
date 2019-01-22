import React from 'react'
import styled from 'styled-components'
import './Loading.css'
export default class Loading extends React.Component{
    constructor(props){
        super(props);
        this.state = {show: false};
    }

    show = show =>{
        this.setState(show);
    }

    render(){
        const Div2 = styled.div`
            display:table-cell;
            vertical-align: middle;
        `;
            return (
            <div className={this.props.show == 'show'? 'loading loadingAtivo' : 'loading'}>
            <Div2>
                <i className="fas fa-spinner fa-spin fa-3x" ></i>
            </Div2>
            
        </div>);
    }

}