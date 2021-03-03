import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
function App()
{
	let state=useSelector(s=>s)
	let dispatch=useDispatch()
	let {user}=state
	return <div className="wrapper">
		<div className="card">	
			<h1>welcome {user.name}</h1>
			<p>your email address using right now : {user.email}</p>
			<p>current phone number  : {user.phone}</p>
			<p>my password  : {user.password}</p>
			<Link className="btn" to="/">Back to Home</Link>
		</div>
	</div>
}
export default App