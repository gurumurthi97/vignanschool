import "./App.css";
import Home from "./pages/Home";
// import Footer from "./pages/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Gallery from "./pages/Gallery";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/gallery" element={<Gallery />} />
          {/* <Route path="/footer" element={<Footer />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
