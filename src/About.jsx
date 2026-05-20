import React from 'react'
 import anjani from './assets/anjani.jpeg';

function About() {
  return (
    <div className="about">
      <div className="left-side">
        <img src={anjani} className="img" />
        <h1>{"<Anjani kumari>"}</h1>
        <h3>Full Stack Web Developer</h3>
        <div className="butn">
         <button>Email me</button>
         </div>
          <div className="social-icons">
            <i class="ri-instagram-line"></i>
            <i class="ri-twitter-fill"></i>
            <i class="ri-facebook-fill"></i>
            <i class="ri-linkedin-box-fill"></i>
          </div>
      </div>
      <div className="right-side">
        <h2>{"</About Me>"}</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem recusandae, sequi earum at quod hic blanditiis esse, architecto natus enim magni totam veniam qui error quo numquam eveniet sunt voluptatibus exercitationem asperiores omnis eum nostrum? Esse modi excepturi distinctio itaque officia quae, ea nemo!</p>
        <div className="butt">
          <button>Resume</button>
          <button>Portfolio</button>
        </div>
      </div>
    </div>
  );
}

export default About