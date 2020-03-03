import React from 'react';
import avat from '../../img/Avat.jpg';
import back1 from '../../img/2.jpg';
import { Link } from "react-awesome-slider/dist/navigation";

const About = () => {
    return (
        <>
            <img className="back" src={back1} alt="back1"/>
            <div className="content">
                <div className="top">
                    <img className="avat" src={avat} alt="konstantin"/>
                    <h1>Whats'up! I am Konstantin Modin</h1>
                    <h2>React Front-end Software Engineer</h2>
                </div>
                <div className="bot">
                    <Link className='button' href='skills'>Next</Link>
                </div>
            </div>      
        </>
    )
};

export default About;