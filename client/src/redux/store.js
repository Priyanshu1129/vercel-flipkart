import { createStore , combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {getProductsReducer, getProductDetailsReducer} from './reducers/productsReducer'
import { cartReducer } from './reducers/cartReducer'
import { composeWithDevTools} from 'redux-devtools-extension'

const reducer = combineReducers({
    productReducer: getProductsReducer,
    getProductDetails : getProductDetailsReducer,
    cart: cartReducer
})

const middleware = [thunk]

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store 