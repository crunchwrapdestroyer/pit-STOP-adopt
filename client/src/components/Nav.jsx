import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import { Modal, NavDropdown, Tab } from 'react-bootstrap';
import { useState } from 'react';
import SignUpForm from './SignupForm';
import LoginForm from './LoginForm';
import { from } from '@apollo/client';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import CheckoutButton from './CheckoutButton';

import Auth from '../utils/auth';


function Navigation() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Navbar expand="lg" className="navbar">
        <Navbar.Brand id='brand' href="/">Pit STOP Adopt</Navbar.Brand>
        <Navbar.Toggle className="navtoggle" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown.Item className="navlink" href="/search">Search Dogs</NavDropdown.Item>
            <NavDropdown.Item className="navlink" href="/news">News and Community</NavDropdown.Item>
            <NavDropdown.Item onClick={() => setShowModal(true)} className="navlink" >Login/Sign Up</NavDropdown.Item>
          </Nav>
        </Navbar.Collapse>
    </Navbar>

      <Modal
        size='sm'
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby='signup-modal'>
        {/* tab container to do either signup or login component */}
        <Tab.Container defaultActiveKey='login'>
          <Modal.Header closeButton>
            <Modal.Title id='signup-modal'>
              <Nav variant='pills'>
                <Nav.Item>
                  <Nav.Link eventKey='login'>Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='signup'>Sign Up</Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey='login'>
                <LoginForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
              <Tab.Pane eventKey='signup'>
                <SignUpForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
    </>

  );
}

export default Navigation;