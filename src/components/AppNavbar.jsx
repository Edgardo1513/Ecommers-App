import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import CartsSideBar from './CartsSideBar';
import { useState } from 'react';

const AppNavbar = () => {

  const navigate = useNavigate()

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    const tokenValue = localStorage.getItem("token")

    if( tokenValue){
      setShow(true)
    }else{
      navigate("/login")
    }
  }

    return (
      <>
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to='/'>Ecommerce App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to='/login'>Login</Nav.Link>
              <Nav.Link as={Link} to='/favorites'>Favoritos</Nav.Link>    
              <Nav.Link onClick={handleShow}>Sidebar</Nav.Link>                       
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <CartsSideBar 
        show={ show }
        handleClose={ handleClose }
      />
    </>
    );
};



export default AppNavbar;
