import React from 'react';
import AboutMe from './AboutMe';
import Projects from './Projects';
import ContactMe from './ContactMe';

import '../styles/styles.css';

function Main() {
    return (
        <main>
            <AboutMe />
            <Projects />
            <ContactMe />
        </main>
    )
}

export default Main;