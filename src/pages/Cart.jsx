import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
function App(props)
{
	let state=useSelector(s=>s)
	let dispatch=useDispatch()

	let {cart,user}=state

	const removefromcart=id=>{
		cart=cart.filter(x=>x.id!==id)
		dispatch({type:"cart",payload:cart})
	}
	const udpateqty=(id,qty) =>{
		cart=cart.map(x=>x.id===id?({...x,qty}):x)
		dispatch({type:"cart",payload:cart})
	}
		
	let mycart=cart.filter(x=>x.uid===user.id)	
	let subtotal=mycart
	subtotal=subtotal.length>0?(subtotal.map(x=>x.qty*x.new*x.discount/100).reduce((sum,next) =>sum+next)):0	

	return <div className="wrapper">
		<h1>My Cart ({mycart.length})</h1>
		<button onClick={e=>props.history.push("/Checkout")}>Checkout: {subtotal}</button>
		<table cellPadding="10" cellSpacing="0">
			<thead>
				<tr>
					<th>id</th>
					<th>title</th>
					<th>price</th>
					<th>products</th>
					<th>qty</th>
					<th>actions</th>
				</tr>
			</thead>
			<tbody>
				{mycart.map(x=>
					<tr>
						<td>{x.id}</td>
						<td>{x.title}</td>
						<td>{x.new}</td>
						<td>
							<img width="50" src={require("./"+x.image)} alt=""/>
						</td>
						<td>
							<button disabled={x.qty>10} onClick={e=>udpateqty(x.id,x.qty+1)}><i className="fa fa-plus"></i></button>
							<strong>{x.qty}</strong>
							<button disabled={x.qty<2} onClick={e=>udpateqty(x.id,x.qty-1)}><i className="fa fa-minus"></i></button>
						</td>
						<td>
							<button onClick={e=>removefromcart(x.id)}>
								<i className="fa fa-trash-o"></i>
							</button>
						</td>
					</tr>
					
				)}
			</tbody>
		</table>

	</div>
}
export default App