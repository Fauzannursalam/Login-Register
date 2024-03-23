// actions.js

import { ADD_TO_CART, CLEAR_CART } from "./actionTypes";

export const addToCart = (item) => {
	return {
		type: ADD_TO_CART,
		payload: item,
	};
};

export const clearCart = () => {
	return {
		type: CLEAR_CART,
	};
};
