import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
function App(props)
{
	let state=useSelector(s=>s)
	let dispatch=useDispatch()
	let {user}=state

	const logout=e=>{
		dispatch({type:"logout"})
		alert("logout success")
		props.history.push("/")
	}
	return <div className="wrapper">
		<div className="logout">	
			<h1>welcome {user.name}</h1>
			<button onClick={logout} className="btn">logout now</button>
		</div>
	</div>
}
export default App