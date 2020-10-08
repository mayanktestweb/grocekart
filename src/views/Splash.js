import React, {useEffect, useState} from 'react'
import {Typography} from '@material-ui/core'
import { PRIMARY, SECONDARY } from '../colors'
import {useHistory} from 'react-router-dom'

let Splash = props => {

    let history = useHistory()

    useEffect(() => {
        
        setTimeout(() => {
            history.replace("/home")
        }, 2000);

        return () => {
            
        }
    }, [])

    return (
        <div style={{height: '100vh', width: '100%', display: 'flex', justifyContent: 'center',
            alignItems: 'center'}}>
                <Typography variant="h3">
                    <span style={{color: PRIMARY, fontWeight: 'bold', fontStyle: 'none'}}>Groce</span>
                    <span style={{color: SECONDARY}}>Kart</span>
                </Typography>
        </div>
    )
}


export default Splash