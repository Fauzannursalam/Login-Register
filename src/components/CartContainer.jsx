import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "./actions";
import CartItem from "./CartItem";
import cartItems from "../cartItems";

const CartContainer = () => {
	const cartItems = useSelector((state) => state.cartItems);
	const total = useSelector((state) => state.total);
	const dispatch = useDispatch();

	// if (cartItems.length < 1) {
	// 	return (
	// 		<section className="cart">
	// 			<header>
	// 				<h2>your bag</h2>
	// 				<h4 className="empty-cart">is currently empty</h4>
	// 			</header>
	// 		</section>
	// 	);
	// }

	return (
		<section className="cart">
			<header>
				<h2>your bag</h2>
			</header>
			<div>
				{cartItems.map((item) => {
					return <CartItem key={item.id} {...item} />;
				})}
			</div>
			<footer>
				<hr />
				<div className="cart-total">
					<h4>
						total <span>${total}</span>
					</h4>
				</div>
				<button className="btn clear-btn" onClick={() => dispatch(clearCart())}>
					clear cart
				</button>
			</footer>
		</section>
	);
};

export default CartContainer;
