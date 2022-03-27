//declaring our dependencies here
const express = require("express");
const axios = require("axios");
const app = express();
const port = 5000;

const API_KEY = "ec18ccf09b6371544e9dee1787c0514e";

//declaring our weather API here
const URL = "https://api.openweathermap.org/data/2.5/";

//allow our frontend to connect with backend(CORS policy)
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

//route to fetch weather details of device location
app.get("/getWeatherInfo/all/", async (req, res) => {
  const lat = req.query.lat;
  const lon = req.query.lon;
  let result;
  try {
    result = await axios.get(
      URL +
        "onecall?lat=" +
        lat +
        "&lon=" +
        lon +
        "&appid=" +
        API_KEY +
        "&units=metric"
    );
    res.json(result.data);
  } catch (err) {
    console.error(`Trouble fetching weather due to ${err.message}`);
  }
});

//route to fetch weather details of an input location
app.get("/getWeatherInfo/city/", async (req, res) => {
  const city = req.query.city;
  let result;
  try {
    result = await axios.get(
      URL + "weather?q=" + city + "&appid=" + API_KEY + "&units=metric"
    );
    res.json(result.data);
  } catch (err) {
    console.error(`Trouble fetching weather due to ${err.message}`);
  }
});

//running our backend service here
app.listen(port, () => {
  console.log(`Backend service running at http://localhost:${port}`);
});
