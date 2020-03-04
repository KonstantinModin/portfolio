import React from 'react';
import back3 from '../../img/9.jpg';

import proj1 from '../../img/proj1.jpg';
import proj2 from '../../img/proj2.jpg';

const Projects = () => {
    return (
        <>        
            <img className="back" src={back3} alt="back3"/>             
            <div className="content">
                <div className="top hide"><h1>Projects:</h1></div>                   
                <div className="bot">                    
                    <a href="https://www.spain-alicante.com/" target="_blank" rel="noopener noreferrer" >
                        <div className="row">
                            <img src={proj1} alt="project1 logo" />
                            <div>
                                <h3>Real Estate Agency Website</h3>
                                <h5>Real Estate for sell, for rent, excursions information, etc. </h5>
                            </div>
                        </div>
                    </a>
                    <a href="https://lucid-volhard-4ac45f.netlify.com/" target="_blank" rel="noopener noreferrer" >
                        <div className="row">
                                <img src={proj2} alt="project2 logo" />
                            <div>
                                <h3>React experiments</h3>
                                <h5>Some home projects with React/Redux including data fetching, 
                                    routing, lazy loading, etc. Available on my Github page.
                                </h5>
                            </div>
                        </div>                                                        
                    </a>
                </div>
            </div>
        </>        
    )
};

export default Projects;