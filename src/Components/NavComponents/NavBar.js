import React, { useState } from 'react';
import {
    Navbar, Container, NavbarToggler, Collapse, Nav, NavItem,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as icons from '@fortawesome/free-brands-svg-icons';
import '../Styles/NavBarStyles/NavBar.css';


const NavBar =() => {
    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);
    

    window.addEventListener('scroll', function (e) {
        var MyNav = document.getElementById('MyNav');
        if (document.documentElement.scrollTop  > 200) {
            MyNav.classList.add('nav-colored');
            MyNav.classList.remove('nav-transparent');
            } else {
                MyNav.classList.add('nav-transparent');
                MyNav.classList.remove('nav-colored');
            }
    });
    return(
       <div className="navbar">
           <Navbar light expand="md" fixed="top" id="MyNav">
                <Container>
                    <Link to="/home">
                        <h1 className="logo">GH</h1>
                    </Link>
                    <NavbarToggler onClick={toggleNavbar} className="mr-2"/>
                    <Collapse isOpen={!collapsed} navbar>
                    <Nav className="links">
                        <NavItem className="list">
                            <a href="#Homee">Home</a>
                        </NavItem>
                        <NavItem className="list">
                            <a href="#Abo">About</a>
                        </NavItem>
                        <NavItem className="list">
                            <a href="#Proj">MyProjects</a>
                        </NavItem>
                        <NavItem className="list">
                            <a href="#Con">Contact</a>
                        </NavItem>
                    </Nav>
                    </Collapse>
                    <a href="https://www.facebook.com/" target="_blank" className="icon"><FontAwesomeIcon icon={icons.faFacebook} /></a>
                    <a href="https://www.linkedin.com/feed/" target="_blank" className="icon"><FontAwesomeIcon icon={icons.faLinkedinIn} /></a>
                    <a href="https://github.com/GhadaAboraya" target="_blank" className="icon"><FontAwesomeIcon icon={icons.faGithub} /></a>
                </Container>
            </Navbar>
       </div>
    );
}
export default NavBar;