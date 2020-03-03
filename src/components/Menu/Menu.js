import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import './Menu.css';
import { Link, withNavigationContext } from "react-awesome-slider/dist/navigation";

const Menu = ({ fullpage: { navigation: { slug }} }) => {
    return (
        <Navbar
            className="menu"
            collapseOnSelect
            expand="lg"
            // bg="dark"
            // variant="dark"
        >
            <Link className="logo" href="one">Konstantin Modin</Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">                
                <Nav className="ml-auto">
                    <Link className={slug === 'about'? 'selected':''} href='about'>About</Link>
                    <Link className={slug === 'skills'? 'selected':''} href='skills'>Skills</Link>
                    <Link className={slug === 'projects'? 'selected':''} href='projects'>Projects</Link>
                    <Link className={slug === 'contacts'? 'selected':''} href='contacts'>Contacts</Link>                    
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default withNavigationContext(Menu);
