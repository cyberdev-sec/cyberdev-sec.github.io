import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import './footer.css'

const Footer = () => {
    let date = new Date();
    let year = date.getFullYear();
    return (
      <Container fluid className="footer">
        <Row>
          <Col md="4" className="footer-body">
            <ul className="footer-icons">
              <li className="social-icons">
                <a
                  href="https://github.com/cyberdev249"
                  style={{ color: "black" }}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Cyberdev249"
                  style={{ color: "black" }}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ayakh/"
                  style={{ color: "black" }}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/cyberdev.mp4"
                  style={{ color: "black" }}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
          <Col md="4" className="footer-copywright">
            <h3>Designed and Developed by CyberDev -Aya-</h3>
          </Col>
          <Col md="4" className="footer-copywright">
            <h3>Copyright © {year} CD</h3>
          </Col>
        </Row>
      </Container>
    );
}

export default Footer