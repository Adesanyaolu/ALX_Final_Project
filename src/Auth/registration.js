import React, { useState } from "react";
import "../css/registration.css";
import "../css/footer.css";
import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";
import { Link } from "react-router-dom";

export default function Registration() {
  // Backend
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  async function register(ev) {
    ev.preventDefault();
    const response = await fetch("http://localhost:4000/register", {
      method: "POST",
      body: JSON.stringify({ userName, userEmail, password, confirmPassword }),
      headers: { "Content-Type": "application/json" },
    });

    console.log(response)

    if (response.status === 200) {
      alert('Registration Succesful')
    } else {
      alert ('Registration Failed')
    }
  }

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="body">
        <div className="login-box">
          <h2>SIGN UP</h2>
          <form method="post" onSubmit={register}>
            {/* Username */}
            <div className="user-box">
              <input
                type="text"
                id="username"
                value={userName}
                onChange={(ev) => setUserName(ev.target.value)}
                required
              ></input>
              <label>Username</label>
            </div>
            {/* userEmail */}
            <div class="user-box">
              <input
                type="email"
                id="email"
                value={userEmail}
                onChange={(ev) => setUserEmail(ev.target.value)}
                required
              ></input>
              <label>Email</label>
            </div>
            {/* user password  */}
            <div class="user-box">
              <input
                type="password"
                id="password"
                value={password}
                onChange={(ev) => setPassword(ev.target.value)}
              ></input>
              <label>Password</label>
            </div>
            {/* confirm password  */}
            <div class="user-box">
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(ev) => setConfirmPassword(ev.target.value)}
              ></input>
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
              <p className="label">
                {" "}
                Already have an account? <Link to="/Login"> Log In</Link>
              </p>
            </div>
          </form>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
