import React from 'react';

import '../styles/styles.css';

function Projects() {
    return (
        <div>
            <section class="projects hide" id="projects">
                <h2>Projects</h2>
                <div class="key-projects">
                    <div class="project-container">
                        <p>D.O.U.F.O.S.</p>
                        <div class="project-links">
                            <a href="https://doufos.herokuapp.com/"><i class="fas fa-globe"></i></a>
                            <a href="https://github.com/Limnation/project3"><i class="fab fa-github-square"></i></a>
                        </div>
                        <a href="https://doufos.herokuapp.com/"><img src="resources/images/home1.jpg" alt="image from the Limited Footwear website" /></a>
                    </div>
                    <div class="project-container">
                        <p>Limited Footwear</p>
                        <div class="project-links">
                            <a href="https://limited-footwear.herokuapp.com/"><i class="fas fa-globe"></i></a>
                            <a href="https://github.com/Limnation/limited"><i class="fab fa-github-square"></i></a>
                        </div>
                        <a href="https://limited-footwear.herokuapp.com/"><img src="resources/images/limited_footwear_landing_page.png" alt="image from the Limited Footwear website" /></a>
                    </div>
                    <div class="project-container">
                        <p>getMovieInfo(){}</p>
                        <div class="project-links">
                            <a href="https://zreggert.github.io/get-movie-information/"><i class="fas fa-globe"></i></a>
                            <a href="https://github.com/zreggert/get-movie-information"><i class="fab fa-github-square"></i></a>
                        </div>
                        <a href="https://zreggert.github.io/get-movie-information/"><img src="resources/images/getmovieinfo.png" alt="image from the getMovieInfo website" /></a>
                    </div>
                    <div class="project-container">
                        <p>Team Generator</p>
                        <div class="project-links">
                            <a href="https://zreggert.github.io/team_generator/"><i class="fas fa-globe"></i></a>
                            <a href="https://github.com/zreggert/team_generator"><i class="fab fa-github-square"></i></a>
                        </div>
                        <a href="https://zreggert.github.io/team_generator/"><img src="resources/images/team_gen_markdown_generated.png" alt="image of generated markdown" /></a>
                    </div>
                    <div class="project-container">
                        <p>Weather Dashboard</p>
                        <div class="project-links">
                            <a href="https://zreggert.github.io/weather_forecast/"><i class="fas fa-globe"></i></a>
                            <a href="https://github.com/zreggert/weather_forecast"><i class="fab fa-github-square"></i></a>
                        </div>
                        <a href="https://zreggert.github.io/weather_forecast/"><img src="resources/images/weather_dash.png" alt="image of the Weather Dashboard website" /></a>
                    </div>
                    <div class="project-container">
                        <p>JavaScript Quiz</p>
                        <div class="project-links">
                            <a href="https://zreggert.github.io/JavaScript_Quiz/"><i class="fas fa-globe"></i></a>
                            <a href="https://github.com/zreggert/JavaScript_Quiz"><i class="fab fa-github-square"></i></a>
                        </div>
                        <a href="https://zreggert.github.io/JavaScript_Quiz/"><img src="resources/images/quiz_start.png" alt="image of JavaScript Quiz landing page" /> </a> 
                    </div>
                    <div class="project-container">
                        <p>Password Generator</p>
                        <div class="project-links">
                            <a href="https://zreggert.github.io/zack_passgen_repo/"><i class="fas fa-globe"></i></a>
                            <a href="https://github.com/zreggert/zack_passgen_repo"><i class="fab fa-github-square"></i></a>
                        </div>
                        <a href="https://zreggert.github.io/zack_passgen_repo/"><img src="resources/images/passgen_webpage.png" alt="image of password generator page" /></a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Projects;