// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { updateSearchTerm, setRestaurants } from '../../redux/actions/restaurantActions'
// //import { UPDATE_SEARCH_TERM, SET_RESTAURANTS } from '../actions/restaurantActions';
// function Restaurant() {
//   const searchTerm = useSelector(state => state.searchTerm);
//   const restaurants = useSelector(state => state.restaurants);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     fetch('http://localhost:5000/restaurants')
//       .then(response => response.json())
//       .then(data => dispatch(setRestaurants(data)))
//       .catch(error => console.log(error));
//   }, [dispatch]);

//   const filteredRestaurants = restaurants.filter(restaurant =>
//     restaurant.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div>
//       <h1> Restaurants</h1>
//      // <input type="text" placeholder="Search" value={searchTerm} onChange={(event) => dispatch(updateSearchTerm(event.target.value))} />
//       {filteredRestaurants.map(restaurant => (
//         <div key={restaurant.id}>
//           <h2>{restaurant.name}</h2>
//           <p>{restaurant.category}</p>
//           <p>{restaurant.address}</p>
//           <p>{restaurant.phone}</p>
//           <p>{restaurant.rating}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Restaurant;
