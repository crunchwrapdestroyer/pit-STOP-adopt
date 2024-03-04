import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigation() {
  return (
    <Navbar className="navbar">
        <Container className="brand-container">
        <Navbar.Brand id='brand' href='/'>Pit STOP Adopt</Navbar.Brand>
        </Container>
        <Container className="nav-container">
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link className="navlink" href="/SearchResults">Search Dogs</Nav.Link>
            <Nav.Link className="navlink" href="/News">News and Community</Nav.Link>
            <Nav.Link className="navlink" href="/Adopt">Adopt</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;