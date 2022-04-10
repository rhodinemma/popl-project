import React, { useState } from "react";
import axios from "axios";
import { Container, Row, Col, Spinner, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";
import NewsCard from "../../components/NewsCard";
import "./index.css";

const index = () => {
  const [locals, setLocalArticles] = useState([]);
  const [globals, setGlobalArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getLocalArticles = async () => {
    setIsLoading(true);
    const response = await axios.get(
      `https://popl-project.herokuapp.com/localnews`
    );
    setLocalArticles(response.data);
    setIsLoading(false);
    setGlobalArticles([]);
  };
  const getGlobalArticles = async () => {
    setIsLoading(true);
    const response = await axios.get(
      `https://popl-project.herokuapp.com/globalnews`
    );
    setGlobalArticles(response.data);
    setIsLoading(false);
    setLocalArticles([]);
  };

  return (
    <>
      <div className="text-white">
        <Container fluid>
          <Row>
            <center>
              <Col md={8} className="mt-4">
                {isLoading && (
                  <Spinner animation="border" variant="info" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                )}

                <h2 className="display-6 mt-4 title text-dark">
                  <FontAwesomeIcon icon={faNewspaper} /> News Portal
                </h2>
                <br />
                <Col md={4}>
                  <div className="d-grid gap-2">
                    <Button
                      variant="primary"
                      size="lg"
                      onClick={() => getLocalArticles()}
                    >
                      Fetch local news
                    </Button>
                    <Button
                      variant="secondary"
                      size="lg"
                      onClick={() => getGlobalArticles()}
                    >
                      Fetch global news
                    </Button>
                  </div>
                </Col>
                <br />
                {!isLoading ? (
                  <>
                    <div>
                      {globals.map((article) => {
                        return (
                          <>
                            <NewsCard
                              title={article.title}
                              description={article.description}
                              url={article.url}
                              urlToImage={article.urlToImage}
                            />
                            
                          </>
                        );
                      })}
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <h6>Check for local news</h6>
                    </div>
                  </>
                )}
                {!isLoading ? (
                  <>
                    <div>
                      {locals.map((local) => {
                        return (
                          <>
                            <NewsCard
                              title={local.title}
                              description={local.description}
                              url={local.url}
                              urlToImage={local.urlToImage}
                            />
                            
                          </>
                        );
                      })}
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <h6>Check for global news</h6>
                    </div>
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
