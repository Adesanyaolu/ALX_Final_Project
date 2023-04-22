import React from 'react'; 
import { useState } from 'react';
import '../css/registration.css';
import Footer from '../Layout/Footer';
import Navbar from '../Layout/Navbar';
// import Sidebar from '../Layout/Sidebar';
import { Link } from 'react-router-dom';

export default function Registration(){

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState(''); 


  async function login(ev) {
    ev.preventDefault();
    await fetch('http://localhost:4000/login', {
      method: 'POST',
      body:JSON.stringify({userName, password}),
      headers: {'Content-Type':'application/json'}
    })
  }

  return(
    <div className='Regpag'>
    <div>
      <div>
        <Navbar />
      </div>
    <div className="login-box">
    <h2>SIGN IN</h2>
    <form enctype="multipart/form-data" method="post" onSubmit={login}>
      <div className="user-box">
      <input  type="text" 
              placeholder="username" 
              value={userName}
              onChange={ev => setUserName(ev.target.value)}>
      </input>
        <label>Username</label>
      </div>
      <div class="user-box">
      <input  type="text" 
              placeholder="password" 
              value={password}
              onChange={ev => setPassword(ev.target.value)}>
      </input>
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
        <p className='label'> Don't have an account? < Link to = '/Registration'>Sign Up</Link></p>
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
