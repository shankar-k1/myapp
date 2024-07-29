import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Profilepic from "../assets/profile.png";
import { FaLinkedin } from "react-icons/fa";

function About() {
  return (
    <section className="about-section">
      <Container>
        <Row>
        <Col md={4}>
          
          <img src={Profilepic} roundedCircle fluid />
        </Col>
          <Col>
          <h5>Hi, I am </h5>
            <p>Shankara</p>
            <h5>An Engineer with profound knowledge in SQL , Java and Linux. I'm exploring the world of clouds 
              and putting myself in the path of new oppurtunities
            </h5>
            <div>
            <a href="https://www.linkedin.com/in/shankara-narayanan-k-986667167/" target="_blank" rel="noopener noreferrer" className="external-link">
            <FaLinkedin /> 
            </a>
            </div>

          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
