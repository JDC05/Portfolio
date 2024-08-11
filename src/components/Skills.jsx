import React, {useState} from "react"

export default function Skills() {
    const [selectedSection, setSelectedSection] = useState("education");

    const handleEducationClick = () => {
        setSelectedSection("education");
    };

    const handleWorkClick = () => {
        setSelectedSection("work");
    };

    return (
        <section className="skills" id="skills">
            <div className="qualification-content">
                <h2 className="heading">Qualifications</h2>
                <div className="qualification">
                    <div onClick={handleEducationClick}>
                        <h3 className={selectedSection === "education" ? "active" : ""}>Education</h3>
                    </div>
                    <div onClick={handleWorkClick}>
                        <h3 className={selectedSection === "work" ? "active" : ""}>Work</h3>
                    </div>
                </div>
                <div className="qualification_sections">
                    {/*Section 1*/}
                    {selectedSection === "education" && (
                    <div className="qualification_content">
                        <div className="qualification_data">
                            <div>
                                <h4 className="qualification_title">GCSEs</h4>
                                <span className="qualification_subtitle">11 GCSEs ranging from grade 9-5</span>
                                <div className="qualification_calender">2016 - 2019</div>
                            </div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                        </div>
                        <div className="qualification_data">
                            <div></div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>

                            <div>
                                <h4 className="qualification_title">A-Levels</h4>
                                <span className="qualification_subtitle">Economics (A*), Mathematics (A*), Physics (A)</span>
                                <div className="qualification_calender">2019 - 2021</div>
                            </div>

                        </div>
                        <div className="qualification_data">

                            <div>
                                <h4 className="qualification_title">Computer Science</h4>
                                <span className="qualification_subtitle">Queen Mary University of London</span>
                                <div className="qualification_calender">2021 - Now</div>
                            </div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>

                        </div>
                        <div className="qualification_data">
                            <div></div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>

                            <div>
                                <h4 className="qualification_title">CS50</h4>
                                <span className="qualification_subtitle">Web Programming Course by Harvard University</span>
                                <div className="qualification_calender">SEPTEMBER - DECEMBER 2022</div>
                            </div>
                        </div>
                        <div className="qualification_data">

                            <div>
                                <h4 className="qualification_title">Scrimba</h4>
                                <span className="qualification_subtitle">React Router 6 Course by Scrimba</span>
                                <div className="qualification_calender">MARCH - MAY 2023</div>
                            </div>

                            <div>
                                <span className="qualification_rounder"></span>
                            </div>

                        </div>
                    </div>
                    )}
                    {/*Section 2*/}
                    {selectedSection === "work" && (
                    <div className="qualification_content">
                        <div className="qualification_data">
                            <div>
                                <h4 className="qualification_title">Customer Service Assistant</h4>
                                <span className="qualification_subtitle">Barclays Bank</span>
                                <div className="qualification_calender">MARCH 2017</div>
                            </div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                        </div>
                        <div className="qualification_data">
                            <div></div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>

                            <div>
                                <h4 className="qualification_title">UX/UI Designer</h4>
                                <span className="qualification_subtitle">TATA Consultancy services</span>
                                <div className="qualification_calender">AUGUST 2019</div>
                            </div>

                            
                        </div>
                        <div className="qualification_data">

                            <div>
                                <h4 className="qualification_title">Assistant Admin Intern</h4>
                                <span className="qualification_subtitle">Roman Catholic Diocese of Southwark and Westminster</span>
                                <div className="qualification_calender">JUNE - SEPTEMBER 2022</div>
                            </div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>

                        </div>

                        <div className="qualification_data">
                            <div></div>

                            <div>
                                <span className="qualification_rounder"></span>                     
                            </div>

                            <div>
                                <h4 className="qualification_title">Software Enginner Placement</h4>
                                <span className="qualification_subtitle">Amplifi Capital</span>
                                <div className="qualification_calender">SEPTEMBER 2023 - SEPTEMBER 2024</div>
                            </div>

                            
                        </div>
                    </div>
                    )}
                </div>
                    
            </div>
            <div className="technology-content">
                <h2 className="heading">Technologies</h2>
                <div className="technologies">
                    <i class='bx bxl-html5' ></i>
                    <i class='bx bxl-css3' ></i>
                    <i class='bx bxl-javascript' ></i>
                    <i class='bx bxl-react' ></i>
                    <i class='bx bxl-firebase' ></i>
                    <i class='bx bxl-python' ></i>
                    <i class='bx bxl-java' ></i>
                    <i class='bx bxl-typescript' ></i>
                    <i class='bx bxl-django' ></i>
                    <i class='bx bxl-angular' ></i>
                    <i class='bx bxl-git' ></i>
                    <i class='bx bxl-tailwind-css' ></i>
                </div>
                
            </div>
        </section>
    )
}