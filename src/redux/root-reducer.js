import {persistReducer} from 'redux-persist'
import userReducer from './user/user.reducer'
import cartReducer from './cart/cart.reducer'
import directoryReducer from'./directory/directory.reducer'
import shopReducer from './shop/shop.reducer'
import loginReducer from './login/login.reducers'
import storage from 'redux-persist/lib//storage'
import { combineReducers } from 'redux'

const persistConfig ={
    key: 'root',
    storage,
    whitelist: ['cart']
}


const rootReducer = combineReducers({
    user: userReducer,
    cart : cartReducer,
    directory : directoryReducer,
    shop: shopReducer,
    login:loginReducer
})


export default persistReducer(persistConfig, rootReducer)