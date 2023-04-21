import React from 'react';
import'../css/footer.css'
import recipe_logo from '../Recipe_images/recipe_logo.jpg'


export default function Footer(){
  return (
    <>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
    <footer className="footer-distributed">
    <div className="footer-left">
        <p className="footer-company-about">
            <span>About Recipe</span>
            We provide and train our client on different kinds of recipes</p>
        <div className="footer-icons">
            <a href="#"><i className="fa fa-facebook"></i></a>
            <a href="#"><i className="fa fa-twitter"></i></a>
            <a href="#"><i className="fa fa-instagram"></i></a>
            <a href="#"><i className="fa fa-linkedin"></i></a>
            <a href="#"><i className="fa fa-youtube"></i></a>
        </div>
    </div>

    <div className="footer-center">
        <div>
            <i className="fa fa-map-marker"></i>
              <p><span> B4/3 - Olomore Housing,
                 Abeokuta.<br></br></span>
                Ogun, Nigeria</p>
        </div>
       <div>
            <i className="fa fa-phone"></i>
            <p>+234 80 360 50250</p>
        </div>
        <div>
            <i className="fa fa-envelope"></i>
            <p><a href="mailto:Frankonojaifecareer@gmail.com">Frankonojaifecareer@gmail.com</a></p>
        </div>
    </div>
    <div className="footer-right">
            <img src={recipe_logo} className='logo'/>
       <span> <h3>@Alx Final project</h3></span>

        <p className="footer-links">
            <a href="#">Home</a>
            |
            <a href="#">Recipe</a>
            |
            <a href="#">About</a>
            |
            <a href="#">Contact</a>
        </p>
         <p className="footer-company-name">© 2023 Alx_final_project_Cohort 6. All right reserved</p>    
    </div>
</footer>
    </>
  )
}