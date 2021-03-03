import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
function App(props)
{
	let state=useSelector(s=>s)
	let dispatch=useDispatch()
	let {users}=state
	let [ob,setob]=React.useState({email:"",password:""})

	const submit=e=>{
		e.preventDefault()
		if(users.some(item=>item.email===ob.email && ob.password===item.password))
		{
			let me=users.find(item=>item.email===ob.email && ob.password===item.password)
			dispatch({type:"login",payload:me})
			alert("login success")
			props.history.push("/")
		}
		else
		{
			alert("failed to login")
		}
	}
	return <form onSubmit={submit}>
		<h1>Login</h1>
		<p>email</p>
		<input placeholder="email" value={ob.email} onChange={e=>setob({...ob,email:e.target.value})} />
		<p>password</p>
		<input placeholder="password" value={ob.password} onChange={e=>setob({...ob,password:e.target.value})} />
		<button>login</button>
	</form>
}
export default App