import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
function App(props)
{
	let state=useSelector(s=>s)
	let dispatch=useDispatch()
	let {users}=state
	let [ob,setob]=React.useState({name:"",email:"",phone:"",password:""})

	const submit=e=>{
		e.preventDefault()

		if(users.some(x=>x.email===ob.email))
		{
			alert("user already exists")
		}
		else
		{
			let allusers=[...users,{id:users.length+1,...ob}]
			dispatch({type:"signup",payload:allusers})
			alert("signup success")
			props.history.push("/Login")
		}
	}
	return <form onSubmit={submit}>
		<h1>Signup</h1>
		<p>name</p>
		<input placeholder="name" value={ob.name} onChange={e=>setob({...ob,name:e.target.value})} />
		<p>email</p>
		<input placeholder="email" value={ob.email} onChange={e=>setob({...ob,email:e.target.value})} />
		<p>phone</p>
		<input placeholder="phone" value={ob.phone} onChange={e=>setob({...ob,phone:e.target.value})} />
		<p>password</p>
		<input placeholder="password" value={ob.password} onChange={e=>setob({...ob,password:e.target.value})} />
		<button>Signup</button>
	</form>
}
export default App