import React, { Component } from 'react';
import './App.css';
import Cep from './components/Cep/Cep'
import Loading from './components/Loading'
import {Switch, Route} from 'react-router-dom'
import Test from './classes/test'

class App extends Component {
  constructor(props){
      super(props);

      this.state = {
        loading : false
      };

      Test.set(this.modal);

      
  }

  feliz(bla){ bla.setState({loading: !bla.state.loading}); };

  modal = () => {
      this.setState({loading: !this.state.loading});
      //setTimeout(() => this.feliz(this), 3000);
  };


  render() {
    var loading = this.state.loading;
    return (
      <div className="App">
        <Switch>
          <Route exact path='/cep' component={Cep}/> 
          {/* <Route exact path='/cep' render={(props) => <Cep {...props} loading={true}/>}/> */}

        
        </Switch>
        <Loading show={this.state.loading ? "show" : ""}/>
      </div>
    );
  }
}

export default App;
