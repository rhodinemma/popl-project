import React from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import "./index.css";

const index = () => {
  return (
    <>
      <div className="hero text-white">
      <Container fluid>
        <Row>
          <center>
            <Col md={8} className="mt-4">
              <h2 className="display-6 mt-4 title">Meet the team</h2>
              <br />
              
            </Col>
          </center>
        </Row>
      </Container>
    </div>
    </>
  )
}

export default index