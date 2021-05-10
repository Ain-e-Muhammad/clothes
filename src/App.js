import './App.css';
import Homepage from "./pages/homepage/homepage.component"
import shopPage from "./pages/shoppage/shop.component"
import {Switch, Route} from 'react-router-dom'
import Header from './components/header/header.component'


function App() {
  return (
    <div >
      <Header/>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/shop' component={shopPage}/>   
      </Switch>
      
    </div>
  );
}

export default App;
