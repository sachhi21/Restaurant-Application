import axios from "axios";

export const SET_MENU_DETAILS = "SET_MENU_DETAILS"
export const FETCH_MENU_DETAILS = "FETCH_MENU_DETAILS"
export const SET_REST_DETAILS = "SET_REST_DETAILS"
export const UPDATE_SEARCH_TERM = 'UPDATE_SEARCH_TERM';
export const SET_RESTAURANTS = 'SET_RESTAURANTS';

export const getRestaurants = async () => {
  try {
    const response = await axios.get("http://localhost:5000/restaurants");
    return response.data;
  } catch (error) {
    console.error("Error fetching restaurants:", error);
    throw error;
  }
};

export const updateSearchTerm= (searchTerm) => {
  return {
    type: UPDATE_SEARCH_TERM,
    payload: searchTerm
  };
};


// export function updateSearchTerm(searchTerm) {
//   return {
//     type: UPDATE_SEARCH_TERM,
//     payload: searchTerm,
//   };
// }

export function setRestaurants(restaurants) {
  return {
    type: SET_RESTAURANTS,
    payload: restaurants,
  };
}

export function fetchRestDetails() {
  return function(dispatch) {
    return axios.get("http://localhost:5000/restaurants").then(({ data }) => {
      dispatch(setMenuDetails(data));
    });
  };
}

function setMenuDetails(data) {
  return {
    type: SET_MENU_DETAILS,
    payload: data
  };
}
function setRestDetails(data) {
  return {
    type: SET_REST_DETAILS,
    payload: data
  };
}

export function fetchMenuDetails() {
  return function(dispatch) {
    return axios.get("http://localhost:5000/restaurants").then(({ data }) => {
      dispatch(setRestDetails(data));
    });
  };
}


// export const updateSearchTerm = (searchTerm) => {
//   return {
//     type: UPDATE_SEARCH_TERM,
//     payload: searchTerm
//   };
// };


// // export function updateSearchTerm(searchTerm) {
// //   return {
// //     type: UPDATE_SEARCH_TERM,
// //     payload: searchTerm,
// //   };
// // }

// export function setRestaurants(restaurants) {
//   return {
//     type: SET_RESTAURANTS,
//     payload: restaurants,
//   };
// }

