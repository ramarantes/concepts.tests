import React, {Component} from 'react'
import TextField from '@material-ui/core/TextField';

class SearchBar extends Component{
    constructor(props){
        super(props);

        this.state = {term:''};
    }

    onChangeHandler = (e) => {
        var a = this;
        this.setState({term: e.target.value});
    };

    onSubmitHandler = (e) => {
        e.preventDefault();  
        this.props.onSubmit(this.state.term);
    }

    render(){
        return (
        <form onSubmit={this.onSubmitHandler}>
            <TextField
            id="standard-name"
            label="CEP"
            onChange={this.onChangeHandler}
            margin="normal"
            value={this.state.term}
        />
            
        </form>
        )
    }
}

export default SearchBar;