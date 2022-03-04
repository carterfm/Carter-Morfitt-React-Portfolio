import React from 'react';
import '../styles/Footer.css'

function Footer () {
    return (
    <div className="footer container">
        <div className="row justify-content-around">
            <a className="col-12 col-md-3 my-3 text-center" href="https://stackoverflow.com/users/17450388/carterfm" target="_blank" rel="noreferrer noopener">Stack Overflow</a>
            <a className="col-12 col-md-3 my-3 text-center" href="https://github.com/carterfm" target="_blank" rel="noreferrer noopener">GitHub</a>
            <a className="col-12 col-md-3 my-3 text-center" href="https://www.linkedin.com/in/carter-morfitt-0166b8197/" target="_blank" rel="noreferrer noopener">LinkedIn</a>
        </div>
    </div>
    );
}

export default Footer;