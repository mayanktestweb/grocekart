import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import TouchRipple from '@material-ui/core/ButtonBase/TouchRipple'
import { SECONDARY } from '../colors'
import { Typography } from '@material-ui/core'

let AddRemoveButton = props => {

    
    let productsInCart = props.cart.filter(prd => {
        if(prd._id == props.product._id) return prd;
    })

    let MainBody = props => {
        if(productsInCart.length == 0) {
            return (
                
                <div style={{backgroundColor: SECONDARY, textAlign: 'center', borderRadius: 2,
                boxShadow: '2px 2px 5px lightgray'}} onClick={event => {
                    props.addProduct(props.product)
                }}>
                    <Typography variant="button" style={{fontSize: 12, color: 'white', fontWeight: 'bold',
                    textAlign: 'center'}} >ADD</Typography>
                </div>
                
            )
        } else {
            return (
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    
                    <div style={{width: '30%', backgroundColor: SECONDARY, color: 'white', borderRadius: 2,
                    display: 'flex', justifyContent: 'center', alignItems: 'center'}} onClick={event => {
                        props.addProduct(props.product)
                    }}>
                        &#43;
                    </div>
                    
                    <div style={{flexGrow: 1, textAlign: 'center'}}>{productsInCart.length}</div>
                    
                    <div style={{width: '30%', backgroundColor: SECONDARY, color: 'white', borderRadius: 2,
                    display: 'flex', justifyContent: 'center', alignItems: 'center'}} onClick={event => {
                        props.removeProduct(props.product)
                    }} >
                        &#45;
                    </div>
                    
                </div>
            )
        }
    }

    return (
        <div style={{width: '40%', padding: 5}}>
            <MainBody product={props.product} addProduct={props.addProduct} removeProduct={props.removeProduct} />
        </div>
    )
}

let mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

let mapActionsToProps = dispatch => {
    return {
        addProduct: product => dispatch({type: 'cart:addProduct', payload: product}),
        removeProduct: product => dispatch({type: 'cart:removeProduct', payload: product})
    }
}

export default connect(mapStateToProps, mapActionsToProps)(AddRemoveButton)