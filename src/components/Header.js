import React from 'react';
import MobileNav from './MobileNav';

import '../styles/styles.css';

function Header() {
    return (
        <div>
            <header>
                <h1>Zachary Eggert</h1>
                <h3>Full Stack Developer</h3>
                <MobileNav />
            </header>
        </div>
    )
}

export default Header;