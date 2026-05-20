 import React from 'react';
 import bootstrap from './assets/bootstrap.jpeg';
 import css from './assets/css.png';
 import git from './assets/git.png';
 import github from './assets/github.png';
 import html from './assets/html.webp';
 import js from './assets/js.jpeg';
 import mongodb from './assets/mongodb.png';
 import node from './assets/node.png';
 import npm from './assets/npm.png';
 import postman from './assets/postman.png';
 import download from './assets/download.png';
 import tailwindcss from './assets/tailwindcss.png';

const skillsDate = [
  {
    name: "Bootstrap",
    image: bootstrap
  },
  {
    name: "Git",
    image: git
  },
  {
    name: "css",
    image: css
  },
  {
    name: "github",
    image: github
  },
  {
    name: "html",
    image: html
  },
  {
    name: "js",
    image: js
  },
  {
    name: "mongodb",
    image: mongodb
  },
  {
    name: "node",
    image: node
  },
  {
    name: "npm",
    image: npm
  },
  {
    name: "postman",
    image: postman
  },
  {
    name: "download",
    image: download
  },
  {
    name: "tailwindcss",
    image: tailwindcss
  },  
  

]

function Skills() {
  return (
 <div className="container">
  <h1>Full Stack Developer</h1>
   <p className="subtitle">front-End Skills</p>
   <div className="skills-grid">
    {skillsDate.map((skill,index) => (
      <div className="card2" key={index}>
        <img src={skill.image} alt={skill.name}/>
        <h3>{skill.name}</h3>
        </div>
    ))};
   </div>
   </div>
    );
}


  


export default Skills;