import './App.css';
import Homepage from "./pages/homepage/homepage.component"
import shopPage from "./pages/shoppage/shop.component"
import {Switch, Route} from 'react-router-dom'
import Header from './components/header/header.component'
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'

function App() {
  return (
    <div >
      <Header/>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/shop' component={shopPage}/>   
        <Route exact path='/signin' component={SignInAndSignUp}/>
      </Switch>
    </div>
  );
}

export default App;
