import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
function App()
{
	let state=useSelector(s=>s)
	let dispatch=useDispatch()
	let {tags,tagname,products}=state
	return <div className="left">
		<p
		onClick={e=>dispatch({type:"tagname",payload:""})}
		className={tagname===''?'active':''}
		>
			All Products <span>{products.length}</span>
		</p>
		{tags.map(x=>
			<p
			onClick={e=>dispatch({type:"tagname",payload:x.t})}
			className={tagname===x.t?'active':''}
			>
			{x.t} 
			<span>{x.c}</span></p>
		)}
	</div>
}
export default App