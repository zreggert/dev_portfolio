import React from 'react';
import { Link } from "react-router-dom";

import '../styles/styles.css';

function Navbar() {
    return (
        <aside>
            <figure>
                <img className="profile-pic" src="images/zack_full_stack_dev.jpg" alt="Zachary Eggert"/>
            </figure>
            <nav>
                <ul>
                    <li>
                        <Link className="nav-btn" type="button" to="/">Home</Link>
                    </li>
                    <li>
                        <Link className="nav-btn" type="button" to="/about-me">About Me</Link>
                    </li>
                    <li>
                        <Link className="nav-btn" type="button" to="/projects">Projects</Link>
                    </li>
                    <li>
                        <Link className="nav-btn" type="button" to="/contact-me">Contact Me</Link>
                    </li>
                    <li>
                        <button className="nav-btn" type="button" name="resume"><a className="res-link" href="zachary_eggert_resume.pdf">My Resume</a></button>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}

export default Navbar;