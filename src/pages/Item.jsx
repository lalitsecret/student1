import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
function App(props)
{
	let state=useSelector(s=>s)
	let dispatch=useDispatch()
	let {loggedin,cart,user}=state
	let {x}=props


	const addtocart=item=>{
		if(cart.some(y=>y.uid===user.id && y.pid===item.id))
		{
			// cart update
			let single=cart.find(y=>y.uid===user.id && y.pid===item.id)
			let {id,qty}=single
			qty=qty+1
			cart=cart.map(y=>y.id===id?({...y,qty}):y)
			dispatch({type:"cart",payload:cart})
		}	
		else
		{
			// cart insert
			let ob={
				...user,
				...item,
				pid:item.id,
				uid:user.id,
				id:cart.length+1,
				qty:1
			}
			cart=[...cart,ob]
			dispatch({type:"cart",payload:cart})
		}
	}
	return <div className="item">
		<img src={require("./"+x.image)} alt=""/>
		<div>{x.title}</div>
		<div>{x.old}</div>
		<div>{x.new}</div>
		<div>
			<i style={{color:1<=x.rating?'orange':'silver'}} className="fa fa-star"></i>
			<i style={{color:2<=x.rating?'orange':'silver'}} className="fa fa-star"></i>
			<i style={{color:3<=x.rating?'orange':'silver'}} className="fa fa-star"></i>
			<i style={{color:4<=x.rating?'orange':'silver'}} className="fa fa-star"></i>
			<i style={{color:5<=x.rating?'orange':'silver'}} className="fa fa-star"></i>
		</div>
		<div className="discount">{x.discount} % off</div>
		<div className="tags">{x.tags}</div>
		{loggedin?<div onClick={e=>addtocart(x)} className="cart-btn">
			<i className="fa fa-shopping-cart"></i>
		</div>
		:null}
	</div>
}
export default App