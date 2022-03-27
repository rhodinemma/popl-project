import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./index.css";

const index = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg={{ color: "#ffffff" }}
      text="dark"
      variant="light"
      className="navigation"
    >
      <Container fluid>
        <Navbar.Brand href="#home">
          <Link to={"/"} className="nav-link">
            <Button variant="info">PoPl Project</Button>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav>
            <Nav>
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="elements">
                  <Nav>
                    <Link to={"/"} className="nav-link active">
                      <b>Home</b>
                    </Link>
                  </Nav>
                  <Nav>
                    <Link to={"/news"} className="nav-link">
                      <b>News</b>
                    </Link>
                  </Nav>
                  <Nav>
                    <Link to={"/weather"} className="nav-link">
                      <b>Weather</b>
                    </Link>
                  </Nav>
                  <Nav>
                    <Link to={"#"} className="nav-link">
                      <b>Team</b>
                    </Link>
                  </Nav>
                </Nav>
              </Navbar.Collapse>
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default index;
