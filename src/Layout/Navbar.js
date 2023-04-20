import React from 'react'; 
import '../css/navbar.css'
import recipe_logo from '../Recipe_images/recipe_logo.jpg'
import Contact from '../pages/Contact'

export default function Navbar(){
  return (
    <>
      
<nav className="navbar">
    
    {/* <!-- LOGO --> */}
    
    <div>
    <img src={recipe_logo} className="logo" alt="logo" />
    </div>
    
    {/* <!-- NAVIGATION MENU --> */}
    
    <ul className="nav-links">
{/*     
    <!-- USING CHECKBOX HACK --> */}
    
    <input type="checkbox" id="checkbox_toggle" />
    
    <label for="checkbox_toggle" className="hamburger">&#9776;</label>
    
    {/* NAVIGATION MENUS  */}
    
    <div className="menu">
    
    <li><a href="">Home</a></li>
    
    <li><a href="">Menue</a></li>
    
    <li><a href="">About</a></li>
    
    <li><a href="{Contact}">Contact</a></li>
    </div>
    </ul>
    
    </nav>
    </>
    );
  }