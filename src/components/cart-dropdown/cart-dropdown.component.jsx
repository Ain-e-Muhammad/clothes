import React from 'react'
import CustomButton from '../custom-button/custom-button.component'
import './cart-dropdown.styles.scss'
import CartItem from '../cart-item/cart-item.component'
import {connect} from 'react-redux'
import {selectCartItems} from '../../redux/cart/cart.selectors'
import {withRouter} from 'react-router-dom'

const CartDropDown = ({cartItems, history}) => {
    return(
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {
                    cartItems.length
                    ?
                    cartItems.map ( (cartItem) => {
                        return <CartItem key={cartItem.id} item={cartItem}/>
                    })
                    :(
                    <span className='empty-message'>YOUR CART IS EMPTY</span>
                )}
            </div>
            <CustomButton onClick={() => history.push('./checkout')}>CHECKOUT</CustomButton>
        </div>
    )
}

const mapStateToProps = (state) => ({
    cartItems : selectCartItems(state)
})

export default withRouter(connect(mapStateToProps)(CartDropDown))