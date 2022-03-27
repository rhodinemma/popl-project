import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/news" element={<News />} />
          <Route exact path="/weather" element={<Weather />} />
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
