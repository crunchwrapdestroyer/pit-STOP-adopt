import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

function Footer() {
    return (
      <Container fluid className='footer'>
        <Nav >
        <Nav.Link className='footerlinks' href='/#about' >About</Nav.Link>
        <Nav.Link className='footerlinks' href='/#about'>Contact Us</Nav.Link>
        <Nav.Link className='footerlinks' >Terms of Service</Nav.Link>
      </Nav>
      </Container>
    );
  }
  
  export default Footer;