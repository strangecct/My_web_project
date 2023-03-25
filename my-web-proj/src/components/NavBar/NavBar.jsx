import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

import navIcon1 from '../../assets/img/nav-icon1.svg'
import navIcon2 from '../../assets/img/nav-icon2.svg'
import navIcon3 from '../../assets/img/nav-icon3.svg'
import logo from '../../assets/img/logo.svg'
import './NavBar.css'


import {
    BrowserRouter as Router
} from "react-router-dom";

export const MyNavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            }
            else {
                setScrolled(false);
            }
        }
        window.addEventListener('scroll', onScroll)
        return () => {window.removeEventListener('scroll', onScroll)}
    }, [])

    const onUpdateActiveLink = val => {
        setActiveLink(val);
    }
    return (
        <Router>
            <Navbar expand="lg" className={scrolled ? 'scrolled' : ''}>
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={logo} alt="logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" >
                        <span className='navbar-toggler-icon'></span>
                    </Navbar.Toggle>


                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home"
                                className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
                                onClick={() => onUpdateActiveLink('home')}
                            >首页</Nav.Link>
                            <Nav.Link href="#skills"
                                className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
                                onClick={() => onUpdateActiveLink('skills')}
                            >技能</Nav.Link>
                            <Nav.Link href="#projects"
                                className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
                                onClick={() => onUpdateActiveLink('projects')}
                            >校园经历</Nav.Link>
                            {/* <NavDropdown title="Lessons" id="basic-nav-dropdown"
                            className={'navbar-link'}
                        >
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown> */}
                            {/* 放进下拉框以后会变形 */}
                        </Nav>
                    </Navbar.Collapse>
                    <span className='navbar-text'>
                        <div className='social-icon'>
                            <a href="http://google.com"><img src={navIcon1} alt="" /></a>
                            <a href="/facebook"><img src={navIcon2} alt="" /></a>
                            <a href="/ins"><img src={navIcon3} alt="" /></a>
                        </div>
                        <button className='vvd' onClick={() => console.log('button connect')}>
                            <span>let' connect</span>
                        </button>
                    </span>
                </Container>
            </Navbar>
        </Router>
    );
}