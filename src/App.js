import './App.css';
import Homepage from "./pages/homepage/homepage.component"
import shopPage from "./pages/shoppage/shop.component"
import {Switch, Route} from 'react-router-dom'



function App() {
  return (
    <div >
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/shop' component={shopPage}/>   
      </Switch>
      
    </div>
  );
}

export default App;
