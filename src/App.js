import React, { Component } from 'react';
import './App.css';
import Cep from './components/Cep/Cep'
import Loading from './components/Loading'
import {Switch, Route} from 'react-router-dom'
import Test from './classes/test'
import LocalStorage from './components/LocalStorage/LocalStorage'
import FlowList from './components/FlowList/FlowList'

import {AppProvider} from './providers/AppProvider'

//shit calls kkk
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
    const {loading} = this.state;
    return (
      <AppProvider> 
      <div className="App">
        <Switch>
          <Route exact path='/cep' component={Cep}/> 
          <Route exact path='/localstorage' component={LocalStorage}/> 
          <Route exact path='/flowlist' component={FlowList}/> 
        </Switch>

        <Loading/>
      
      </div>
      </AppProvider>
    );
  }
}

export default App;
