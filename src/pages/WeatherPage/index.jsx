import React, { useEffect, useState } from "react";
import moment from "moment";
import { Table, Container, Row, Col, Spinner } from "react-bootstrap";
import "./index.css";

const index = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  {
    /*
  const [cityWeatherData, setCityWeatherData] = useState([]);
  const [isSearch, setIsSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
    */
  }

  {
    /*const handleChange = async (event) => {
    setSearchTerm(event.target.value);
    if (searchTerm.length >= 4) {
      const response = await fetch(
        `http://localhost:5000/getWeatherInfo/city?city=${searchTerm}`,
        {
          method: "GET",
          headers: new Headers({
            Accept: "application/json",
            "Content-Type": "application/json:charset=utf-8",
          }),
        }
      );
      const postData = await response.json();
      setCityWeatherData(postData);
      setIsLoading(false);
      setIsSearch(true);
    } else {
      setIsLoading(false);
      setIsSearch(false);
    }
  };*/
  }

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
        `http://localhost:5000/getWeatherInfo/all?lat=${latitude}&lon=${longitude}`,
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

  {
    /*const showSearchResults = () => {
    if (isSearch) {
      return (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>City</th>
              <th>Temperature</th>
              <th>Pressure</th>
              <th>Humidity</th>
              <th>Cloudiness</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{cityWeatherData?.name}</td>
              <td>{cityWeatherData?.main?.temp} Celcius</td>
              <td>{cityWeatherData?.main?.pressure} hPa</td>
              <td>{cityWeatherData?.main?.humidity}%</td>
              <td>{cityWeatherData?.clouds}%</td>
            </tr>
          </tbody>
        </Table>
      );
    }
  };*/
  }

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

              <h2 className="display-6 mt-4 title">Weather Portal</h2>
              <br />
              {/*<input
                type="text"
                className="form-control"
                placeholder="Search by City Name"
                value={searchTerm}
                onChange={handleChange}
              />
              <br />*/}
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
                    Current location (latitude , longitude): &nbsp;&nbsp;
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
                </>
              )}
              {/*{isSearch && showSearchResults()}*/}
            </Col>
          </center>
        </Row>
      </Container>
    </div>
  );
};

export default index;
