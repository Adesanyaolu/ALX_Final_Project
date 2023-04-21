import React from 'react';
import '../css/navbar.css'
import recipe_logo from '../Recipe_images/recipe_logo.jpg'
import { Link } from 'react-router-dom';


export default function Navbar() {
  return (
    <>

      <nav className="navbar">

        {/* <!-- LOGO --> */}

        <div>

          < Link to='/'>
            <img src={recipe_logo} className="logo" alt="logo" />
          </Link>
        </div>

        {/* <!-- NAVIGATION MENU --> */}

        <ul className="nav-links">
          {/*     
    <!-- USING CHECKBOX HACK --> */}

          <input type="checkbox" id="checkbox_toggle" />

          <label for="checkbox_toggle" className="hamburger">&#9776;</label>

          {/* NAVIGATION MENUS  */}

          <div className="menu">

            <li>< Link to='/'> Home </Link></li>

            {/* <li><a href="">Menue</a></li> */}

            <li>< Link to='/About'> About </Link></li>

            <li>< Link to='/contact'> Contact </Link></li>

            <li>< Link to='/Login'> Log In</Link></li>

            <li>< Link to='/Registration'> Sign Up</Link></li>

          </div>
        </ul>

      </nav>
    </>
  );
}