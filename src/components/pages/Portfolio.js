import React from 'react';
import PortfolioCard from './PortfolioCard.js';
import '../../styles/Portfolio.css';

function Portfolio () {
    const projectInfo = [
        {
            title: "Street Fighter Combo Translator",
            description: "A community resource for Street Fighter V that allows users to translate combos from text notation into a series of captioned images. Of they are logged in, users can also post combos to be viewed by others.",
            gitHubFrontEnd: "https://github.com/MMarsolek/StreetFighterFrontEnd",
            gitHubBackEnd: "https://github.com/MMarsolek/StreetFighterCombo",
            deployedLink: "https://sf5combocreator.herokuapp.com/",
            imageLink: "https://i.imgur.com/Y9tCOXf.png"
        },
        {
            title: "Emerald Thumb",
            description: "A garden planning app for the pacific northwest that allows users to render and save garden plans based on their input.",
            gitHubFrontEnd: "https://github.com/carterfm/How-Does-Your-Garden-Grow-",
            gitHubBackEnd: "A garden",
            deployedLink: "https://serene-dusk-36944.herokuapp.com/",
            imageLink: "https://i.imgur.com/FiNwVSM.jpeg"
        },
        {
            title: "The Junior Encylopedia of Space",
            description: "An educational app that allows users to search and request info from a database of bodies in the solar system.",
            gitHubFrontEnd: "https://github.com/carterfm/The-Junior-Encyclopedia-of-Space",
            gitHubBackEnd: "",
            deployedLink: "https://carterfm.github.io/The-Junior-Encyclopedia-of-Space/",
            imageLink: "https://camo.githubusercontent.com/8e24df195f9b8bf41ca11e36348ca650f9632ecbb2b65ddd99f717515330ffd1/68747470733a2f2f692e696d6775722e636f6d2f306850453979382e706e67"
        },
        {
            title: "Weather Dashboard",
            description: "A basic weather dashboard that allows users to search for the current weather conditions and 5-day forecast in cities around the globe.",
            gitHubFrontEnd: "https://github.com/carterfm/Weather-Dashboard",
            gitHubBackEnd: "",
            deployedLink: "https://carterfm.github.io/Weather-Dashboard/",
            imageLink: "https://camo.githubusercontent.com/d868c304fbd8ee0d7284f9dbea92be8bd7ce995f36700885c7db4b84aaf0a7e1/68747470733a2f2f692e696d6775722e636f6d2f766432506136682e706e67"
        },
        {
            title: "Work Day Scheduler",
            description: "A basic day planner that track users' to-do items and changes items' color based on whether they're past, present, or future.",
            gitHubFrontEnd: "https://github.com/carterfm/Work-Day-Scheduler",
            gitHubBackEnd: "",
            deployedLink: "https://carterfm.github.io/Work-Day-Scheduler/",
            imageLink: "https://camo.githubusercontent.com/410543f8f1f0e7d7f2808d39cb3ea861472f1bcfb4a910a3fa70809537971be4/68747470733a2f2f692e696d6775722e636f6d2f7446396e3145722e706e67"
        },
        {
            title: "Random Password Generator",
            description: "A simple app that prompts the user for a series of categories a password should meet and then randomly generates a password that meets those categories.",
            gitHubFrontEnd: "https://github.com/carterfm/Random-Password-Generator",
            gitHubBackEnd: "",
            deployedLink: "https://carterfm.github.io/Random-Password-Generator/",
            imageLink: "https://camo.githubusercontent.com/f6458d2e54fa8f41d556000bcde601680ad0b132bf9a355f974d725ca8245273/68747470733a2f2f692e696d6775722e636f6d2f6f5479694e76302e706e67"
        }
    ];

    const renderPortfolioCards = (projects) => {
        return projects.map((project, index) => <PortfolioCard key={index} title={project.title} description={project.description} gitHubFrontEnd={project.gitHubFrontEnd} gitHubBackEnd={project.gitHubBackEnd} deployedLink={project.deployedLink} imageLink={project.imageLink} />)
    } 

    return (
        <div className="container portfolio-page my-4">
            <h1 className="text-center">Portfolio</h1>
            {/* TODO: ask about more dynamic styling of these elements */}
            <div className="row my-3">
                {renderPortfolioCards(projectInfo)}
            </div>
        </div>
    );
}

export default Portfolio;