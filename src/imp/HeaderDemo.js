/*import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import './NavigationStyle.css'
function ColorSchemesExample() {
  return (
    <>
        <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home" id="title">
            <img
              alt=""
              src="https://res.cloudinary.com/dqc90vi99/image/upload/v1696915471/dwfjpwkghl3p6pdbjbk0.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Leo's Bakery
          </Navbar.Brand>
        </Container>
        <Nav.Item>
        <Nav.Link href="/home" id="li">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1" id="li">Products</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="enabled" enabled id="li">
          Blog
        </Nav.Link>
      </Nav.Item>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;*/


import React from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';

export default function ColorSchemesExample() {
  return (
    <>
      <MDBNavbar light bgColor='black'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#' style={{color:'red' , }}>
          <img
              alt=""
              src="https://res.cloudinary.com/dqc90vi99/image/upload/v1696915471/dwfjpwkghl3p6pdbjbk0.png"
              width="75"
              height="65"
              className="d-inline-block align-top"
            />Leo's Bakery
          </MDBNavbarBrand>

        </MDBContainer>
           
      </MDBNavbar>
    </>
  );
} 


/* 
import React from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavItem, NavLink } from 'mdbreact';

function ColorSchemesExample() {
  return (
    <Navbar color="indigo" dark expand="md">
      <NavbarBrand>
        <img src="/path/to/your/image.png" alt="Logo" />
        <strong className="white-text">Your Brand</strong>
      </NavbarBrand>
      <NavbarNav left>
        <NavItem>
          <NavLink to="#">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="#">About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="#">Services</NavLink>
        </NavItem>
      </NavbarNav>
    </Navbar>
  );
}

export default ColorSchemesExample; */