import React from 'react'
import Navbar from '../Layout/Navbar'
import Footer from '../Layout/Footer'
import Sidebar from '../Layout/Sidebar'
// import Parmesan_and_Garlic_Recipe from '../Recipe_images/Parmesan_and_Garlic_Recipe.jpg'
import '../css/About.css'
function About() {
  return(
    <div>
    <div><Navbar /></div>
    <div><Sidebar /></div>

    {/* <!-- about section starts --> */}
    <div className="container">
      {/* <div className="image-container">
        <img
          src= {Parmesan_and_Garlic_Recipe}
          alt="Foodie"
          className="image"
        />
      </div> */}
      <div className="text-container">
        <h1 className="title">About Recipee</h1>
        <p className="description">
        Recipe Management System is a web application created by Adenuga Adesanya - Backend 
        Frank Onojaife - Front-End that provides food recipe data and step-by-step instructions for novice cooks, busy professionals, or health-conscious individuals who want to prepare delicious meals. With our application, users can access a wide range of recipe data, including ingredient lists, nutritional information, and images. 
        Our objective is to provide a user-friendly application that makes it easy for users to find, save, and manage their favorite recipes. We aim to create an application that allows users to interact with the recipes by adding, editing, or deleting them. Users should also be able to leave comments and ratings on recipes.
       
       </p>
      </div>
    </div>
  );
  {/* <!-- about section ends --> */}
    <div><Footer /></div>
    </div>
)
  } 
export default About