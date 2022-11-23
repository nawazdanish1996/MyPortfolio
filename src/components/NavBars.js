import React, {useEffect} from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import { Nav, Navbar } from 'react-bootstrap';

function NavBars() {

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