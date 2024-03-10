import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import { Modal, Tab } from 'react-bootstrap';
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
        <Container className="brand-container">
        <Navbar.Brand id='brand' href='/'><Image src="../src/assets/pit.png" alt="Pitbull Icon" id='pitbull'/>Pit STOP Adopt</Navbar.Brand>
        </Container>
        <Container className="nav-container">
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="navlink" href="/search">Search Dogs</Nav.Link>
              <Nav.Link className="navlink" href="/news">News and Community</Nav.Link>
              {/* <Nav.Link className="navlink" href="/">News and Community</Nav.Link> */}
              <Nav.Link className="navlink" href="/Contact">Adopt</Nav.Link>
              {/* <Nav.Link className="navlink" href="/Donate">Donate</Nav.Link> */}
              

              {Auth.loggedIn() ? (
                <>
                  <Nav.Link as={Link} to='/saved'>
                    See Your Dogs
                  </Nav.Link>
                  <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
                  <CheckoutButton className="navlink"></CheckoutButton>
                </>
                
              ) : (
                <Nav.Link onClick={() => setShowModal(true)}>Login/Sign Up</Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
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