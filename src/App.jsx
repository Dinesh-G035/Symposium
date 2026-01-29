import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import Schedule from './components/Schedule';

import Registration from './components/Registration';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {


    return (
        <div className="min-h-screen text-white overflow-hidden relative selection:bg-neon-blue selection:text-black">
            {/* Global Background Elements */}
            <div className="bg pointer-events-none opacity-60"></div>
            <div className="star-field pointer-events-none">
                <div className="layer"></div>
                <div className="layer"></div>
                <div className="layer"></div>
            </div>

            <div className="relative z-10">
                <Navbar />
                <Hero />
                <Events />
                <Schedule />

                <Registration />
                <About />
                <Contact />
                <Footer />
            </div>
        </div>
    );
}

export default App;
