import React from 'react'
import {Link} from 'react-router-dom'
import {auth} from '../../firebase/firebase.utils'
import {connect} from 'react-redux'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropDown from '../cart-dropdown/cart-dropdown.component'
import {toggleLogin} from '../../redux/login/login.actions'
import {selectCartHidden} from '../../redux/cart/cart.selectors'
import {selectCurrentUser} from '../../redux/user/user.selectors'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import {createStructuredSelector} from 'reselect'

import './header.styles.scss'


const Header = ({toggleLogin, currentUser, hidden}) => {

    const handleClick = () => {
        toggleLogin()
        auth.signOut()
    }

    return(
        <div className='header'>
            <Link to="/">
                <Logo className="Logo"/>
            </Link>
            <div className="options">
                <Link className="option" to="/shop">
                    SHOP
                </Link>
                <Link className="option" to="/contact">
                    CONTACT
                </Link>
                {
                    currentUser ?
                    (<div className='option' onClick = {handleClick}> 
                        SIGN OUT
                    </div>)
                    :
                    (<Link className='option' to="/signin">
                    SIGN IN
                    </Link>)
                }
                    <CartIcon/>
            </div>
            {hidden ? null :
            <CartDropDown />
    }
        </div>
    )
}

const mapStateToProps =  createStructuredSelector({
    currentUser :selectCurrentUser,
    hidden :selectCartHidden,
})

const mapDispatchToProps = (dispatch) => ({
    toggleLogin: () => dispatch(toggleLogin())
})
 

export default connect(mapStateToProps, mapDispatchToProps)(Header)