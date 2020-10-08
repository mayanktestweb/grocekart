import { Typography } from '@material-ui/core'
import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import { useHistory } from 'react-router-dom'


let CatagoryButton = props => {

    let history = useHistory();


    return (
        <div style={{padding: 20}}>
            <div style={{display: 'flex', flexDirection: 'column', padding: 5, borderRadius: 5,
            borderWidth: 2, borderStyle: 'solid', borderColor: 'gray'}} onClick={() => {
                history.push("/category", {category: props.name, code: props.code})
            }} >
                <div style={{width: 100, height: 80}}>
                    <img src={props.image} style={{width: '100%', height: '100%'}} alt=""/>
                </div>
                <Typography variant="subtitle2" style={{textAlign: 'center'}}>{props.name[props.userSettings.language]}</Typography>
            </div>
        </div>
    );
}

let mapStateToProps = state => {
    return {
        userSettings: state.userSettings
    }
}

export default connect(mapStateToProps)(CatagoryButton);