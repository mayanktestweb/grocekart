import { IconButton, Typography } from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';
import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'
import { SECONDARY } from '../colors';

import ProductContainer from '../components/ProductContainer'


let CategoryView = props => {
    
    let location = useLocation();
    let history = useHistory();

    const [products, setProducts] = useState([])

    useEffect(() => {

        let prods = props.products.filter(prod => {
            if(prod.category == location.state.code) return prod
        })

        setProducts([...prods]);

        return () => {
            
        }
    }, [location.code])

    let productsViewer = products.map(product => {
        return (
            <div key={product._id} style={{width: '50%'}}>
                <ProductContainer product={product} />
            </div>
        )
    })

    let totalPrice = () => {
        let tp = 0;
        props.cart.forEach(item => tp += item.price)
        return tp;
    }

    return (
        <div>
            <div style={{position: 'fixed', boxShadow: '2px 2px 3px gray', display: 'flex', 
            flexDirection: 'row', alignItems: 'center', height: 50, top: 0, width: '100%'}}>
                <IconButton style={{marginLeft: 10, marginRight: 10}} onClick={() => history.goBack()} >
                    <ArrowBack />
                </IconButton>
                <div style={{flexGrow: 1, display: 'flex', flexDirection: 'row', paddingLeft: 50}}>
                    <Typography variant='h6' style={{fontWeight: 'bold'}} >{location.state.category[props.userSettings.language]}</Typography>
                </div>
            </div>

            <div style={{marginTop: 50, paddingBottom: 70}}>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around',
                flexWrap: 'wrap'}} >
                    {productsViewer}
                </div>

                {props.cart.length > 0 &&
                    <div style={{position: 'fixed', bottom: 0, height: 50, left: 0, right: 0, 
                    display: 'flex', flexDirection: 'row', alignItems: 'center', 
                    backgroundColor: SECONDARY, paddingLeft: 10, paddingRight: 10}} onClick={() => {
                        history.push('/cart')
                    }} >
                        <Typography variant='subtitle2' style={{color: 'white'}} >{props.cart.length} Items</Typography>
                        <div style={{flexGrow: 1}} ></div>
                        <Typography variant='subtitle2' style={{color: 'white'}}>&#8377; {totalPrice()}</Typography>
                    </div>
                }

            </div>

        </div>
    )
}

let mapStateToProps = state => {
    return {
        products: state.products,
        cart: state.cart,
        userSettings: state.userSettings
    }
}

export default connect(mapStateToProps)(CategoryView);