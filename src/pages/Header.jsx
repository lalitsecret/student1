import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
function App()
{
	let state=useSelector(s=>s)
	let dispatch=useDispatch()
	let {loggedin,user,cart,orders}=state
	let mycart=cart.filter(x=>x.uid===user.id)
	let myorders=orders.filter(x=>x.uid===user.id)
	return <header>
		<div className="item">
			<h1>Sachin Ecommerce</h1>
		</div>
		<div className="item">
			<Link to="/" >Home</Link>

			{!loggedin?<Link to="/Login">Login</Link>:null}
			{!loggedin?<Link to="/Signup">Signup</Link>:null}
			{loggedin?<Link to="/Cart">Cart ({mycart.length})</Link>:null}
			{loggedin?<Link to="/Orders">Orders ({myorders.length})</Link>:null}
			{loggedin?<Link to="/Profile">Profile</Link>:null}
			{loggedin?<Link to="/Checkout">Checkout</Link>:null}
			{loggedin?<Link to="/Logout">Logout {user.name}</Link>:null}
		</div>
		
	</header>
}
export default App