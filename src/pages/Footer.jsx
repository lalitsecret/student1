import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
function App()
{
	let state=useSelector(s=>s)
	let dispatch=useDispatch()
	return <footer>
		crafted by <span> <i className="fa fa-heart"></i> Sachin Yadav </span>
	</footer>
}
export default App