import './App.css';
import Homepage from "./pages/homepage/homepage.component"
import shopPage from "./pages/shoppage/shop.component"
import {Switch, Route} from 'react-router-dom'
import Header from './components/header/header.component'
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import {auth} from './firebase/firebase.utils'
import React, { Component } from 'react';


class  App extends Component{

  constructor(){
    super()

    this.state={
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged( (user) => {
      this.setState({currentUser: user})
      console.log(user)
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }

  render(){
    return (
      <div >
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route exact path='/shop' component={shopPage}/>   
          <Route exact path='/signin' component={SignInAndSignUp}/>
        </Switch>
      </div>
    )
  }
}

export default App;
