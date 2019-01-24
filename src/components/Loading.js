import React from 'react'
import styled from 'styled-components'
import './Loading.css'
import {withAppContext} from '../providers/AppProvider';

const Div2 = styled.div`
            display:table-cell;
            vertical-align: middle;
        `;


function Debug (props){
    return   <pre>{JSON.stringify(props.value, null, 2)}</pre> 
}

function Loading(props){
    const {appContext} = props;
    return (      
        <div className={appContext.data.loading? 'loading loadingAtivo' : 'loading'}>
        {/* <Debug value={props}/> */}
        <Div2>
            <i className="fas fa-spinner fa-spin fa-3x" ></i>
        </Div2>   

           
        </div>          
    )
}

export default withAppContext(Loading);