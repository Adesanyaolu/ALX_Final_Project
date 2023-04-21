import React from 'react'; 
import '../css/sidebar.css'
import home from '../Recipe_images/home.svg'
import explore from '../Recipe_images/explore.svg'
import subscriptions from '../Recipe_images/subscriptions.svg'
import originals from '../Recipe_images/originals.svg'
import youtube_music from '../Recipe_images/youtube_music.svg'
import contact from '../Recipe_images/contact.svg'

export default function Sidebar(){
  return (
    <>
      
<nav className="side-bar">
      <div className="sidebar-link">
        <div> <img src={home} alt=''/> </div>
        <div>Home</div>
      </div>
      <div className="sidebar-link">
      <div> <img src={explore} alt=''/> </div>
        <div>Explore</div>
      </div>
      <div className="sidebar-link">
      <div> <img src={subscriptions} alt=''/> </div>
        <div>Subscription</div>
      </div>
      <div className="sidebar-link">
      <div> <img src={originals} alt=''/> </div>
        <div>YouTube</div>
      </div>
      <div className="sidebar-link">
      <div> <img src={youtube_music} alt=''/> </div>
        <div>Recipe</div>
      </div>
      <div className="sidebar-link">
      <div> <img src={contact} alt=''/> </div>
        <div>Contact</div>
      </div>
    </nav>
    </>
    );
  }