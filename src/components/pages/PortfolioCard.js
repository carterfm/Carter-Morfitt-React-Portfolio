import React, {useState} from 'react';
import '../../styles/PortfolioCard.css'

function PortfolioCard ({title, gitHubFrontEnd, gitHubBackEnd, deployedLink, imageLink, description}) {
    // A state variable to track whether this image has been selected
    const [selected, setSelected] = useState(false);

    const handleImageHolderClick = (event) => {
        let target = event.target;

        if (target.classList.contains("title")) {
            target = target.parentElement.children[1];
        }

        if (!selected) {
            target.style.opacity = "100%";
            target.parentElement.parentElement.style["box-shadow"] = "0 0 20px #ccc";
            setSelected(true);
        } else {
            target.style.opacity = "60%";
            target.parentElement.parentElement.style["box-shadow"] = "none";
            setSelected(false);
        }
    }

    return (
        <div className="portfolio-card col-11 col-md-9 col-lg-5 my-4">
            <div className="title-and-image-holder">
                {!selected && <h3 className="title text-center" onClick={handleImageHolderClick}>{title}</h3>}
                <div className="image-holder d-flex justify-content-center" style={{backgroundImage: `url(${imageLink})`}} onClick={handleImageHolderClick}></div>
            </div>
            {selected && (<div className="content-holder">
                <h3 className="title2">{title}</h3>
                <h5 className="description">{description}</h5>
                {!gitHubBackEnd && (
                    <ul>
                        <li><a href={deployedLink} target="_blank" rel="noreferrer noopener">Link to deployed app</a></li>
                        <li><a href={gitHubFrontEnd} target="_blank" rel="noreferrer noopener">Link to GitHub repository</a></li>
                    </ul>
                )}
                {gitHubBackEnd && (
                    <ul>
                        <li><a href={deployedLink} target="_blank" rel="noreferrer noopener">Link to deployed app</a></li>
                        <li><a href={gitHubFrontEnd} target="_blank" rel="noreferrer noopener">Link to front end's GitHub repository</a></li>
                        <li><a href={gitHubBackEnd} target="_blank" rel="noreferrer noopener">Link to back end's GitHub repository</a></li>
                    </ul>
                )}
            </div>)}
        </div>
    );
}

export default PortfolioCard;