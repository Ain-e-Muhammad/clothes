import React, {Component} from 'react';
import Header from './components/header/header.component'
import Homepage from "./pages/homepage/homepage.component"
import shopPage from "./pages/shoppage/shop.component"
import {connect} from 'react-redux'
import CheckoutPage from './pages/checkout/checkout.component'
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import {setCurrentUser} from './redux/user/user.actions'
import {selectCurrentUser} from './redux/user/user.selectors'
import {Switch, Route, Redirect} from 'react-router-dom'
import {auth, createUserProfileDocument} from './firebase/firebase.utils'


import './App.css';

class  App extends Component{

  unsubscribeFromAuth = null

  componentDidMount(){
    const {setCurrentUser}=this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged( async (user) => {
      if(user){
        const userRef = await (createUserProfileDocument(user))
        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
              id: snapshot.id,
              ...snapshot.data()
            }
        )
      })
    }
    setCurrentUser(user)
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }

  render(){
    return (
      <div >
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route exact path='/shop' component={shopPage}/>   
          <Route exact path='/checkout' component = {CheckoutPage}/>
          <Route exact path='/signin' render = { () => this.props.currentUser ? (<Redirect to ='/'/>) : (<SignInAndSignUp/>) }/>
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state)
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => {
    dispatch(setCurrentUser(user))
  }
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
