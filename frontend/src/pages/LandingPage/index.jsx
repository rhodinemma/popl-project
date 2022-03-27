import React from "react";
import Button from "react-bootstrap/Button";
import "./index.css";

const index = () => {
  return (
    <>
      <div className="hero">
        <div className="content">
          <center className="text-white">
            <br />
            <br />
            <h1 className="display-2">News & Weather Portal</h1>
            <br />
            <h3>Our portal has the latest local and global news</h3>
            <br />
            <h3>We have weather updates for you as well.</h3>
            <div className="mb-2 mt-4">
              <Button variant="primary" size="lg">
                See News
              </Button>{" "}
              <Button variant="secondary" size="lg">
                Get Weather
              </Button>
            </div>
          </center>
        </div>
      </div>
    </>
  );
};

export default index;
