import React from "react"
import Weatherapp from "../public/WeatherApp.png"
import Todo from "../public/Todo.png"
import OldPortfolio from "../public/OldPortfolio.png"
import TradingApp from "../public/TradingApp.png"
import Tesla from "../public/TeslaClone.png"
import UE4 from "../public/UE4.png"

export default function Porfolio() {
    return (
        <section className="portfolio" id="portfolio">
            <h2 className="heading">Projects</h2>
            <div className="portfolio-container">
                <div className="portfolio-box">
                    <img src={Todo} alt=""/>
                    <div className="portfolio-layer">
                        <h4>Todo List</h4>
                        <p>
                        Created a React todo list using hooks, event handlers, and state management. It enables 
                        users to add, edit, and remove todo items.
                        </p>
                        <div className="portfolio-icons">
                            <div>
                                <i class='bx bxl-css3' ></i>
                                <i class='bx bxl-react' ></i>
                            </div>
                            <a href="https://github.com/JDC05/Todo-list"><i class='bx bx-link-external'></i></a>
                        </div>
                    </div>
                </div>
                <div className="portfolio-box">
                    <img src={Tesla} alt=""/>
                    <div className="portfolio-layer">
                        <h4>Tesla Clone</h4>
                        <p>
                        Created a Tesla clone which showcases my skills in web development 
                        and demonstrates my ability to create a visually appealing and interactive website.
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
                    <img src={TradingApp} alt=""/>
                    <div className="portfolio-layer">
                        <h4>Trading App Simulator</h4>
                        <p>
                        Constructed a Trading App Simulator using OOP with a GUI window using Swing. 
                        It includes essential OOP principles
                        </p>
                        <div className="portfolio-icons">
                            <div>
                                <i class='bx bxl-java' ></i>
                            </div>
                            <a href="https://github.com/JDC05/TradingAppSimulator"><i class='bx bx-link-external'></i></a>
                        </div>
                    </div>
                </div>
                <div className="portfolio-box">
                    <img src={OldPortfolio} alt=""/>
                    <div className="portfolio-layer">
                        <h4>Old Portfolio Website</h4>
                        <p>
                        Built an online portfolio where registered users can log in and post comments using 
                        JavaScript, PHP, SQL, and Bootstrap.
                        </p>
                        <div className="portfolio-icons">
                            <div>
                                <i class='bx bxl-javascript'></i>
                                <i class='bx bxl-php'>SQL</i>
                            </div>
                            <a href="https://github.com/JDC05/OldWebsite"><i class='bx bx-link-external'></i></a>
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