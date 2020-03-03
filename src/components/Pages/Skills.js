import React from 'react';
import back2 from '../../img/5.jpg';

//skills
import reactLogo from '../../img/react.png';
import reduxLogo from '../../img/reduxlogo.png';
import js from '../../img/js.png';
import html from '../../img/html.png';
import css from '../../img/css.png';
import jq from '../../img/jq.png';
import node from '../../img/node.png';
import lodash from '../../img/lodash.png';
import gatsby from '../../img/gatsby.png';
import wp from '../../img/wp.png';
import boot from '../../img/bootstrap.png';
import sass from '../../img/sass.png';
import less from '../../img/less.png';
import webpack from '../../img/webpack.png';
import babel from '../../img/babel.png';
import jest from '../../img/jest.png';
import chai from '../../img/chai.png';
import mocha from '../../img/mocha.png';
import npm from '../../img/npm.png';
import rest from '../../img/rest.png';
import git from '../../img/git.png';

//languages
import eng from '../../img/eng.png';
import spain from '../../img/spain.png';
import ger from '../../img/germany.png';
import rus from '../../img/russia.png';

const Skills = () => {
    return (
        <>
            <img className="back" src={back2} alt="back2"/>            
            <div className="content">                
                <div className="bot">
                    <div className="line">
                        <h3>Technologies</h3>
                        <div className="tech">
                            <img src={reactLogo} alt="react logo" width="85" />
                            <img src={reduxLogo} alt="redux logo" width="85" />
                            <img src={js} alt="js logo" width="85" />
                            <img src={node} alt="node logo" width="85" />
                            <img src={jq} alt="jq logo" width="85" />
                            <img src={html} alt="html logo" width="85" />
                            <img src={css} alt="css logo" width="85" />
                            <img src={lodash} alt="lodash logo" width="85" />
                            <img src={gatsby} alt="gatsby logo" width="85" />
                            <img src={wp} alt="wp logo" width="85" />
                            <img src={boot} alt="boot logo" width="85" />
                            <img src={sass} alt="sass logo" width="85" />
                            <img src={less} alt="less logo" width="85" />
                            <img src={webpack} alt="webpack logo" width="85" />
                            <img src={babel} alt="babel logo" width="85" />
                            <img src={jest} alt="jest logo" width="85" />
                            <img src={chai} alt="chai logo" width="85" />
                            <img src={mocha} alt="mocha logo" width="85" />
                            <img src={npm} alt="npm logo" width="85" />
                            <img src={rest} alt="rest logo" width="85" />
                            <img src={git} alt="git logo" width="85" />
                        </div>
                    </div>
                    <div className="line">
                        <h3>Languages</h3>
                        <div className="lang">
                            <div className="line">
                                <img src={eng} alt="eng logo" width="85" />
                                <h6>Full <br/>Professional</h6>
                            </div>
                            <div className="line">
                                <img src={spain} alt="spain logo" width="85" />
                                <h6>Full <br/>Professional</h6>
                            </div>
                            <div className="line">
                                <img src={ger} alt="ger logo" width="85" />
                                <h6>Elementary</h6>
                            </div>
                            <div className="line">
                                <img src={rus} alt="rus logo" width="85" />                            
                                <h6>Native</h6>
                            </div>
                        </div>
                    </div>

                    <div className="line">
                        <h3>Ranked in Top-500 on <a href="https://www.codewars.com/users/leaderboard" target="_blank" rel="noopener noreferrer">codewars.com</a></h3>
                        <div>
                            <a target="_blank" rel="noopener noreferrer"href="https://www.codewars.com/users/Konstantin%20Modin">
                                <img src="https://www.codewars.com/users/Konstantin%20Modin/badges/large" alt="codewars badge large" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>       
        </>
    )
};

export default Skills;