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
        Final-year Computer Science student at Queen Mary University of London, on track for First-Class Honours, 
        with a year of industry experience as a Software Engineer at Amplifi Capital. I enjoy solving real-world 
        problems with clean, scalable software. From full-stack development and Java microservices to AI projects 
        in deep learning and game development in Unity. I'm actively seeking opportunities in the tech industry 
        where I can contribute to impactful products, grow my engineering skills, and collaborate with others 
        to build meaningful solutions.
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
