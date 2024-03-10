import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Cancel() {
    return (
        <Container fluid className='processcontainer'>
            <Row>
                <Col>
                    <h1 id='processheader'>Sorry you couldn't donate</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <img id='sad-pit' src='./src/assets/sadpit.jpg' alt='frownpit' className="img-fluid" />
                </Col>
            </Row>
        </Container>
    );
}

export default Cancel;