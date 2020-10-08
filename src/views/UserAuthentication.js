import { Button, IconButton, TextField, Typography } from '@material-ui/core'
import { ArrowBack } from '@material-ui/icons'
import React, {useState, useEffect} from 'react'
import { PRIMARY, SECONDARY, TEXT_WHITE } from '../colors'
import { useHistory } from 'react-router-dom'

let UserAuthentication = props => {

    const [pageToShow, setPageToShow] = useState('')

    let history = useHistory()

    useEffect(() => {
        let token = localStorage.getItem('user_token')
        if(token) {
            if(authenticateToken(token)) setPageToShow('user_data')
            else {
                localStorage.setItem('user_token', null)
                setPageToShow('get_mobile_number')
            }
        } else {
            setPageToShow('get_mobile_number')
        }
        return () => {
            
        }
    }, [])

    let authenticateToken = token => {
        return true;
    }

    return (
        <div>
            {pageToShow === 'get_mobile_number' &&
                <div style={{height: '100vh', width: '100%'}}>
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center',
                    boxShadow: '2px 2px 3px lightgray', height: '65%'}}>
                        <Typography variant="h5">
                            <span style={{color: PRIMARY, fontWeight: 'bold', fontStyle: 'none'}}>Groce</span>
                            <span style={{color: SECONDARY}}>Kart</span>
                        </Typography>
                    </div>
                    <div style={{position: 'fixed', top: 5, left: 5}}>
                        <IconButton onClick={() => history.goBack()}>
                            <ArrowBack />
                        </IconButton>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <Typography variant="h6" style={{fontWeight: 'bold', textAlign: 'center', marginTop: 10}}>Enter Number</Typography>
                        <TextField label="Mobile Number (10 digit)" type='number' style={{
                            marginTop: 10, marginLeft: 30, marginRight: 30
                        }} />

                        <div style={{marginTop: 15, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <Button variant="contained" style={{
                                backgroundColor: SECONDARY, color: TEXT_WHITE
                            }} >Confirm</Button>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default UserAuthentication