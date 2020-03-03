import React from 'react';
import avat from '../../img/Avat.jpg';
import back1 from '../../img/2.jpg';

const About = () => {
    return (
        <>
            <img className="back" src={back1} alt="back1"/>
            <div className="content">
                <div className="top">
                    <img className="avat" src={avat} alt="konstantin"/>
                    <h1>Whats'up! I am Konstantin Modin</h1>
                    <h2>Front-end Software Engineer</h2>
                </div>
                <div className="bot">
                    <p>Bla-bla-bla</p>
                </div>
            </div>      
        </>
    )
};

export default About;