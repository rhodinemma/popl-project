import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./index.css";

const index = ({ title, description, url, urlToImage }) => {
  return (
    <>
      <Container className="text-dark">
        <Row>
          <Col md={4}>
            <Image
              src={urlToImage}
              alt={url}
              width={260}
              className="rounded"
              fluid
            />
          </Col>
          <Col md={8}>
            <h6>
              <b>{title}</b>
            </h6>
            <small>{description}</small>
            <br />
            <br />
            <Button variant="info">
              <a
                href={url}
                style={{ textDecoration: "none", color: "white" }}
                className="btn"
                target="_blank"
              >
                Read full story <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </Button>
          </Col>
          <br />
          <hr className="mt-3" />
        </Row>
      </Container>
      <br />
    </>
  );
};

export default index;
