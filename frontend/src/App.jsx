import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import LandingPage from "./pages/LandingPage";
import NewsPage from "./pages/NewsPage";
import WeatherPage from "./pages/WeatherPage";
import TeamPage from "./pages/TeamPage";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/news" element={<NewsPage />} />
          <Route exact path="/weather" element={<WeatherPage />} />
          <Route exact path="/team" element={<TeamPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
