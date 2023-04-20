import React from 'react'; 
import '../css/registration.css'
import '../css/footer.css'
import Navbar from '../Layout/Navbar';
import Footer from '../Layout/Footer'

export default function Registration(){
  return(
    <div>
    <div>
        <Navbar />
    </div>
    <div className='body'>
    <div className="login-box">
    <h2>SIGN UP</h2>
    <form enctype="multipart/form-data" method="post">
      <div className="user-box">
      <input type="text"></input>
        <label>Username</label>
      </div>
      <div class="user-box">
      <input type="text"></input>
        <label>Email</label>
      </div>
      <div class="user-box">
      <input type="password"></input>
        <label>Password</label>
      </div>
      <div class="user-box">
      <input type="password"></input>
        <label>Confirm Password</label>
      </div>
      <button type="submit">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Submit
      </button>

      <div>
        <p className='label'> Already have an account? <a href='#' > Sing In</a></p>
      </div>
    </form>
  </div>
  </div>

  <div>
  < Footer/>
  </div>
  </div>
  );
 }
