import { ADD_TO_CART, CLEAR_CART } from "./actionTypes";

const initialState = {
	cartItems: [],
	total: 0,
};

const cartReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TO_CART:
			return {
				...state,
				cartItems: [...state.cartItems, action.payload],
				total: state.total + action.payload.price,
			};
		case CLEAR_CART:
			return {
				...state,
				cartItems: [],
				total: 0,
			};
		default:
			return state;
	}
};

export default cartReducer;
