import React from 'react'
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import './Githubcal.css'

const GithubCal = () => {
  return (
    <div className='git-cal'>
    <Row style={{ justifyContent: "center", paddingBottom: "10px"}}>
    <h2>Activity</h2>
    <div className='table'>
    <GitHubCalendar
      username="cyberdev-sec"
      blockSize={15}
      blockMargin={5}
      color="#c084f5"
      fontSize={16}
    />
    </div>
  </Row>
  </div>
  )
}

export default GithubCal
