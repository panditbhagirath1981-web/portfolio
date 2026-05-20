import React from 'react'
import anjani from './assets/anjani.jpeg';
const Home = () =>{
    return (
        <div className="home">
            <div className="home1">
                <h1>Hi,I'm <span>ANJANI KUMARI</span></h1>
                <h3>Web Developer</h3>
                <div className="tags">
                    <span>React</span>
                    <span>Node.js</span>
                    <span>Backend</span>
                </div>
                
                <ul>
                    <li>Building Websites</li>
                    <li>Passionate about React,Node.js,Backend</li>
                </ul>
                <div className="btn">
                    <button className="btn1">Hire Me</button>
                </div>
            </div>
                <div className="card">
                    <div className="card-img1">
                    <img  className="img2" src={anjani}/>
                    </div>
                    <h2>ANJANI KUMARI</h2>
                    <p> Web Developer</p>
                    <div className="socials">
                        <span><i class="ri-github-fill"></i></span>
                        <span><i class="ri-twitter-line"></i></span>
                        <span><i class="ri-instagram-line"></i></span>
                        <span><i class="ri-facebook-box-line"></i></span>
                    </div>
                </div>
        </div>
    )
}





export default Home