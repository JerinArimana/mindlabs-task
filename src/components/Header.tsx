import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';;
import Image from 'next/image';

import brandLogo from '../../public/images/flock-desk-logo.svg';
const Header = () => {
  return (
    <Navbar expand="lg" className="">
      <Container className='custom-container'>
        <Navbar.Brand href="#home">
            <Image src={brandLogo} alt="flock desk logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto flex gap-8 text-sm font-bold uppercase " >
            <Nav.Link href="#home" className=''>Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#home">Features</Nav.Link>
            <Nav.Link href="#link">Pricing</Nav.Link>
            <Nav.Link href="#home">Integrations</Nav.Link>
            <Nav.Link href="#link">Resources</Nav.Link>
            
            
          </Nav>
          <button>Sign In</button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header;