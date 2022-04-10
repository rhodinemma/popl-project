import React, { useEffect, useState } from "react";
import moment from "moment";
import { Table, Container, Row, Col, Spinner, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudBolt, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./index.css";

const index = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let latitude = 51;
    let longitude = 0;
    navigator.geolocation.getCurrentPosition(
      (geoPosition) => {
        latitude = geoPosition.coords.latitude;
        longitude = geoPosition.coords.longitude;
        fetchWeatherDetails(latitude, longitude);
      },
      (geoError) => {
        //if use denied access to location then we default.
        fetchWeatherDetails(latitude, longitude);
      }
    );

    const fetchWeatherDetails = async (latitude, longitude) => {
      const response = await fetch(
        `https://popl-project.herokuapp.com/getWeatherInfo/all?lat=${latitude}&lon=${longitude}`,
        {
          method: "GET",
          headers: new Headers({
            Accept: "application/json",
            "Content-Type": "application/json:charset=utf-8",
          }),
        }
      );
      const postData = await response.json();
      console.log(postData);
      setWeatherData(postData);
      setIsLoading(false);
    };
  }, []);

  return (
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

              <h2 className="display-6 mt-4 title">
                <FontAwesomeIcon icon={faCloudBolt} /> Weather Portal
              </h2>
              <br />
              {!isLoading && (
                <>
                  <small>
                    Date today:&nbsp;&nbsp;
                    <b>
                      {moment.unix(weatherData?.current?.dt).format("llll")}
                    </b>
                  </small>
                  <br />
                  <br />

                  <small>
                    Your location (latitude , longitude): &nbsp;&nbsp;
                    <b>
                      {weatherData?.lat} , {weatherData?.lon}
                    </b>
                  </small>
                  <br />
                  <br />
                  <div>
                    <Table striped bordered hover className="text-white">
                      <thead>
                        <tr>
                          <th>Status</th>
                          <th>Temperature</th>
                          <th>Pressure</th>
                          <th>Humidity</th>
                          <th>Cloudiness</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="text-white">
                            {weatherData?.current?.weather[0]?.description}
                          </td>
                          <td className="text-white">
                            {weatherData?.current?.temp} Celcius
                          </td>
                          <td className="text-white">
                            {weatherData?.current?.pressure} hPa
                          </td>
                          <td className="text-white">
                            {weatherData?.current?.humidity}%
                          </td>
                          <td className="text-white">
                            {weatherData?.current?.clouds}%
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>

                  <br />
                  <Button variant="info">
                    Check chances of rain&nbsp;&nbsp;
                    <FontAwesomeIcon icon={faArrowRight} />
                  </Button>
                </>
              )}
            </Col>
          </center>
        </Row>
      </Container>
    </div>
  );
};

export default index;
