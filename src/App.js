import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Background from './components/Background';
import Header from './components/Header';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import ContactMe from './components/ContactMe';
import Projects from './components/Projects';
import Footer from './components/Footer';




function App() {
    return (
        <Router>
            <div>
                <Background />
                <Header />
                <Navbar />
                <Route exact path="/">
                </Route>
                <Route exact path="/about-me">
                    <AboutMe />
                </Route>
                <Route exact path="/projects">
                    <Projects />
                </Route>
                <Route exact path="/contact-me">
                    <ContactMe />
                </Route>
                
                <Footer />
            </div>
        </Router>
           
    );
}

export default App;