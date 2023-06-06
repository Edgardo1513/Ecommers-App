import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const AppNavbar = () => {
    return (
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to='/'>Ecommerce App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to='/login'>Login</Nav.Link>
              <Nav.Link as={Link} to='/favorites'>Favoritos</Nav.Link>    
              <Nav.Link as={Link} >Side bar</Nav.Link>                       
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};



export default AppNavbar;
