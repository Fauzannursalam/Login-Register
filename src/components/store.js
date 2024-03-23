import { createStore } from "redux";
import cartReducer from "./reducers";
// import rootReducer from "./reducers"; // Import kombinasi reducer Anda

const store = createStore(cartReducer); // Membuat store dengan rootReducer

export default store;
