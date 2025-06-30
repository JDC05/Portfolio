import React from "react"
import DiscordLogo from "../public/DiscordLogo.png"
import NetflixLogo from "../public/NetflixLogo.jpg"
import Weatherapp from "../public/WeatherApp.png"
import Padel from "../public/Padel.png"
import EmotionClassifier from "../public/EmotionClassifier.jpeg"
import CIFAR10 from "../public/CIFAR10.png"
import finalReport from '../public/Final Report.pdf';

export default function Porfolio() {
    return (
        <section className="portfolio" id="portfolio">
            <h2 className="heading">Projects</h2>
            <div className="portfolio-container">
                <div className="portfolio-box">
                    <img src={NetflixLogo} alt=""/>
                    <div className="portfolio-layer">
                        <h4>NETFLIX CLONE</h4>
                        <p>
                        Built a Netflix clone using ReactJS, Firebase for auth and database, Styled Components for UI, 
                        and Fuse.js for live search. Includes Sign In/Up, Home, and Browse pages.
                        </p>
                        <div className="portfolio-icons">
                            <a href="https://github.com/JDC05/NetflixClone"><i class='bx bx-link-external'></i></a>
                        </div>
                    </div>
                </div>
                <div className="portfolio-box">
                    <img src={DiscordLogo} alt=""/>
                    <div className="portfolio-layer">
                        <h4>MERN DISCORD CLONE</h4>
                        <p>
                        A real-time Discord clone built with MERN, Firebase Auth, Pusher for live messaging, and 
                        Postman for API testing, featuring channels, DMs, and secure user authentication.
                        </p>
                        <div className="portfolio-icons">
                            <a href="https://github.com/JDC05/DiscordClone"><i class='bx bx-link-external'></i></a>
                        </div>
                    </div>
                </div>
                <div className="portfolio-box">
                    <img src={Weatherapp} alt=""/>
                    <div className="portfolio-layer">
                        <h4>WEATHER APP</h4>
                        <p>
                        Created a weather app for university students using APIs from weather and TFL. 
                        Allows users to check weather and transport info for their location.
                        </p>
                        <div className="portfolio-icons">
                            <a href="https://github.com/JDC05/weather-app"><i class='bx bx-link-external'></i></a>
                        </div>
                    </div>
                </div>
                <div className="portfolio-box">
                    <img src={Padel} alt=""/>
                    <div className="portfolio-layer">
                        <h4>WEB SCRAPER</h4>
                        <p>
                        Created a script which automates checking for available booking slots on a Rocket Padel website using Puppeteer. 
                        It scans availability for the next 7 days and logs open time slots in a structured format.
                        </p>
                        <div className="portfolio-icons">
                            <a href="https://github.com/JDC05/Scraper"><i class='bx bx-link-external'></i></a>
                        </div>
                    </div>
                </div>
                <div className="portfolio-box">
                    <img src={EmotionClassifier} alt=""/>
                    <div className="portfolio-layer">
                        <h4>FINAL YEAR PROJECT</h4>
                        <p>
                        This project researched and developed an AI system that classifies human emotions by analyzing eye movement patterns 
                        and pupil dilation using a bidirectional LSTM model, achieving 75% accuracy. 
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
                        <h4>CLASSIFICATION MODEL</h4>
                        <p>
                        A PyTorch implementation of a custom neural network architecture for CIFAR-10 image classification, 
                        featuring attention mechanisms and data augmentation.
                        </p>
                        <div className="portfolio-icons">
                            <a href="https://github.com/JDC05/CIFAR-10_Classification"><i class='bx bx-link-external'></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}