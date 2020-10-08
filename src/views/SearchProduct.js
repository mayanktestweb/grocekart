import { FormControl, IconButton, Input, InputAdornment, InputLabel, TextField } from '@material-ui/core'
import { ArrowBack } from '@material-ui/icons'
import React, {useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom'


let SearchProduct = props => {

    let history = useHistory()

    return (
        <div>
            <div style={{width: '100%', height: 50, boxShadow: '2px 2px 3px lightgray',
            padding: 5, display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <IconButton onClick={() => history.goBack()}>
                    <ArrowBack />
                </IconButton>
                <div style={{paddingLeft: 10}}>
                    <input type="text" placeholder="Search Products..." style={{fontSize: '1.2em', border: 'none'}} />
                </div>
            </div>
        </div>
    )
}

export default SearchProduct