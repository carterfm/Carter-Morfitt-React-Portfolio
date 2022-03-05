import React from 'react';
import '../../styles/PortfolioCard.css'

function PortfolioCard ({title, gitHubLink, deployedLink, imageLink}) {
    return (
        <div className="portfolio-card col-11 col-md-9 col-lg-5 my-4">
            <h3 className="font-weight-bold">{title}</h3>
            <div className="image-holder" style={{backgroundImage: `url(${imageLink})`}}></div>
            <ul>
                <li><a href={deployedLink} target="_blank" rel="noreferrer noopener">Link to deployed app</a></li>
                <li><a href={gitHubLink} target="_blank" rel="noreferrer noopener">Link to GitHub repository</a></li>
            </ul>
        </div>
    );
}

export default PortfolioCard;