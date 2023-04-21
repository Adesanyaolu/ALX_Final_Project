import React from 'react'
import Navbar from '../Layout/Navbar'
import Footer from '../Layout/Footer'
import Sidebar from '../Layout/Sidebar'
// import chef_oluwatobi from '../Recipe_images/chef_oluwatobi.jpg'
import '../css/About.css'
function About() {
  return(
    <div>
    <div><Navbar /></div>
    <div><Sidebar /></div>

    {/* <!-- about section starts --> */}
<section className="about" id="about">
    <div className="box-container">
      <div className="box">
        <div className="image">
           {/* <img src={chef_oluwatobi} alt=''/> */}
        </div>
      </div>
      <div className="box">
        <h1 className="heading"> About Recipe </h1>
        <p className="about-paragraph">
        Recipe Management System is a web application created by Adenuga Adesanya - Backend 
        Frank Onojaife - Front-End that provides food recipe data and step-by-step instructions for novice cooks, busy professionals, or health-conscious individuals who want to prepare delicious meals. With our application, users can access a wide range of recipe data, including ingredient lists, nutritional information, and images.
        </p>
        <p className="about-paragraph">
        Our objective is to provide a user-friendly application that makes it easy for users to find, save, and manage their favorite recipes. We aim to create an application that allows users to interact with the recipes by adding, editing, or deleting them. Users should also be able to leave comments and ratings on recipes.
        </p>
      </div>
    </div>
</section>

   {/* <!-- about section ends --> */}
   <div><Footer /></div>

  </div>
)
  } 
export default About