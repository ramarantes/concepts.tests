import React, { Component } from 'react';

const AppContext = React.createContext();

class AppProvider extends React.Component{

  state = {
    loading: false,
    myAppName: "Cep Searching",
    isAuthenticated: true
  }

  setLoading = (loading)=> this.setState({loading})

  logout = ()=>{
      alert('Bye')
      this.setState({isAuthenticated : false})
  }

  render(){
   return (<AppContext.Provider value={{ 
       data: {
       ...this.state
        }, 
        logout: this.logout,
        setLoading: this.setLoading   
   }}> 
      {this.props.children}
    </AppContext.Provider>)
  }
}

/** 
 * This is a HOC
 * a function that return a component
 * */ 
//https://medium.com/@muthuks/react-higher-order-components-hoc-explained-e6feb29913f1
 //https://wesbos.com/react-context/  < this one use context, but not the HOC
 
function withAppContext(Component){ 
  
  return function(props){
    return (
      <AppContext.Consumer>
        {(context=> <Component {...props} appContext={context} />)}
      </AppContext.Consumer>
    )
  }      
}

export {AppProvider,withAppContext};