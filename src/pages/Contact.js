import React from 'react'
import Navbar from '../Layout/Navbar'
import Footer from '../Layout/Footer'
import Sidebar from '../Layout/Sidebar'
import '../css/Contact.css'
function Contact() {
  return(
    <div>
    <div><Navbar /></div>
    <div><Sidebar /></div>
   {/* <!-- contact section starts --> */}
   <section className="contact" id="contact">
  {/* <h1 className="heading"></h1> */}
  <div className="col-container">
    <div className="col" id="col-background">
      <h2>Get in touch</h2>
      <form action="" method="POST">
        <input type="email" placeholder="your email" name="email" required="required" />
        <input type="text" placeholder="your phone" name="phone" />
        <textarea name="message" placeholder="write a message" id="" cols="30" rows="10" required="required"></textarea>
        <button type="submit" className="btn">send message</button>
      </form>
    </div>
    <div className="col">
      <h2> Contact details</h2>
      <i className="fas fa-envelope"> </i>
      <p> email</p> <br />
      <span className="contact-span">recipee@gmail.com</span>
      <br />
      <br />
      <i className="fas fa-phone-alt"> </i>
      <p> phone</p><br />
      <span className="contact-span">+234 80360 50250</span>
      <br />
      <br />
      <i className="fas fa-map-marker-alt"> </i>
      <p> address</p> <br />
      <span className="contact-span">
        B4/3 Olomore Housing 
        <br /> 4th floor Gaga Lara <br />
        Lagos, Nigeria<br />
      </span>
    </div>
  </div>
</section>
{/* <!-- contact section ends --> */}
<div><Footer /></div>
</div>
)
  }

export default Contact