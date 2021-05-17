import  {createSelector} from 'reselect'

const selectCart = (state) => {
    return(
        state.cart
    )
}

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => {
        return(
            cart.cartItems
        )
    }
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems) => {
        return(
            cartItems.reduce( (accumulatedQuanity, cartItem) => {
                return accumulatedQuanity+cartItem.quantity
            }, 0)
        )
    }
)

export const selectCartHidden = createSelector(
    [selectCart],
    (cart) => {
        return cart.hidden
    }
)