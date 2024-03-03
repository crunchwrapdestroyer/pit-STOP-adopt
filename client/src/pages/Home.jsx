import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function Home() {
    return (
        <Container className='hero'>
            <Col>
              <img src='./src/assets/hero1.jpg' alt='Hero1' id='hero1' />
              <Container className='background-container'></Container>
              <img src='./src/assets/hero2.jpg' alt='Hero2' id='hero2' />
            </Col>

        </Container>
    );
}