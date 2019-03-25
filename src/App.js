import React, { Component } from 'react';
import './App.css';
import Cep from './components/Cep/Cep'
import Loading from './components/Loading'
import {Switch, Route} from 'react-router-dom'
import Test from './classes/test'
import Counter from './components/Counter'


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
    return (
      <AppProvider> 
      <div className="App">
        <Switch>
          <Route exact path='/cep' component={Cep}/> 
          {/* <Route exact path='/cep' render={(props) => <Cep {...props} loading={true}/>}/> */}
          <Route path='/counter' component={Counter}/>
        
        </Switch>

        <Loading/>
      
      </div>
      </AppProvider>
    );
  }
}

export default App;
