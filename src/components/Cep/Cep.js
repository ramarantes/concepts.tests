import React from 'react'
import SearchBar from './SearchBar'
import SearchResult from './SearchResult';
import CepApi from './API'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import styled from 'styled-components'
import Loading from '../Loading'
import Test from '../../classes/test'

export default class Cep extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {data:null};
    }

    onSearchSubmit = async term =>{
        let a = Test.get();
        a();
        const response = await CepApi.get(`/gera/cep/${term}`);

        this.setState({data:response.data}); 
        a();
    }

    render(){
        const Divst = styled.div`
            margin:20px;
        `
        
        return( 
        <div style={{marginTop:10}}>
            <Grid container justify="center" >
            <Grid item xs={6}>
                <Paper>
                    <SearchBar onSubmit = {this.onSearchSubmit}/>
                    <Divst><SearchResult data={this.state.data}/></Divst>
                </Paper>
            </Grid>
            </Grid>           
            
        </div>
            )
    }
}