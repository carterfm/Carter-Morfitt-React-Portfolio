import React from 'react';
import resume from '../../resume/CarterMorfittResumeDraft.pdf';
import '../../styles/Resume.css';

function Resume () {
    return (
        <div className="container-fluid text-center resume-page">
            <p><a href={resume} download>Click here</a> to download my resume!</p>
            <p>Front end skills:</p>
            <ul className="frontend-skill-list">
                <li>HTML5, CSS, JavaScript</li>
                <li>JQuery, Bootstrap, React</li>
            </ul>
            <p className="font-weight-bold">Back end skills:</p>
            <ul className="backend-skill-list">
                <li>MySQL, Sequelize, MongoDB, Mongoose</li>
                <li>Express, Node, Handlebars</li>
            </ul>
        </div>
    );
}

// ● Frontend: HTML5, CSS, JQuery, JavaScript, Bootstrap
// ● Backend: MySQL, Sequelize, Express, Node, Handlebars

export default Resume;