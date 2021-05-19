import React from 'react'
import './checkout.styles.scss'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import{selectCartItems, selectCartTotal} from '../../redux/cart/cart.selectors'
import {selectLoginState} from '../../redux/login/login.selectors'
import { Redirect } from 'react-router'

const CheckoutPage = ({cartItems, total, login}) => {
    return(
        login === true ?
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map( (cartItem) => {
                    return(
                        <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
                    )
                })
            }

            <div className='total'>
                <span>Total : $ {total}</span>
            </div>
        </div>
        :
        <Redirect to='/signin'/>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total : selectCartTotal,
    login : selectLoginState
})

export default connect(mapStateToProps)(CheckoutPage)