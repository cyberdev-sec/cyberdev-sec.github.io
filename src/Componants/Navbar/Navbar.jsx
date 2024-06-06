import React from 'react'
import './navbar.css'
import { CgGitFork } from "react-icons/cg";
import {
  AiFillStar,
} from "react-icons/ai";
import Button from 'react-bootstrap/Button'
import logo_dark from '../../assets/full-logo.png';

const Navbar = () => {
  return (
    <div className="navbar">

        <img src={logo_dark} alt="" className='logo'/>

        <ul>
            <li><h4>Projects</h4></li>
            <li><h4>Resume</h4></li>
            <li><h4>About</h4></li>
            <Button
                href="https://github.com/cyberdev249"
                target="_blank"
                className="button"
              >
                <AiFillStar style={{fontSize: "1.5em" }} />{""}
                <CgGitFork style={{fontSize: "1.5em" }} />
                
            </Button>
        </ul>

    </div>
  )
}

export default Navbar