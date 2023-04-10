import React, { useState, useEffect } from 'react';
import { useNavigate  } from 'react-router-dom';
import './SearchScreen.css';
//import navbar from './navbar';
import { NavLink } from 'react-router-dom';
import {  fetchRestaurants } from "../../redux/actions/restaurantActions";
import {useDispatch, useSelector} from 'react-redux'
import Pasta from './spaghetti.png'
import { Link } from 'react-router-dom'


function SearchScreen({ handleCartVisible }) {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const data  = useSelector(store => store.restaurants.restaurants)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRestaurants());
    handleCartVisible(false);
    return () => handleCartVisible(true);
  }, [handleCartVisible]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search) {
      navigate(`/menu/${search}`);
    }
  };
  let filtered ;
  const handleInputChange=(event) =>{
    setSearch(() =>event.target.value)
    console.log(search)
    console.log(data)
  }
  if (data) {   
    if (search === '' || search === null) {
      filtered = data
    } else {
      filtered = data.filter(post => {
          if (post.name.toLowerCase().includes(search)) {
            return post
          }
      })
    }
  }
  console.log('f',filtered)

 
   return(
    <div className="search-container container home">
      <h1>Search for a Restaurant</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="search-input"
          value={search}
          onChange={(e) =>handleInputChange(e)}
          placeholder="Search Resturant"
        />
        {/* <button type="submit" className="search-button">
          Search
        </button> */}
      </form>
      <div className='container home'>

      {filtered.length ? (
      filtered.map(post => {
        return (
          <div className="post card" key={post.id}>
            <img src={Pasta} alt="A Pasta Plate" />
            <div className="card-content">
              <Link to={'/menu/' + post.id}>
                <span className="card-title red-text">{post.name}</span>
              </Link>
              <b>Location</b> : <p>{post.location}</p>
              <b>City</b> :<p>{post.city}</p>

            </div>
          </div>
        )
      })
    ) : (
      <div className="center">No posts to show</div>
    )
}
</div>

    </div>
   )
  ;
}

export default SearchScreen
