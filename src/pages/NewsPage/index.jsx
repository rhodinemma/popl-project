import React, { useState } from "react";
import { getArticles } from "../../api";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import "./index.css";

const index = () => {
  const [articles, setArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearch, setIsSearch] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleChange = async (event) => {
    setSearchTerm(event.target.value);
    if (searchTerm.length >= 4) {
      const response = await getArticles(searchTerm);
      console.log(response);
      setArticles(response);
      setIsLoading(false);
      setIsSearch(true);
    } else {
      setIsLoading(false);
      setIsSearch(false);
    }
  };

  return (
    <>
      <div className="hero text-white">
        <Container fluid>
          <Row>
            <center>
              <Col md={8} className="mt-4">
                {isLoading && (
                  <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                )}

                <h2 className="display-6 mt-4 title">News Portal</h2>
                <br />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search topic"
                  value={searchTerm}
                  onChange={handleChange}
                />
                <br />
                {!isSearch && (
                  <>
                    <h2>{articles?.status?.content}</h2>
                  </>
                )}
              </Col>
            </center>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default index;
