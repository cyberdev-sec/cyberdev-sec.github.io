import React from 'react'
import './home.css'
import GithubCal from './GithubCal';
import { Container, Row, Col } from "react-bootstrap";
import homePic from './../../assets/text-color.png'

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

  <div className='home-componants'>
      <div className='description'>
          <h1>Hello everyone <strong>CyberDev</strong> here!</h1>
          <p className='para'>A curiosity driven junior cybersecurity analyst AI enthusiast & web developer</p>
          <p className='para'>When it comes to Computer science, knowledge and creativity are what matters the most... </p>
          <p className='para'>after problem solving skills of course. Either alone or in  a group, work is work</p>
      </div>
      <div className='home-image'>
              <img
                src={homePic}
                alt="home pic"
                style={{ maxHeight: "450px" }}
              />
      </div>
  </div>
        <GithubCal />

    </div>
          
  )
}

export default Home