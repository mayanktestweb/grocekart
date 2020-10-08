import React, {useState, useEffect} from 'react'
import {AppBar, FormControl, IconButton, InputLabel, MenuItem, Select, Typography} from '@material-ui/core'
import { ArrowBack } from '@material-ui/icons'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'


let UserSettings = props => {

    let history = useHistory()

    return (
        <div>
            <div style={{height: 50, width: '100%', display: "flex", flexDirection: 'row',
            alignItems: 'center', boxShadow: '2px 2px 3px lightgray'}} >
                <IconButton onClick={() => history.goBack()}>
                    <ArrowBack />
                </IconButton>
                <Typography variant="subtitle2">
                    User Settings
                </Typography>
            </div>

            <div>
                <div style={{padding: '15px 20px'}}>
                    <FormControl style={{width: '100%'}} >
                        <InputLabel id="language-id">Language - भाषा</InputLabel>
                        <Select value={props.userSettings.language} onChange={(event) => {
                            props.setLanguage(event.target.value)
                        }} >
                            <MenuItem value="english">English</MenuItem>
                            <MenuItem value="hindi">हिंदी</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </div>

        </div>
    )
}

let mapStateToProps = state => {
    return {
        userSettings: state.userSettings
    }
}

let mapActionToProps = dispatch => {
    return {
        setLanguage: language => dispatch({type: 'userSettings:SET_LANGUAGE', payload: language})
    }
}

export default connect(mapStateToProps, mapActionToProps)(UserSettings)