import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Cart from './Cart';
import Orders from './Orders';
import Profile from './Profile';
import Checkout from './Checkout';
import Logout from './Logout';
import Errpage from './Errpage';
function App()
{
	let state=useSelector(s=>s)
	let dispatch=useDispatch()
	return <BrowserRouter>
		<Header/>
			<div className="container">
				<Switch>
					<Route exact path="/" component={Home}/>
					<Route exact path="/Login" component={Login}/>
					<Route exact path="/Signup" component={Signup}/>
					<Route exact path="/Cart" component={Cart}/>
					<Route exact path="/Orders" component={Orders}/>
					<Route exact path="/Profile" component={Profile}/>
					<Route exact path="/Checkout" component={Checkout}/>
					<Route exact path="/Logout" component={Logout}/>
					<Route exact path="/Errpage" component={Errpage}/>
				</Switch>
			</div>
		<Footer/>
	</BrowserRouter>
}
export default App