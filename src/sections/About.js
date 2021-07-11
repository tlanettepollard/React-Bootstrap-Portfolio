import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import jumbotronPic from '../images/blackwomancodingsmall.jpg';
import '../style/App.css';

const About = () => {
    return (
        <>
            <Container fluid className="container">
                <Jumbotron fluid className="mt-5">
                    <Row>
                        <Col className="about-info col-12 col-md-6 p-5">
                            <h1 className="jumbotron-heading">Who am I?</h1>
                            <p className="jumbotron-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer libero tellus, lacinia et ornare sit amet, tincidunt vitae arcu. Vivamus fermentum consequat mi consectetur dapibus. Donec nec ante fermentum, congue mauris porta, molestie lectus. Quisque nec interdum ex. Integer facilisis elit ante, ut consequat mi elementum non. Duis mattis malesuada lorem, vitae auctor lectus hendrerit sed. </p>
                        </Col>
                   
                        <Col>
                            <Image src={jumbotronPic} fluid className="header-pic mx-auto my-auto p-5 d-block col-12 col-md-6" />
                        </Col>
                     </Row>
                </Jumbotron>
            </Container>
        </>
    );
};


export default About