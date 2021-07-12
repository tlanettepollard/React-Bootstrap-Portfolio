import React from 'react';
import Card from 'react-bootstrap/Card';
//import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';
//import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { DesktopComputerIcon } from '@heroicons/react/solid';
//import Image from 'react-bootstrap/Image';
import cascadePic from '../images/CascadeCafeTLPChallenge.png';
import pomodoroPic from '../images/PomodoroClockFreeCodeCamp.png';
import insurePic from '../images/InsureWebsiteFrontendMentor.png';
import pricingPic from '../images/PricingComponentFrontendMentor.png';

import '../style/App.css'; 
//import { projects } from "../data";

const Projects = () => {
    return (
        <>
            <Container id="projects" fluid className="project__container container">
                <Row>
                    <Col className="col-12 m-auto project__icon">
                        <DesktopComputerIcon className="code-icon" />
                    </Col>
                </Row>
                <Row>
                    <Col className="project__header">
                        <h1 className="mx-auto d-inline-block project__section-title w-100 text-center">My Projects</h1>
                        <p className="project-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
                        facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam fuga dolore.</p>
                    </Col>
                </Row>
                <Row xs={1} md={2} lg={4} className="g-4">
                    
                    <Col className="d-flex flex-column">
                        <Card className="card text-center flex-fill">
                            <Card.Img variant='top' src={cascadePic} />
                            <Card.Title>Cascade Cafe Menu</Card.Title>
                            <Card.Subtitle>Sketch and SCSS</Card.Subtitle>
                            <Card.Text>I completed a CodePen Challenge to design a cafe menu. I designed the website using Sketch. I used color samples from the main picture in my page styling.</Card.Text>
                            <Card.Footer><a href="https://codepen.io/TLanette/pen/JjNjzzW" className="project-link">Cascade Cafe Menu</a></Card.Footer>
                        </Card>
                    </Col>
                    <Col className="d-flex flex-column">
                        <Card className="card text-center flex-fill">
                            <Card.Img variant='top' src={pomodoroPic} />
                            <Card.Title>Pomodoro Clock</Card.Title>
                            <Card.Subtitle>React Hooks</Card.Subtitle>
                            <Card.Text>I completed this project for FreeCodeCamp. My Pomodoro Clock was designed based on specific guidelines (user stories). It was my second project working with ReactJS.</Card.Text>
                            <Card.Footer><a href="https://tlanetterose.github.io/PomodoroClock-TLP/">Pomodoro Clock</a></Card.Footer>
                        </Card>
                    </Col>
                    <Col className="d-flex flex-column">
                        <Card className="card text-center flex-fill">
                            <Card.Img variant='top' src={insurePic} />
                            <Card.Title>Insure Landing Page</Card.Title>
                            <Card.Subtitle>Bootstrap and SCSS</Card.Subtitle>
                            <Card.Text>This is a challenge from Frontend Mentor. It is a one-page reponsive company website.</Card.Text>
                            <Card.Footer>
                                <a href="https://insure-landing-page-tlp.vercel.app/">Insure Landing Page</a>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col className="d-flex flex-column">
                        <Card className="card text-center flex-fill">
                            <Card.Img variant='top' src={pricingPic} />
                            <Card.Title>Pricing Component</Card.Title>
                            <Card.Subtitle>JavaScript</Card.Subtitle>
                            <Card.Text>This is a challenge from Frontend Mentor. I had to build a pricing component with a toggle that switched between annual and monthly prices.</Card.Text>
                            <Card.Footer><a href="https://tlanetterose.github.io/Pricing-Component-w-Toggle-TLP/">Pricing Component</a></Card.Footer>.
                        </Card>
                    </Col>
                </Row>    
            
            </Container>
        </>
    )
}

export default Projects