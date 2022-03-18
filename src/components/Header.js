import React from 'react';
import '../styles/Header.css';

function Header({ currentPage, handlePageChange }) {
  return (
    <div className="jumbotron jumbotron-fluid d-flex align-items-center">
        <div className="container-fluid">
            <div className="row justify-content-around">
                <div className="col-12 col-lg-4 py-2 d-flex justify-content-center">
                    <h1>Carter Morfitt</h1>
                </div>

                <nav className="col-12 col-lg-8 d-flex justify-content-around align-items-center">
                    <a
                    href="#AboutMe"
                    onClick={() => handlePageChange('AboutMe')}
                    className={currentPage === 'AboutMe' ? 'selected' : ''}
                    >
                    About Me
                    </a>
                    <a
                    href="#Portfolio"
                    onClick={() => handlePageChange('Portfolio')}
                    className={currentPage === 'Portfolio' ? 'selected' : ''}
                    >
                    Portfolio
                    </a>
                    <a
                    href="#Contact"
                    onClick={() => handlePageChange('Contact')}
                    className={currentPage === 'Contact' ? 'selected' : ''}
                    >
                    Contact
                    </a>
                    <a
                    href="#Resume"
                    onClick={() => handlePageChange('Resume')}
                    className={currentPage === 'Resume' ? 'selected' : ''}
                    >
                    Resume
                    </a>
                </nav>
            </div>
        </div>
    </div>
  );
}

export default Header;