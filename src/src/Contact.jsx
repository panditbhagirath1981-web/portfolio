import React from 'react'

function Contact() {
  return (
    <div className="cont">
      <div className="left-section">
        <h2>location</h2>
        <p>28 Jackson Blvd Ste 1020 Chicago <br/>IL 60604-2340</p>
        <h2 className="follow">follow us</h2>
        <div className="social-icons">
          <i class="ri-facebook-circle-fill"></i>
          <i class="ri-twitter-fill"></i>
          <i class="ri-instagram-fill"></i>
          <i class="ri-google-fill"></i>
        </div>
        <p className="privacy">@2018 Privacy policy</p>
      </div>
      <div className="right-section">
        <h2>Contact form</h2>
        <form className="form">
          <input type="text" placeholder="Enter your Name" />
          <input type="email" placeholder="Enter a valid email address" />
          <textarea placeholder="Enter your message"></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact