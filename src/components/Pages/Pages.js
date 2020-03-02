import React from 'react';
import avat from '../../img/Avat.jpg';
import back1 from '../../img/2.jpg';
import back2 from '../../img/5.jpg';
import back3 from '../../img/8.jpg';
import inst from '../../img/inst.png';

import { Icon, InlineIcon } from '@iconify/react';

import mobilePhone from '@iconify/icons-twemoji/mobile-phone';
import telegramIcon from '@iconify/icons-logos/telegram';
import whatsappIcon from '@iconify/icons-logos/whatsapp';
import viberIcon from '@iconify/icons-fa-brands/viber';

import eMail from '@iconify/icons-noto-v1/e-mail';

import githubIcon from '@iconify/icons-logos/github-icon';
import facebookIcon from '@iconify/icons-logos/facebook';
import codewarsIcon from '@iconify/icons-simple-icons/codewars';
import linkedinIcon from '@iconify/icons-simple-icons/linkedin';

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
                    <h1>Contacts</h1>                    
                </div>
                <div className="bot">
                    <div className="line">
                        <h3>You can reach me at +34 642 263 271, available for: </h3>
                        <div>
                            <Icon icon={mobilePhone} width="50"/>
                            <Icon icon={telegramIcon} width="50"/>
                            <Icon icon={whatsappIcon} width="50"/>
                            <Icon icon={viberIcon} width="50" color="#7D3DAF"/>
                        </div>
                    </div>
                    <div className="line">
                        
                        <h3><Icon icon={eMail} width="75"/>konstantin.v.modin@gmail.com</h3>
                    </div>
                    <div className="line">
                        <h3>Links</h3>
                        <div>
                            <Icon icon={githubIcon} width="75"/>
                            <Icon icon={facebookIcon} width="75"/>
                            <Icon icon={linkedinIcon} width="75" color="#0077B5"/>
                            <Icon icon={codewarsIcon} width="75" color="#B92F21"/>
                            <img src={inst} alt="instagram logo" width="85"/>
                        </div>
                    </div>
                </div>
            </div>
        </>        
    )
};
