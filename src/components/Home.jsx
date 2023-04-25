import React from "react";
import Me from "../public/Me.jpg"
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h3>Hello, I am</h3>
        <h1>Joseph Da Costa</h1>
        <p>
          A top-performing student within the School of Electronic Engineering and Computer Science at Queen Mary 
          University of London. A motivated, adaptable, and responsible student who can swiftly master 
          new abilities on their own. Looking for a demanding and creative career in the technology 
          industry right now.
        </p>
      
        <div className="social-media">
          <a href="https://github.com/JDC05"><i class='bx bxl-github'></i></a>
          <a href="https://www.linkedin.com/in/josephdacosta"><i class='bx bxl-linkedin'></i></a>
        </div>

        <a href="Joseph Da Costa - CV.pdf" download="CV.pdf" className="btn">Resume</a>
      </div>

      <div className="home-img">
        <img src={Me} alt=""/>
      </div>
    </section>
  );
}
