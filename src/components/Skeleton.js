import React, { useState } from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import AboutMe from './pages/AboutMe.js';
import Portfolio from './pages/Portfolio.js';
import Contact from './pages/Contact.js';
import Resume from './pages/Resume.js';

function Skeleton() {
    const [currentPage, setCurrentPage] = useState('AboutMe');

    const renderPage = () => {
        if (currentPage === 'AboutMe') {
            return <AboutMe />;
        } else if (currentPage === 'Portfolio') {
            return <Portfolio />;
        } else if (currentPage === 'Contact') {
            return <Contact />;
        } else {
            return <Resume />;
        }
    }

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Header currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            <Footer />
        </div>
    );
}

export default Skeleton;