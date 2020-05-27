import React from "react";

import back3 from "../../img/8.jpg";

import cell from "../../img/cell.png";
import telegr from "../../img/telegr.png";
import whatsapp from "../../img/whatsapp.png";
import viber from "../../img/viber.png";

import gmail from "../../img/gmail.png";

import git from "../../img/git.png";
import face from "../../img/face.png";
import linkedin from "../../img/in.png";
import cw from "../../img/cw.png";
import skype from "../../img/skype.png";
import inst from "../../img/inst.png";

const Contacts = () => {
    return (
        <>
            <img className="back" src={back3} alt="back3" />
            <div className="content contacts">
                <div className="top hide">
                    <h1>Contacts:</h1>
                </div>
                <div className="bot">
                    <div className="line">
                        <h2>You can reach me at</h2>
                        <h2>
                            <a href="tel:+34642263271">+34 642 263 271</a>,
                            available for:{" "}
                        </h2>
                        <div>
                            <a href="tel:+34642263271">
                                <img
                                    src={cell}
                                    width="85"
                                    alt="cell phone logo"
                                />
                            </a>
                            <a href="https://t.me/Konstantin_Modin">
                                <img
                                    src={telegr}
                                    width="85"
                                    alt="telegram logo"
                                />
                            </a>
                            <a href="whatsapp://send?phone=+34642263271">
                                <img
                                    src={whatsapp}
                                    width="85"
                                    alt="whatsapp logo"
                                />
                            </a>
                            <a href="viber://add?number=%2B34642263271">
                                <img src={viber} width="85" alt="viber logo" />
                            </a>
                        </div>
                    </div>
                    <div className="line">
                        <h2>E-mail:</h2>
                        <a href="mailto:konstantin.v.modin@gmail.com">
                            <h2>
                                <img src={gmail} alt="gmail logo" width="85" />
                                konstantin.v.modin@gmail.com
                            </h2>
                        </a>
                    </div>
                    <div className="line">
                        <h3>Links:</h3>
                        <div>
                            <a
                                href="https://github.com/KonstantinModin"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={git} alt="git logo" width="85" />
                            </a>
                            <a
                                href="https://www.facebook.com/konstantin.modin.1"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src={face}
                                    alt="facebook logo"
                                    width="85"
                                />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/konstantin-modin"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src={linkedin}
                                    alt="linkedin logo"
                                    width="85"
                                />
                            </a>
                            <a
                                href="skype:albergiberbaral"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={skype} alt="skype logo" width="85" />
                            </a>
                            <a
                                href="https://www.codewars.com/users/Konstantin%20Modin"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={cw} alt="codewars logo" width="85" />
                            </a>
                            <a
                                href="https://www.instagram.com/kostya7777777/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src={inst}
                                    alt="instagram logo"
                                    width="85"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contacts;
