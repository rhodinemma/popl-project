import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Spinner, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";
import NewsCard from "../../components/NewsCard";
import "./index.css";

const index = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=uganda&apiKey=6d7f09e1de534e21834fa5de3869404b`
      );
      setArticles(response.data.articles);
      setIsLoading(false);
      console.log(response);
    };
    getArticles();
  }, []);
  return (
    <>
      <div className="text-white">
        <Container fluid>
          <Row>
            <center>
              <Col md={8} className="mt-4">
                {isLoading && (
                  <>
                    <Spinner animation="border" variant="info" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </Spinner>
                  </>
                )}

                <h2 className="display-6 mt-4 title text-dark">
                  <FontAwesomeIcon icon={faNewspaper} /> News Portal
                </h2>
                <br />
                <div className="d-grid gap-2">
                  <Button variant="primary" size="lg">
                    Fetch local news
                  </Button>
                  <Button variant="secondary" size="lg">
                    Fetch global news
                  </Button>
                </div>
                <br />
                {!isLoading && (
                  <>
                    <div>
                      {articles.map((article) => {
                        return (
                          <>
                            <NewsCard
                              title={article.title}
                              description={article.description}
                              url={article.url}
                              urlToImage={article.urlToImage}
                            />
                            <br />
                            <br />
                            <br />
                          </>
                        );
                      })}
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
