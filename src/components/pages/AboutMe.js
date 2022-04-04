import React from 'react';
import '../../styles/AboutMe.css';
import profile from '../../images/profile.png';

function AboutMe () {
    return (
        <div className="container-fluid my-4 about-me">
            <div className="row">
                <section className="col-10 col-md-8 col-lg-8 main-content">
                    <h1>About Me</h1>
                    <p>
                        Thanks for visiting my portfolio! My name is Carter Morfitt, and I'm a full stack web developer with a certificate from the University of Washington's full stack code
                        boot camp. While I am a newcomer to the industry, I'm proud of the work you can find linked in the portfolio section of this site, and I believe it provides a solid cross-section of my capabilities.
                    </p>
                    <p>
                        Aside from my CS education, I'm a magna cum laude graduate of Western Washington
                        University with a BS in mathematics and a BA in Politics/Economics and French. I speak fluent French, and have experience using it in a
                        workplace setting as a French-language QA tester with
                        Nintendo of America.
                    </p>
                </section>
                {/* TODO: this whole section is cursed; figure out what in the fresh heck is going on */}
                <div className="portrait col-12 d-flex col-lg-3">
                    <div className="portrait-holder">
                        {/* TODO: ask what is going on with the text wrapping here???  */}
                        <img src={profile} alt="A portrait of a brown-haired and beared caucasian man smiling."></img>
                        <p>Location: Port Angeles, WA</p>
                        <p>Graduated college: June 2021</p>
                        <p>Hobbies: climbing, running, gaming</p>

                    </div>
                    
                </div>
            </div>

        </div>
    );
}

export default AboutMe;