import React from "react"
import Weatherapp from "../public/WeatherApp.png"
import Todo from "../public/Todo.png"
import OldPortfolio from "../public/OldPortfolio.png"
import TradingApp from "../public/TradingApp.png"
import Chatbot from "../public/ChatBot.png"
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
                                <i class='bx bxl-react' ></i>
                            </div>
                            <a href="https://github.com/JDC05/Todo-list"><i class='bx bx-link-external'></i></a>
                        </div>
                    </div>
                </div>
                <div className="portfolio-box">
                    <img src={UE4} alt=""/>
                    <div className="portfolio-layer">
                        <h4>Shooter game</h4>
                        <p>
                        Using blueprints from UE5, the objective of the game is to hit all targets within a time limit 
                        using a gun. The project involves level creation, widget blueprints and modeling.
                        </p>
                        <div className="portfolio-icons">
                            <div>
                                <p>UE4</p>
                            </div>
                            <a href="https://github.com/JDC05/FirstPersonShooterGame"><i class='bx bx-link-external'></i></a>
                        </div>
                    </div>
                </div>
                <div className="portfolio-box">
                    <img src={Chatbot} alt=""/>
                    <div className="portfolio-layer">
                        <h4>Chat Bot Program</h4>
                        <p>
                        Created a chatbot using Procedural Programming that saves user responses to an external file 
                        and uses algorithms for efficiency. It relies on abstract data types.
                        </p>
                        <div className="portfolio-icons">
                            <div>
                                <i class='bx bxl-java' ></i>
                            </div>
                            <a href="https://github.com/JDC05/ChatBot"><i class='bx bx-link-external'></i></a>
                        </div>
                    </div>
                </div>
                <div className="portfolio-box">
                    <img src={TradingApp} alt=""/>
                    <div className="portfolio-layer">
                        <h4>Trading App Simulator</h4>
                        <p>
                        Constructed a Trading App Simulator using OOP with a GUI window using Swing. 
                        It includes essential features like Exception handling, Inheritance, Polymorphism, 
                        File I/O, Overriding, and Encapsulation.
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
                                <i class='bx bxl-php'></i>
                                <p>SQL</p>
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
                            Designed and created a weather app for university students built using React and APIs from weather and TFL, 
                            which allows users to check the weather and transport information for their location. 
                        </p>
                        <div className="portfolio-icons">
                            <div>
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