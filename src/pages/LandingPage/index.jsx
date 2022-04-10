import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./index.css";

const index = () => {
  return (
    <>
      <div className="hero">
        <div className="content">
          <center className="text-white">
            <br />
            <br />
            <h1 className="display-1 text_shadows">News & Weather Portal</h1>
            <br />
            <h4>Our portal has the latest local and global news</h4>
            <br />
            <h4>We have weather updates for you as well.</h4>

            <Container fluid>
              <Row>
                <center>
                  <Col md={4} className="mt-4">
                    <div className="d-grid gap-2">
                      <Button variant="primary">
                        <Link
                          to={"/news"}
                          style={{ textDecoration: "none", color: "white" }}
                          className="btn btn-lg"
                        >
                          See news
                        </Link>
                      </Button>{" "}
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <Button variant="secondary">
                        <Link
                          to={"/weather"}
                          style={{ textDecoration: "none", color: "white" }}
                          className="btn btn-lg"
                        >
                          Get Weather
                        </Link>
                      </Button>
                    </div>
                  </Col>
                </center>
              </Row>
            </Container>
          </center>
        </div>
      </div>
    </>
  );
};

export default index;
