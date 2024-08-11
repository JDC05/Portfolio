import React from "react"
import ChatApp from "../public/ChatApp.png"
import Tesla from "../public/TeslaClone.png"
import Weatherapp from "../public/WeatherApp.png"

export default function Porfolio() {
    return (
        <section className="portfolio" id="portfolio">
            <h2 className="heading">Projects</h2>
            <div className="portfolio-container">
                <div className="portfolio-box">
                    <img src={Tesla} alt=""/>
                    <div className="portfolio-layer">
                        <h4>Tesla Clone</h4>
                        <p>
                        Responsive website that replicates the design and functionality of the official Tesla website, 
                        it includes a landing page, product information and car gallery
                        </p>
                        <div className="portfolio-icons">
                            <div>
                            <i class='bx bxl-html5' ></i>
                            <i class='bx bxl-css3' ></i>
                            <i class='bx bxl-javascript' ></i>
                            </div>
                            <a href="https://github.com/JDC05/TeslaClone"><i class='bx bx-link-external'></i></a>
                        </div>
                    </div>
                </div>
                <div className="portfolio-box">
                    <img src={ChatApp} alt=""/>
                    <div className="portfolio-layer">
                        <h4>Chat App</h4>
                        <p>
                        Full-stack chat application which allows users to send real-time messages to other users.
                        It also includes user authentication using Firebase Authentication.
                        </p>
                        <div className="portfolio-icons">
                            <div>
                                <i class='bx bxl-react' ></i>
                                <i class='bx bxl-firebase' ></i>
                                <i class='bx bxl-tailwind-css' ></i>
                            </div>
                            <a href="https://github.com/JDC05/ChatApp"><i class='bx bx-link-external'></i></a>
                        </div>
                    </div>
                </div>
                <div className="portfolio-box">
                    <img src={Weatherapp} alt=""/>
                    <div className="portfolio-layer">
                        <h4>Weather App</h4>
                        <p>
                        Created a weather app for university students using APIs from weather and TFL. 
                        Allows users to check weather and transport info for their location.
                        </p>
                        <div className="portfolio-icons">
                            <div>
                                <i class='bx bxl-html5' ></i>
                                <i class='bx bxl-css3' ></i>
                                <i class='bx bxl-react' ></i>
                            </div>
                            <a href="https://github.com/JDC05/weather-app"><i class='bx bx-link-external'></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}