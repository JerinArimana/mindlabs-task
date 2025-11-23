import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "next/image";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import brandLogo from "../../public/images/flock-desk-logo.svg";

const Header = ({ headerMenu }: any) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <header>
      <Navbar expand="lg" className="header">
        <Container className="custom-container">
          <Navbar.Brand href="#home" className="p-0">
            <Image src={brandLogo} alt="flock desk logo" />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={handleShow}
          />
          <Offcanvas
            show={show}
            onHide={handleClose}
            responsive="lg"
            className="flex-1"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>
                <Image src={brandLogo} alt="flock desk logo" />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="m-auto flex gap-1 lg:gap-8 text-sm font-bold uppercase header__menu">
                {headerMenu.map((nav: any) => (
                  <Nav.Link id={nav.id} href={nav.link} className="">
                    {nav.nav}
                  </Nav.Link>
                ))}
              </Nav>
              <button className="header-custom-btn">Sign In</button>
            </Offcanvas.Body>
          </Offcanvas>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
