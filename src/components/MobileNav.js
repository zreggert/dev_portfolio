import React from 'react';

import '../styles/styles.css';

function MobileNav() {
    return (
        <div className="mobile">
            <nav>
                <ul>
                    <li>
                        <button className="nav-btn-mobile" type="button" name="home-mobile">Home</button>
                    </li>
                    <li>
                        <button className="nav-btn-mobile" type="button" name="about-me">About Me</button>
                    </li>
                    <li>
                        <button className="nav-btn-mobile" type="button" name="projects">Projects</button>
                    </li>
                    <li>
                        <button className="nav-btn-mobile" type="button" name="contact-me">Contact Me</button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default MobileNav;