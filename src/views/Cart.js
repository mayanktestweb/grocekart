import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {useHistory, useLocation} from 'react-router-dom'
import {Button, IconButton, Typography } from '@material-ui/core'
import {ArrowBack } from '@material-ui/icons'
import { PRIMARY, SECONDARY, TEXT_WHITE } from '../colors'
import AddRemoveButton from '../components/AddRemoveButton'


let Cart = props => {

    let history = useHistory();
    let location = useLocation();

    let totalPrice = () => {
        let tp = 0;
        props.cart.forEach(item => {
            tp += item.price;
        })

        return tp;
    }

    let uniqueProductsIdInCart = () => {
        let uniqueProductsId = [];

        props.cart.forEach(item => {
            if(!uniqueProductsId.includes(item._id)) uniqueProductsId.push(item._id)
        })

        return uniqueProductsId.sort((a, b) => {
            if(productById(a).name > productById(b).name) return 1
            else if (productById(a).name < productById(b).name) return -1
            else return 0
        });
    }

    let productById = id => props.cart.find(item => {
        if(item._id == id) return item
    })

    let productTotalCostById = id => {
        let productTotalCost = 0;

        props.cart.forEach(item => {
            if(item._id == id) productTotalCost += item.price
        })

        return productTotalCost
    }

    let uniqueProductsInCart = uniqueProductsIdInCart().map(productId => {
        return (
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', padding: 2}} >
                <div style={{width: '30%'}}>{productById(productId).name}</div>
                <div style={{flexGrow: 1, height: 25}}>
                    <AddRemoveButton product={productById(productId)} />
                </div>
                <div>&#8377; {productTotalCostById(productId)}</div>
            </div>
        )
    })

    return (
        <div>
            <div style={{position: 'fixed', boxShadow: '2px 2px 3px gray', display: 'flex', 
            flexDirection: 'row', alignItems: 'center', height: 50, top: 0, width: '100%'}}>
                <IconButton style={{marginLeft: 10, marginRight: 10}} onClick={() => history.goBack()} >
                    <ArrowBack />
                </IconButton>
                <div style={{flexGrow: 1, display: 'flex', flexDirection: 'row', paddingLeft: 50}}>
                    <Typography variant='h6' style={{fontWeight: 'bold'}} >Cart</Typography>
                </div>
            </div>

            {props.cart.length === 0 &&
                <div style={{height: 500, display: 'flex', justifyContent: 'center',
                    alignItems: 'center'}}>
                    <Typography variant='h6' style={{color: SECONDARY}}>Cart Is Empty</Typography>
                    <div style={{position: 'fixed', bottom: 0, left: 0, right: 0, display: 'flex',
                    padding: 5, justifyContent: 'center', alignItems: 'center'}}>
                        <Button variant='contained' style={{backgroundColor: SECONDARY, 
                            color: TEXT_WHITE}} onClick={() => history.goBack()} >Go Back</Button>
                    </div>
                </div>
            }

            {props.cart.length > 0 &&
                <div style={{marginTop: 50}} >
                    <div style={{position: 'fixed', top: 50, padding: 5, display: 'flex',
                    flexDirection: 'row', alignItems: 'center', left: 0, right: 0, borderColor: 'black',
                    borderWidth: 1, borderStyle: 'solid'}} >
                        <Typography variant='h6' style={{color: PRIMARY}} >Total Amount</Typography>
                        <div style={{flexGrow: 10}}></div>
                        <Typography variant="h6" style={{color: PRIMARY}}>&#8377; {totalPrice()}</Typography>
                    </div>
                    <div style={{padding: 5, marginTop: 100}}>
                        {uniqueProductsInCart}
                    </div>

                    <div style={{position: 'fixed', bottom: 0, left: 0, right: 0, display: 'flex',
                    padding: 5, justifyContent: 'center', alignItems: 'center'}}>
                        <Button variant='contained' style={{backgroundColor: SECONDARY, 
                            color: TEXT_WHITE}} >Place Order</Button>
                    </div>
                </div>
            }

        </div>
    )
}

let mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps)(Cart)