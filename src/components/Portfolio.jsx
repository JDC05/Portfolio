import React from "react"
import ChatApp from "../public/ChatApp.png"
import Tesla from "../public/TeslaClone.png"
import Weatherapp from "../public/WeatherApp.png"
import Padel from "../public/Padel.png"
import emotionClassifier from "../public/emotionClassifier.jpeg"
import CIFAR10 from "../public/CIFAR10.png"
import finalReport from '../public/Final Report.pdf';

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
                <div className="portfolio-box">
                    <img src={Padel} alt=""/>
                    <div className="portfolio-layer">
                        <h4>Web Scraper</h4>
                        <p>
                        Created a script which automates checking for available booking slots at Rocket Padel Ilford using Puppeteer 
                        It scans availability for the next 7 days and logs open time slots in a structured format.
                        </p>
                        <div className="portfolio-icons">
                            <div>
                                <i class='bx bxl-javascript' ></i>
                            </div>
                            <a href="https://github.com/JDC05/Scraper"><i class='bx bx-link-external'></i></a>
                        </div>
                    </div>
                </div>
                <div className="portfolio-box">
                    <img src={emotionClassifier} alt=""/>
                    <div className="portfolio-layer">
                        <h4>Final Year Project</h4>
                        <p>
                        This project developed an AI system that classifies human emotions by analyzing eye movement patterns 
                        (fixations, saccades) and pupil dilation using a bidirectional LSTM model, achieving 75% accuracy. 
                        </p>
                        <div className="portfolio-icons">
                            <div>
                            </div>
                            <a href="https://github.com/JDC05/emotionClassifier"><i class='bx bx-link-external'></i></a>
                            <a href={finalReport} download="FinalReport.pdf" className="download-icon">
                                <i class='bx bx-download'></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="portfolio-box">
                    <img src={CIFAR10} alt=""/>
                    <div className="portfolio-layer">
                        <h4>CIFAR-10_Classification</h4>
                        <p>
                        A PyTorch implementation of a custom neural network architecture for CIFAR-10 image classification, 
                        featuring attention mechanisms and data augmentation.
                        </p>
                        <div className="portfolio-icons">
                            <div>
                                <i class='bx bxl-python'></i>
                            </div>
                            <a href="https://github.com/JDC05/CIFAR-10_Classification"><i class='bx bx-link-external'></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}