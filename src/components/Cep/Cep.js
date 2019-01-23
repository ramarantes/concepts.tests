import React from 'react'
import SearchBar from './SearchBar'
import SearchResult from './SearchResult';
import CepApi from './API'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import styled from 'styled-components'

export default class Cep extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {data:null};
    }

    onSearchSubmit = async term =>{
        this.props.loading();
        const response = await CepApi.get(`/gera/cep/${term}`);
        this.setState({data:response.data}); 
        this.props.loading();
    }

    render(){
        const Divst = styled.div`
            margin:20px;
        `
        
        return( 
        
        <Grid container justify="center" >
        <Grid item xs={6}>
            <Paper>
                <SearchBar onSubmit = {this.onSearchSubmit}/>
                <Divst><SearchResult data={this.state.data}/></Divst>
            </Paper>
        </Grid>
        </Grid>           
            )
    }
}