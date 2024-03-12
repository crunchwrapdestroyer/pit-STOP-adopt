import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Success() {
    return (
        <Container fluid className='procontainer'>
            
                <Col>
                    <h1>Your payment was successful! Thank you for your donation!</h1>
                    <img src='./public/assets/happypit.jpg' alt='smilepit' className="img-fluid" />
                </Col>
            
        </Container>
    );
}

export default Success;