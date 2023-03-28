import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import Mailchimp from "./Mailchimp";

import logo from "../../assets/img/logo.svg";
import navIcon1 from "../../assets/img/nav-icon1.svg";
import navIcon2 from "../../assets/img/nav-icon2.svg";
import navIcon3 from "../../assets/img/nav-icon3.svg";
import './index.css'

export default function Footer() {
    return (
        <footer className='footer' id='footer'>
            <Container>
                <Row className='align-item-center'>
                    <Mailchimp />
                    <Col sm={6}>
                        <img src={logo} alt="logo" />
                    </Col>
                    <Col sm={6} className='text-center text-sm-end'>
                        <div className='social-icon'>
                            <a href="#home" ><img src={navIcon1} alt='Icon' /></a>
                            <a href="#home" ><img src={navIcon2} alt='Icon' /></a>
                            <a href="#home" ><img src={navIcon3} alt='Icon' /></a>
                        </div>
                        <p>Copy right 2023</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
