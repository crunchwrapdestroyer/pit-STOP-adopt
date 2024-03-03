import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

function Footer() {
    return (
      <Container className='footer'>
        <Nav >
        <Nav.Link className='footerlinks' href='/about'>About Us</Nav.Link>
        <Nav.Link className='footerlinks' href='/contact'>Contact Us</Nav.Link>
        <Nav.Link className='footerlinks' href='/terms'>Terms of Service</Nav.Link>
      </Nav>
      </Container>
    );
  }
  
  export default Footer;