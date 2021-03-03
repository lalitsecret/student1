import React from 'react'
import Filters from './Filters'
import Products from './Products'
import {useSelector,useDispatch} from 'react-redux'
function App()
{
	let state=useSelector(s=>s)
	let dispatch=useDispatch()
	return <div className="right">
		<Filters/>
		<Products/>
	</div>
}
export default App