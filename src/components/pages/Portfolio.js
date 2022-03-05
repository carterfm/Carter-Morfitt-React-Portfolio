import React from 'react';
import PortfolioCard from './PortfolioCard.js';
import '../../styles/Portfolio.css';

function Portfolio () {
    const projectInfo = [
        {
            title: "Emerald Thumb",
            gitHubLink: "https://github.com/carterfm/How-Does-Your-Garden-Grow-",
            deployedLink: "https://serene-dusk-36944.herokuapp.com/",
            imageLink: "https://i.imgur.com/FiNwVSM.jpeg"
        },
        {
            title: "The Junior Encylopedia of Space",
            gitHubLink: "https://github.com/carterfm/The-Junior-Encyclopedia-of-Space",
            deployedLink: "https://carterfm.github.io/The-Junior-Encyclopedia-of-Space/",
            imageLink: "https://camo.githubusercontent.com/8e24df195f9b8bf41ca11e36348ca650f9632ecbb2b65ddd99f717515330ffd1/68747470733a2f2f692e696d6775722e636f6d2f306850453979382e706e67"
        },
        {
            title: "Weather Dashboard",
            gitHubLink: "https://github.com/carterfm/Weather-Dashboard",
            deployedLink: "https://carterfm.github.io/Weather-Dashboard/",
            imageLink: "https://camo.githubusercontent.com/d868c304fbd8ee0d7284f9dbea92be8bd7ce995f36700885c7db4b84aaf0a7e1/68747470733a2f2f692e696d6775722e636f6d2f766432506136682e706e67"
        },
        {
            title: "Work Day Scheduler",
            gitHubLink: "https://github.com/carterfm/Work-Day-Scheduler",
            deployedLink: "https://carterfm.github.io/Work-Day-Scheduler/",
            imageLink: "https://camo.githubusercontent.com/410543f8f1f0e7d7f2808d39cb3ea861472f1bcfb4a910a3fa70809537971be4/68747470733a2f2f692e696d6775722e636f6d2f7446396e3145722e706e67"
        },
        {
            title: "Code Quiz",
            gitHubLink: "https://github.com/carterfm/Code-Quiz",
            deployedLink: "https://carterfm.github.io/Code-Quiz/",
            imageLink: "https://camo.githubusercontent.com/2bf9d4eb60052e486c5e7e1fd3d4567c64fd2db73ca19c4d0fcfa867f64d7c5c/68747470733a2f2f692e696d6775722e636f6d2f3864644439747a2e706e67"
        },
        {
            title: "Random Password Generator",
            gitHubLink: "https://github.com/carterfm/Random-Password-Generator",
            deployedLink: "https://carterfm.github.io/Random-Password-Generator/",
            imageLink: "https://camo.githubusercontent.com/f6458d2e54fa8f41d556000bcde601680ad0b132bf9a355f974d725ca8245273/68747470733a2f2f692e696d6775722e636f6d2f6f5479694e76302e706e67"
        }
    ];

    const renderPortfolioCards = (projects) => {
        let cards = [];
        for (const project of projects) {
            cards.push(<PortfolioCard title={project.title} gitHubLink={project.gitHubLink} deployedLink={project.deployedLink} imageLink={project.imageLink} />)
        }
        return cards;
    } 

    return (
        <div className="container portfolio-page">
            {/* TODO: ask about more dynamic styling of these elements */}
            <div className="row my-3">
                {renderPortfolioCards(projectInfo)}
            </div>
        </div>
    );
}

export default Portfolio;