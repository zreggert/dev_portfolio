import React from 'react';

import '../styles/styles.css';

function Projects() {
    return (
        <main>
            <section className="projects" id="projects">
                <h2>Projects</h2>
                <div className="key-projects">
                    <div className="project-container">
                        <p>D.O.U.F.O.S.</p>
                        <div className="project-links">
                            <a href="https://doufos.herokuapp.com/"><i className="fas fa-globe"></i></a>
                            <a href="https://github.com/Limnation/project3"><i className="fab fa-github-square"></i></a>
                        </div>
                        <a href="https://doufos.herokuapp.com/"><img src="./images/home1.jpg" alt="D.O.U.F.U.S. landing page" /></a>
                    </div>
                    <div className="project-container">
                        <p>Limited Footwear</p>
                        <div className="project-links">
                            <a href="https://limited-footwear.herokuapp.com/"><i className="fas fa-globe"></i></a>
                            <a href="https://github.com/Limnation/limited"><i className="fab fa-github-square"></i></a>
                        </div>
                        <a href="https://limited-footwear.herokuapp.com/"><img src="./images/limited_footwear_landing_page.png" alt="Limited Footwear website" /></a>
                    </div>
                    <div className="project-container">
                        <p>getMovieInfo(){}</p>
                        <div className="project-links">
                            <a href="https://zreggert.github.io/get-movie-information/"><i className="fas fa-globe"></i></a>
                            <a href="https://github.com/zreggert/get-movie-information"><i className="fab fa-github-square"></i></a>
                        </div>
                        <a href="https://zreggert.github.io/get-movie-information/"><img src="./images/getmovieinfo.png" alt="getMovieInfo website" /></a>
                    </div>
                    <div className="project-container">
                        <p>Team Generator</p>
                        <div className="project-links">
                            <a href="https://zreggert.github.io/team_generator/"><i className="fas fa-globe"></i></a>
                            <a href="https://github.com/zreggert/team_generator"><i className="fab fa-github-square"></i></a>
                        </div>
                        <a href="https://zreggert.github.io/team_generator/"><img src="./images/team_gen_markdown_generated.png" alt="generated markdown" /></a>
                    </div>
                    <div className="project-container">
                        <p>Weather Dashboard</p>
                        <div className="project-links">
                            <a href="https://zreggert.github.io/weather_forecast/"><i className="fas fa-globe"></i></a>
                            <a href="https://github.com/zreggert/weather_forecast"><i className="fab fa-github-square"></i></a>
                        </div>
                        <a href="https://zreggert.github.io/weather_forecast/"><img src="./images/weather_dash.png" alt="Weather Dashboard website" /></a>
                    </div>
                    <div className="project-container">
                        <p>JavaScript Quiz</p>
                        <div className="project-links">
                            <a href="https://zreggert.github.io/JavaScript_Quiz/"><i className="fas fa-globe"></i></a>
                            <a href="https://github.com/zreggert/JavaScript_Quiz"><i className="fab fa-github-square"></i></a>
                        </div>
                        <a href="https://zreggert.github.io/JavaScript_Quiz/"><img src="./images/quiz_start.png" alt="JavaScript Quiz landing page" /> </a> 
                    </div>
                    <div className="project-container">
                        <p>Password Generator</p>
                        <div className="project-links">
                            <a href="https://zreggert.github.io/zack_passgen_repo/"><i className="fas fa-globe"></i></a>
                            <a href="https://github.com/zreggert/zack_passgen_repo"><i className="fab fa-github-square"></i></a>
                        </div>
                        <a href="https://zreggert.github.io/zack_passgen_repo/"><img src="./images/passgen_webpage.png" alt="password generator page" /></a>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Projects;