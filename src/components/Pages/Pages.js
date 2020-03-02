import React from 'react';
import avat from '../../img/Avat.jpg';
import back1 from '../../img/2.jpg';
import back2 from '../../img/5.jpg';
import back3 from '../../img/8.jpg';

import cell from '../../img/cell.png';
import telegr from '../../img/telegr.png';
import whatsapp from '../../img/whatsapp.png';
import viber from '../../img/viber.png';

import gmail from '../../img/gmail.png';

import git from '../../img/git.png';
import face from '../../img/face.png';
import linkedin from '../../img/in.png';
import cw from '../../img/cw.png';
import inst from '../../img/inst.png';

import './Pages.css';



export const Page1 = () => {
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
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore dolorem, quia possimus placeat explicabo adipisci ipsa neque aspernatur temporibus ut amet eius vitae. Voluptatibus, excepturi. Nisi at saepe libero eaque. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore omnis sint perspiciatis totam aperiam facere dolor, commodi sit illo amet quam, sed beatae vitae cupiditate culpa dicta veritatis officiis dignissimos? Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <p>Porro, mollitia expedita animi molestiae consequatur praesentium nam voluptate sint ullam officiis nihil architecto itaque in nulla unde ab? Esse, voluptatibus soluta.</p>
                </div>
            </div>      
        </>
    )
};

export const Page2 = () => {
    return (
        <>
            <img className="back" src={back2} alt="back2"/>            
            <div className="content">
                <div className="top">
                    <h1>Skills</h1>                    
                </div>
                <div className="bot">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore dolorem, quia possimus placeat explicabo adipisci ipsa neque aspernatur temporibus ut amet eius vitae. Voluptatibus, excepturi. Nisi at saepe libero eaque. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore omnis sint perspiciatis totam aperiam facere dolor, commodi sit illo amet quam, sed beatae vitae cupiditate culpa dicta veritatis officiis dignissimos? Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore dolorem, quia possimus placeat explicabo adipisci ipsa neque aspernatur temporibus ut amet eius vitae. Voluptatibus, excepturi. Nisi at saepe libero eaque. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore omnis sint perspiciatis totam aperiam facere dolor, commodi sit illo amet quam, sed beatae vitae cupiditate culpa dicta veritatis officiis dignissimos? Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <p>Porro, mollitia expedita animi molestiae consequatur praesentium nam voluptate sint ullam officiis nihil architecto itaque in nulla unde ab? Esse, voluptatibus soluta.</p>                    
                    <a target="_blank" href="https://www.codewars.com/users/Konstantin%20Modin">
                        <img src="https://www.codewars.com/users/Konstantin%20Modin/badges/large" alt="codewars badge large" />
                    </a>
                </div>
            </div>       
        </>
    )
};

export const Page3 = () => {
    return (
        <>        
            <img className="back" src={back3} alt="back3"/>             
            <div className="content">
                <div className="top">
                    <h1>Contacts:</h1>                    
                </div>
                <div className="bot">
                    <div className="line">
                        <h3>You can reach me at <a href="tel:+34642263271">+34 642 263 271</a>, available for: </h3>
                        <div>
                            <a href="tel:+34642263271">
                                <img src={cell} width="50" alt="cell phone logo" />
                            </a>
                            <a href="https://t.me/Konstantin_Modin">
                                <img src={telegr} width="50" alt="telegram logo"/>
                            </a>
                            <a href="whatsapp://send?phone=+34642263271">                            
                                <img src={whatsapp} width="50" alt="whatsapp logo"/>
                            </a>
                            <a href="viber://add?number=%2B34642263271">
                                <img src={viber} width="50" alt="viber logo"/>
                            </a>
                        </div>
                    </div>
                    <div className="line">                        
                        <a href="mailto:konstantin.v.modin@gmail.com"><h3><img src={gmail} width="50" />konstantin.v.modin@gmail.com</h3></a>
                    </div>
                    <div className="line">
                        <h3>Links:</h3>
                        <div>                            
                            <a href="https://github.com/KonstantinModin" target="_blank" rel="noopener noreferrer">
                                <img src={git} alt="git logo" width="85"/>
                            </a>
                            <a href="https://www.facebook.com/konstantin.modin.1" target="_blank" rel="noopener noreferrer">
                                <img src={face} alt="facebook logo" width="85"/>                                
                            </a>
                            <a href="https://www.linkedin.com/in/konstantin-modin" target="_blank" rel="noopener noreferrer">
                                <img src={linkedin} alt="linkedin logo" width="85"/>                                                              
                            </a>
                            <a href="https://www.codewars.com/users/Konstantin%20Modin" target="_blank" rel="noopener noreferrer">
                                <img src={cw} alt="codewars logo" width="85"/>                                                                                            
                            </a>
                            <a href="https://www.instagram.com/kostya7777777/" target="_blank" rel="noopener noreferrer">
                                <img src={inst} alt="instagram logo" width="85"/>                                                                                                                            
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>        
    )
};
