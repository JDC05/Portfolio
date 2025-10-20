import React from "react";
import Me from "../public/Me.jpg"
import CV from '../public/CV.pdf';

export default function Home() {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h3>Hello, I am</h3>
        <h1>Joseph Da Costa</h1>
        <p>
        First-Class Honours Graduate in Computer Science from Queen Mary University of London, 
        with a year of professional experience as a Software Engineer at Amplifi Capital, complemented 
        by infrastructure and DevOps exposure at Hiro Capital. I am passionate about building clean, 
        scalable software to solve complex, real-world problems. My hands-on experience spans full-stack 
        development, Java microservices, cloud infrastructure and innovative 
        AI projects in deep learning. I am now seeking a challenging role where I can apply my proven 
        technical and academic skills to develop impactful products and contribute to a collaborative 
        engineering team.
        </p>
      
        <div className="social-media">
          <a href="https://github.com/JDC05"><i class='bx bxl-github'></i></a>
          <a href="https://www.linkedin.com/in/josephdacosta"><i class='bx bxl-linkedin'></i></a>
        </div>

        <a href={CV} download="Joseph Da Costa - CV.pdf" className="btn">Resume</a>
      </div>

      <div className="home-img">
        <img src={Me} alt=""/>
      </div>
    </section>
  );
}
