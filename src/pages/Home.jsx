import React from 'react'
import Left from './Left'
import Right from './Right'
import {useSelector,useDispatch} from 'react-redux'
function App()
{
	let state=useSelector(s=>s)
	let dispatch=useDispatch()
	return <main><Left/><Right/></main>
}
export default App