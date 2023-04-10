import { combineReducers } from "redux";
import restaurantReducer from "./restaurantReducer";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
  restaurants: restaurantReducer,
  cart: cartReducer,
  // searchTerm: searchTermReducer,
  // restaurants: restaurantsReducer,
});

export default rootReducer;