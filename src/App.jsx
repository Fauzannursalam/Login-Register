import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import Modal from "./components/Modal";
import { Provider } from "react-redux";
import store from "./components/store";

const App = () => {
	const isOpen = false;

	return (
		<Provider store={store}>
			{isOpen && <Modal />}
			<Navbar />
			<CartContainer />
		</Provider>
	);
};
export default App;
