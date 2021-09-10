import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Background from './components/Background';
import Header from './components/Header';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import ContactMe from './components/ContactMe';
import Projects from './components/Projects';




function App() {
    return (
        <Router>
            <div>
                <Background />
                <Header />
                <Navbar />
                <Route path="/">
                </Route>
                <Route path="/about-me">
                    <AboutMe />
                </Route>
                <Route path="/projects">
                    <Projects />
                </Route>
                <Route path="/contact-me">
                    <ContactMe />
                </Route>
            </div>
        </Router>
           
    );
}

export default App;