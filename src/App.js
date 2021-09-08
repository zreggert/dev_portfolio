import React from 'react';
import Background from './components/Background';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Main from './components/Main';

function App() {
    return (
        <div>
            <Background />
            <Header />
            <Navbar />
            <Main />
        </div>
    );
}

export default App;