import React from 'react'
import SearchBar from './SearchBar'
import SearchResult from './SearchResult';
import CepApi from './API'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import styled from 'styled-components'
import Loading from '../Loading'
import Test from '../../classes/test'
import {withAppContext} from '../../providers/AppProvider'

const Divst = styled.div`
margin:20px;
`

class Cep extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {data:null};
    }

    onSearchSubmit = async term =>{
      
        this.props.appContext.setLoading(true);
        const response = await CepApi.get(`/gera/cep/${term}`);

        this.setState({data:response.data}); 
        this.props.appContext.setLoading(false);
      
    }

    render(){
       const {appContext} = this.props;
        return( 
        <div style={{marginTop:10}}>
        <button onClick={appContext.logout}>Logout</button>
            <Grid container justify="center" >
            <Grid item xs={6}>
            <h1>{appContext.data.myAppName}</h1>
                <Paper>
                    <SearchBar onSubmit = {this.onSearchSubmit}/>
                    <Divst><SearchResult data={this.state.data}/></Divst>
                </Paper>
            </Grid>
            </Grid>         
           
            {appContext.data.isAuthenticated && <div>
               hello there

            </div>} 
           
        </div>
            )
    }
}

export default withAppContext(Cep) 
// export default Cep;