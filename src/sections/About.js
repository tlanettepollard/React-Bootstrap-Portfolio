import React from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

import jumbotronPic from '../images/blackwomancodingsmall.jpg';
import profilePic from '../images/TLPProfile.JPG';
import '../style/App.css';

const About = () => {
    return (
        <>
            <div>
                <Container fluid className="container">
                    <Jumbotron fluid className="jumbotron__container">
                        <Row>
                            <Col className="about-info col-12 col-lg-6 px-5">
                                <h1 className="jumbotron-heading heading-dark">Hi, I'm Trista!</h1>
                                <h3 className="jumbotron-subtitle heading-dark">I love to build amazing websites! </h3>
                                <p className="jumbotron-text text-dark">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer libero tellus, lacinia et ornare sit amet, tincidunt vitae arcu. Vivamus fermentum consequat mi consectetur dapibus. Donec nec ante fermentum, congue mauris porta, molestie lectus. Quisque nec interdum ex. Integer facilisis elit ante, ut consequat mi elementum non. Duis mattis malesuada lorem, vitae auctor lectus hendrerit sed. </p>
                                <Row>
                                    <Col className="mx-auto">
                                        <Image src={profilePic}  className="profile-pic" />
                                    </Col>
                                    <Col className="d-grid gap-2 align-items-center justify-content-center">
                                        <Button variant="light" size="lg" className="jumbotron-button btn-dark"><a href="#contact" className="text-light">Work with Me</a></Button>
                                        <Button variant="light" size="lg" className="jumbotron-button btn-dark"><a href="#projects" className="text-light">See My Past Work</a></Button>
                                    </Col>
                                </Row>
                            </Col>
                   
                            <Col className="px-5">
                                <Image src={jumbotronPic} fluid className="header-pic col-12 col-lg-6" />
                            </Col>
                        </Row>
                    </Jumbotron>
                </Container>
            </div>
        </>
    );
};


export default About