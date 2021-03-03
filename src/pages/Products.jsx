import React from 'react'
import Item from './Item'
import {useSelector,useDispatch} from 'react-redux'
function App()
{
	let state=useSelector(s=>s)
	let dispatch=useDispatch()
	let {products,tagname,col,order,s}=state

	products=products.filter(x=>x.tags.startsWith(tagname))
	products=products.filter(x=>Object.values(x).join("").includes(s))
	products=products.sort((x,y) =>order?(x[col]-y[col]):(y[col]-x[col]))
	return <div className="products">
		{products.map(x=><Item key={x.id} x={x} />)}
	</div>
}
export default App