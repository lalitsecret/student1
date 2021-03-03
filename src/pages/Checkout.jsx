import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
function App(props)
{
	let state=useSelector(s=>s)
	let dispatch=useDispatch()
	let {cart,orders,user}=state


	const submit=e=>{
		e.preventDefault()
		let mycart=cart.filter(x=>x.uid===user.id)
		let notmycart=cart.filter(x=>x.uid!==user.id)
		orders=[...orders,...mycart]
		cart=notmycart
		dispatch({type:"orders",payload:orders})
		dispatch({type:"cart",payload:cart})
		alert("checkout successfull")
		props.history.push("/Orders")
	}

	return <div className="wrapper">
		<h1>Checkout process</h1>
		<form onSubmit={submit}>
			<h3>Billing Address</h3>
			<p>country</p>
			<input placeholder="country"/>
			<p>city</p>
			<input placeholder="city"/>
			<p>state</p>
			<input placeholder="state"/>
			<p>pincode</p>
			<input placeholder="pincode"/>
			<p>address</p>
			<input placeholder="address"/>
			<p>street</p>
			<input placeholder="street"/>
			<button>pay now</button>
		</form>
	</div>
}
export default App