import { combineReducers, createStore } from 'redux'

import ProductsReducer from './reducers/Products'
import HighlightsReducer from './reducers/HighlightProducts'
import CartReducer from './reducers/Cart'
import UserSettingsReducer from './reducers/UserSettings'

let testReducer = (state = "this is test reducer", action) => {
    return state;
}



let store = createStore(combineReducers({
    reducer: testReducer,
    products: ProductsReducer,
    highlights: HighlightsReducer,
    cart: CartReducer,
    userSettings: UserSettingsReducer
}))

export default store;