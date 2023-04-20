import React from 'react'; 
import '../css/registration.css';
import Footer from '../Layout/Footer';
import Navbar from '../Layout/Navbar';
import Sidebar from '../Layout/Sidebar';
import { Link } from 'react-router-dom';

export default function Registration(){
  return(
    <div className='Regpag'>
    <div>
      <div>
        <Navbar />
      </div>
    <div className="login-box">
    <h2>SIGN IN</h2>
    <form enctype="multipart/form-data" method="post">
      <div className="user-box">
      <input type="text"></input>
        <label>Username</label>
      </div>
      <div class="user-box">
      <input type="password"></input>
        <label>Password</label>
      </div>
      <button type="submit">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Submit
      </button>

      <div>
        <p className='label'> Don't have an account? <a href='#' > Sing Up</a></p>
        < Link to = '/Registration'>Register</Link>
      </div>
    </form>
    
  </div>
  <div>
   < Footer/>
   </div>
  </div>
   
</div>
  );
 }
