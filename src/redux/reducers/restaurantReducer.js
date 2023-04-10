import { FETCH_RESTAURANTS } from "../actions/restaurantActions";
import { UPDATE_SEARCH_TERM, SET_RESTAURANTS } from '../actions/restaurantActions';
const initialState = {
  restaurants: [],
};

export const restaurantReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RESTAURANTS:
      return { ...state, restaurants: action.payload };
    default:
      return state;
  }
};

export function searchTermReducer(state = initialState.searchTerm, action) {
  switch (action.type) {
    case UPDATE_SEARCH_TERM:
      return action.payload;
    default:
      return state;
  }
}

// export function restaurantsReducer(state = initialState.restaurants, action) {
//   switch (action.type) {
//     case SET_RESTAURANTS:
//       return action.payload;
//     default:
//       return state;
//   }
// }

export default restaurantReducer;
