import React , {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {Button, Typography, AppBar, Toolbar, IconButton, TextField, InputAdornment, SwipeableDrawer} from '@material-ui/core'
import {ThemeProvider, createMuiTheme} from '@material-ui/core/styles'
import { HomeRounded, ShopOutlined, ViewListRounded, ShoppingCartRounded, Menu, AccountCircleOutlined, Search, Settings } from '@material-ui/icons'
import {BrowserRouter, Route, Switch, useHistory, NavLink} from 'react-router-dom'

import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, {Autoplay} from 'swiper'
import 'swiper/swiper-bundle.css'

import {TEXT_GREY, PRIMARY, SECONDARY, TEXT_WHITE} from '../colors'

import CategoryButton from '../components/CategoryButton'
import ProductContainer from '../components/ProductContainer'

import Cart from '../components/Cart'
import CatagoryButton from '../components/CategoryButton'

let Home = props => {

    const [bottomNavValue, setBottomNavValue] = useState('home')
    const [initSlide, setInitSlide] = useState(0)
    const [openDrawer, setOpenDrawer] = useState(false)

    let history = useHistory();

    SwiperCore.use([Autoplay]);

    const bottomNavTheme = createMuiTheme({
        overrides: {
        }
    })

    let HighlightsComp = props => {
        let hls = [...props.highlights];

        let pages = hls.length / 3;
        if(hls.length % 3 > 0) pages += 1;

        let slides = [];

        for(var i = 0; i < pages; i++) {
            let prds = [];
            prds.push(hls.pop());
            if(hls.length > 0) prds.push(hls.pop());

            let PrdsComp = (
                    <SwiperSlide key={i}>
                        <div style={{display: 'flex', flexDirection: 'row'}}>
                            {prds.map(prd => {
                                return (
                                    <div key={prd._id} style={{width: '50%'}}>
                                        <ProductContainer product={prd} />
                                    </div>
                                )
                            })}
                        </div>
                    </SwiperSlide>
            )

            slides.push(PrdsComp)
        }
        return (
            <Swiper>
                {slides}
            </Swiper>
        )
    }

    let LoadedComponent = props => {
        if(bottomNavValue == 'home') {
            return (
                <div style={{paddingBottom: 150}}>
                    <AppBar position="fixed">
                        <Toolbar style={{backgroundColor: PRIMARY, height: 50}}>
                            <IconButton edge="start" onClick={() => setOpenDrawer(true)}>
                                <Menu style={{color: TEXT_WHITE}}/>
                            </IconButton>
                            <Typography>
                                GroceKart
                            </Typography>
                            <div style={{flexGrow: 1}} ></div>
                            <IconButton edge="end" onClick={() => history.push('/user_authentication')}>
                                <AccountCircleOutlined style={{color: TEXT_WHITE}} />
                            </IconButton>
                        </Toolbar>
                    </AppBar>

                    <SwipeableDrawer onClose={() => setOpenDrawer(false)} open={openDrawer} 
                    onOpen={() => setOpenDrawer(true)}>
                        <div style={{width: 250}}>
                            <div style={{height: 150, width: '100%', display: 'flex',
                        justifyContent: 'center', alignItems: 'center', boxShadow: '2px 2px 5px gray'}}>
                            <Typography variant="h6">
                                <span style={{color: PRIMARY, fontWeight: 'bold', fontStyle: 'none'}}>Groce</span>
                                <span style={{color: SECONDARY}}>Kart</span>
                            </Typography>
                        </div>

                        <div style={{padding: 5, display: 'flex', flexDirection: 'column',
                         marginTop: 10}}>
                             <div style={{display: 'flex', flexDirection: 'row', alignItems: 
                                'center', padding: 5}} onClick={() => history.push("/usersettings")} >
                                    <Settings />
                                    <Typography variant='button' style={{paddingLeft: 10}} >User Settings</Typography>
                             </div>
                        </div>

                        </div>
                    </SwipeableDrawer>
                    
                    
                    
                    
                    
                    
                    <div style={{marginTop: 50, display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: PRIMARY, padding: 20}}>
                        <div style={{backgroundColor: 'white', borderColor: 'lightgray', borderWidth: 1,
                        borderStyle: 'solid', borderRadius: 5, display: 'flex', flexFlow: 'row', padding: 5}} 
                        onClick={() => history.push("/searchproduct")} >
                            <Search style={{color: 'lightgray'}} />
                            <Typography variant="body1" style={{color: "lightgray"}} >Search Products</Typography>
                        </div>
                    </div>
                    
                    
                    
                    
                    
                    
                    <div>
                        <Swiper slidesPerView={1} loop={true} autoplay={{
                            delay: 1500, disableOnInteraction: false
                        }} >
                            <SwiperSlide>
                                <div style={{width: '100%', height: 200}}>
                                    <img style={{width: '100%', height: '100%'}} src="https://previews.123rf.com/images/vasilyrosca/vasilyrosca1909/vasilyrosca190900193/129835964-special-offer-banner-poster-background-sale-promotion-offer-template-design-vector-yellow-sale-price.jpg" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div style={{width: '100%', height: 200}}>
                                    <img style={{width: '100%', height: '100%'}} src="https://www.baapoffers.com/uploads/grofers-get-30-cashback-on-grocery.jpg" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div style={{width: '100%', height: 200}}>
                                    <img style={{width: '100%', height: '100%'}} src="https://dealroup.com/wp-content/uploads/2020/05/Grocery-Offers-1024x536.jpg" />
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>


                    
                    <div style={{marginTop: 10}} >
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
                            <CatagoryButton name={{english: 'Eggs Milk', hindi: 'दूध अंडे'}} code="eggs_milk" image="https://journosdiary.files.wordpress.com/2019/04/milk.jpg" />
                            <CatagoryButton name={{english: 'Vegitables', hindi: 'सब्जियां'}} code="vegitables" image="https://cdn.sanity.io/images/0vv8moc6/contobgyn/b72d5bf4f6a84b6ca4af8f330f19b1ec7acb877e-3504x2336.jpg" />
                        </div>
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
                            <CatagoryButton name={{english: 'Grocery', hindi: 'किराना'}} code="grocery" image="https://i.pinimg.com/originals/14/c3/c5/14c3c5c519398e5c7f897d4ef082a8e1.jpg" />
                            <CatagoryButton name={{english: 'Fruits', hindi: 'फल'}} code="fruits" image="https://www.eatforhealth.gov.au/sites/default/files/images/the_guidelines/fruit_selection_155265101_web.jpg" />
                        </div>
                    </div>

                    
                    
                    
                    <div>
                        <div style={{marginTop: 10, marginLeft: 30, marginBottom: 10}}>
                            <Typography variant="h6" style={{fontWeight: 'bold'}} >Highlights</Typography>
                        </div>

                        <div>
                            <HighlightsComp highlights={props.highlights} />
                        </div>

                    </div>


                </div>
            )
        } else if (bottomNavValue == 'orders') {
            return (
                <h3>Orders</h3>
            )
        } else if (bottomNavValue == 'cart') {
            return (
                <h3>Cart</h3>
            )
        }
    }

    let totalPrice = () => {
        let total = 0;
        props.cart.forEach(item => {
            total += item.price;
        })

        return total;
    }

    return (
        <div style={{height: '100vh'}}>

            <div>
                <LoadedComponent highlights={props.highlights} />
            </div>


            {props.cart.length > 0 &&
                <div style={{position: 'fixed', bottom: 60, right: 0, left: 0, display: 'flex',
                backgroundColor: SECONDARY, flexDirection: 'row', padding: 10}} onClick={() => history.push("/cart")}>
                    <Typography variant="subtitle2" style={{color: TEXT_WHITE}}>{props.cart.length} Items</Typography>
                    <div style={{flexGrow: 1}}></div>
                    <Typography variant="subtitle2" style={{color: TEXT_WHITE}}>&#x20B9; {totalPrice()}</Typography>
                </div>
            }

            <div style={{position: 'fixed', bottom: 0, width: '100%', display: 'flex', zIndex: 10,
            flexDirection: 'row', justifyContent: 'space-around', boxShadow: '2px 2px 5px black',  backgroundColor: 'white' }}>
                <div>
                    <Button onClick={event => setBottomNavValue('home')}>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <HomeRounded style={{color: bottomNavValue == 'home' ? SECONDARY : TEXT_GREY}} />
                            <Typography variant="button" style={{color: bottomNavValue == 'home' ? SECONDARY : TEXT_GREY}}>HOME</Typography>
                        </div>
                    </Button>
                </div>
                <div>
                    <Button onClick={event => setBottomNavValue('orders')}>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <ViewListRounded style={{color: bottomNavValue == 'orders' ? SECONDARY : TEXT_GREY}} />
                            <Typography variant="button" style={{color: bottomNavValue == 'orders' ? SECONDARY : TEXT_GREY}}>ORDERS</Typography>
                        </div>
                    </Button>
                </div>
                <div>
                    <Button onClick={event => history.push('/cart')}>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <ShoppingCartRounded style={{color: bottomNavValue == 'cart' ? SECONDARY : TEXT_GREY}} />
                            <Typography variant="button" style={{color: bottomNavValue == 'cart' ? SECONDARY : TEXT_GREY}}>CART</Typography>
                        </div>
                    </Button>
                </div>
            </div>
        </div>
    )
}

let mapStateToProps = state => {
    return {
        products: state.products,
        highlights: state.highlights,
        cart: state.cart
    }
}

export default connect(mapStateToProps)(Home)