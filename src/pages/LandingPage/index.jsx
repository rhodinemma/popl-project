import React from "react";
import Button from "react-bootstrap/Button";
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
            <div className="mb-2 mt-4">
              <Button variant="primary" size="lg">
                <Link
                  to={"/news"}
                  style={{ textDecoration: "none", color: "white" }}
                  className="btn btn-lg"
                >
                  See news
                </Link>
              </Button>{" "}
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Button variant="secondary" size="lg">
                <Link
                  to={"/weather"}
                  style={{ textDecoration: "none", color: "white" }}
                  className="btn btn-lg"
                >
                  Get Weather
                </Link>
              </Button>
            </div>
          </center>
        </div>
      </div>
    </>
  );
};

export default index;
