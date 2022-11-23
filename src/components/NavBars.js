import React, {useEffect, useState} from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import { Nav, Navbar } from 'react-bootstrap';
import Dark from "../images/dark theme icon/moon.png";
import Light from "../images/dark theme icon/sun.png";

function NavBars() {
    const [mode, setMode] = useState(Light);
    const Mode = () =>{
        if(mode === Light){
            setMode(Dark);
            document.body.style.background = "#fff";
            document.body.style.color = "black";
        }else{
            setMode(Light);
            document.body.style.background = "#2f3542";
            document.body.style.color  = "#fff";
        }
    }

    useEffect(()=>{
        Aos.init({duration: 2000});
      },[])

  return (
    <div id='navbarss'>
        <div data-aos="fade-right">
            <Navbar bg="dark" variant="dark"
            sticky="top" expand="md" collapseOnSelect>
            <Navbar.Brand>
                <a href="index.html">
                    <i className="fa-solid fa-code text-primary fs-3 ms-5 me-4"></i>
                </a>
                <img className='ms-5' onClick={Mode} src={mode} alt="Mode" style={{width: "30px", cursor: "pointer"}} />
            </Navbar.Brand>

            <Navbar.Toggle className="coloring" />
            <Navbar.Collapse>
                <Nav className='ms-auto me-5'>
                    <Nav.Link href="#Home">Home</Nav.Link>
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
    </div>
  )
}

export default NavBars