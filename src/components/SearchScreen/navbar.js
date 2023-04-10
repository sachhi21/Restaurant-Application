import React from 'react';
// import {Link, NavLink} from 'react-router-dom';
import {NavLink, withRouter} from 'react-router-dom'; // add active class to anchor tag
import Restaurant from './Restaurant';
const Navbar = (props) => {
    console.log(props, "these are navbar props");
    return (
       <nav className="nav-wrapper bck-grad">
           <div className="container">
               <a href="/" className="brand-logo">Delvry.com</a>
               <ul className="right">
                   <li><NavLink to="/" >Home</NavLink></li>
                    <li><NavLink to="Restaurant">Restaurant</NavLink></li>
                    <li><NavLink to="/Contact" >Contact</NavLink></li>
               </ul>
           </div>
       </nav>
    )
}



export default Navbar