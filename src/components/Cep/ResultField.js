import React from 'react'
import TextField from '@material-ui/core/TextField'

export default props =>{
    return (
        <TextField
            id="standard-read-only-input"
            label={props.label}
            defaultValue={props.field}
            fullWidth
            margin="normal"
            InputProps={{
            readOnly: true,
            }}
        />
    )
}