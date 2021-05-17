import {addItemToCart} from './cart.utils'

const Initial_State = {
    hidden : true,
    cartItems: []
}

const cartReducer = (state = Initial_State, action) => {
    switch(action.type){
        case 'TOGGLE_CART_HIDDEN':
            return{
                ...state,
                hidden : !state.hidden
            }
        case 'ADD_ITEM':
            return{
                ...state,
                cartItems: addItemToCart(state.cartItems, action.pay load)
            }
        default:
            return state
    }
}
export default cartReducer