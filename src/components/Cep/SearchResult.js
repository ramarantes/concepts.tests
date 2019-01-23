import React, {Component} from 'react'
import Field from './ResultField'

class SearchResult extends Component{

    render(){
        if(this.props.data){
            var result = this.props.data
        return <div>
            <Field label="Rua" field={result.rua} fullWidth/>
            <Field label="Bairro" field={result.namebairro}/>
            <Field label="Cidade" field={result.namecidade}/>
            <Field label="Estado" field={result.nameestado}/>
            <Field label="Pais" field={result.namepais}/>
            </div>
        }
        return "";
    }
}
export default SearchResult;