import React from 'react'
import './home.css'
import { Container, Row, Col } from "react-bootstrap";
import image from './../../assets/text-color.png'

const Home = () => {
  return (
    <div className="home-page">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Container>
        <Row>
          <Col>
          <h1>Hello everyone <strong>CyberDev</strong> here!</h1>
          <div className='description'>
          <p>A curiosity driven junior cybersecurity analyst AI enthusiast & web developer</p>
          <p>When it comes to Computer science, knowledge and creativity are what matters the most... </p>
          <p>after problem solving skills of course. Either alone or in  a group, work is work</p>
          </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home