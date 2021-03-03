import data from './data'
const initialState={
	products:data.products,
	users:data.users,
	cart:data.cart,
	orders:data.orders,
	filters:data.filters,
	tags:data.tags,
	col:"",
	order:true,
	tagname:"",
	s:"",
	user:{},
	loggedin:false
}
const reducer=(state=initialState,action) =>{
	console.log(action)
	switch(action.type)
	{
		case "tagname":
			return {
				...state,
				tagname:action.payload
			}
		case "col":
			return {
				...state,
				col:action.payload,
				order:!state.order
			}
		case "s":
			return {
				...state,
				s:action.payload
			}
		case "login":
			return {
				...state,
				user:action.payload,
				loggedin:true
			}
		case "logout":
			return {
				...state,
				user:{},
				loggedin:false
			}
			
		case "signup":
			return {
				...state,
				users:action.payload
			}
		case "cart":
			return {
				...state,
				cart:action.payload
			}
		case "orders":
			return {
				...state,
				orders:action.payload
			}
		default:
			return state
	}
}

export default reducer