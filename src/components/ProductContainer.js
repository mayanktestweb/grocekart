import { Typography } from '@material-ui/core'
import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import { SECONDARY, TEXT_GREY, TEXT_WHITE } from '../colors'
import {Button} from '@material-ui/core'
import AddRemoveButton from './AddRemoveButton'


let ProductContainer = props => {

    return (
        <div style={{padding: 20, backgroundColor: '#fbfbfb'}}>
            <div style={{display: 'flex', flexDirection: 'column', borderColor: TEXT_GREY, backgroundColor: 'white',
             borderWidth: 0, borderStyle: 'solid', padding: 5, height: 130, boxShadow: '2px 3px 5px gray'}}>
                <div style={{width: 60, height: 60, marginLeft: 'auto', marginRight: 'auto'}}>
                    <img src={props.product.image} alt={props.product.name} style={{width: '100%', height
                : '100%'}}/>
                </div>
                <Typography variant="subtitle2" style={{marginTop: 5, fontWeight: 'bold', paddingBottom: 1}} >{props.product.name}</Typography>
                <Typography variant='caption' style={{}} >{props.product.label}</Typography>
                <div style={{flexGrow: 1}}></div>
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <AddRemoveButton product={props.product} />
                    <div style={{flexGrow: 1}}></div>
                    <Typography>&#x20B9; {props.product.price}</Typography>
                </div>
            </div>
        </div>
    )
}

export default ProductContainer