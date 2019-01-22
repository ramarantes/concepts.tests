import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Cep from './components/Cep'
import Loading from './components/Loading'

class App extends Component {
  constructor(props){
      super(props);

      this.state = {
        loading : false
      };
  }

  feliz(bla){ bla.setState({loading: !bla.state.loading}); };

  modal = () => {
      this.setState({loading: !this.state.loading});
      setTimeout(() => this.feliz(this), 3000);
  };


  render() {
    var loading = this.state.loading;
    return (
      <div className="App">
        <Cep consulta="84600066" click={this.modal}></Cep>
        <Loading show={this.state.loading ? "show" : ""}/>
        
      </div>
    );
  }
}

export default App;
