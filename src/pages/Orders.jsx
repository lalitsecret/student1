import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
function App(props)
{
	let state=useSelector(s=>s)
	let dispatch=useDispatch()

	let {orders,user}=state

	let myorders=orders.filter(x=>x.uid===user.id)	
	let subtotal=myorders
	subtotal=subtotal.length>0?(subtotal.map(x=>x.qty*x.new*x.discount/100).reduce((sum,next) =>sum+next)):0

	return <div className="wrapper">
		<h1>My orders ({myorders.length})</h1>
		<button>Total Amount Paid Till now: {subtotal}</button>
		<table cellPadding="10" cellSpacing="0">
			<thead>
				<tr>
					<th>id</th>
					<th>title</th>
					<th>price</th>
					<th>products</th>
					<th>qty</th>
				</tr>
			</thead>
			<tbody>
				{myorders.map(x=>
					<tr>
						<td>{x.id}</td>
						<td>{x.title}</td>
						<td>{x.new}</td>
						<td>
							<img width="50" src={require("./"+x.image)} alt=""/>
						</td>
						<td>
							<strong>{x.qty}</strong>
						</td>
					</tr>
					
				)}
			</tbody>
		</table>

	</div>
}
export default App