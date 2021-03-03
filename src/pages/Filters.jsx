import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
function App()
{
	let state=useSelector(s=>s)
	let dispatch=useDispatch()
	let {filters,col,s}=state
	return <div className="filters">
		{filters.map(x=>
			<button
			onClick={e=>dispatch({type:"col",payload:x})}
			className={col===x?'active':''}
			>
			<i className="fa fa-sort"></i> 
			{x}
			</button>
		)
		}
		<input 
		value={s} 
		onChange={e=>dispatch({type:"s",payload:e.target.value})} 
		placeholder="search..." 
		/>
	</div>

}
export default App