import './App.css';
import { useState } from "react";
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
//screens
import HomeScreen from './screens/HomeScreen'
import CartScreen from './screens/CartScreen'
import ProductScreen from './screens/ProductScreen'

//components
import Navbar from './Components/Navbar'
import BackDrop from './Components/BackDrop'
import SideDrawer from './Components/SideDrawer'
function App() {
  const [sideToggle,setSideToggle]=useState(false)
  return (
  
      
      <Router>
{/* Navbar */}
<Navbar click={()=>setSideToggle(true)}></Navbar>
      {/* SideDrawer for mobile*/}
      <SideDrawer show={sideToggle} click={()=>setSideToggle(false)}></SideDrawer>
      {/* Backdrop */}
      <BackDrop show={sideToggle} click={()=>setSideToggle(false)}></BackDrop>
      
      <main>
        <Switch>
          <Route exact path="/" component={HomeScreen}></Route>
          <Route exact path="/products/:id" component={ProductScreen}></Route>
          <Route exact path="/cart" component={CartScreen}></Route>

        </Switch>
      </main>
      {/* Home Screen */}
      {/* Product Screen */}
      {/* Cart Screen */}
      </Router>
      
      
    
  );
}

export default App;
