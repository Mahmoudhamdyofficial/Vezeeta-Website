import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Home from "./screens/Home";
import Login from "./screens/login";
import About from "./screens/About";
import Teleconsultation from "./screens/allspecialities/Teleconsultation";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


import { BrowserRouter as Router,Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <Router>
    <Routes>
    <Route path="/" element={<Home />} />

    </Routes>
    </Router>
    </>
  );
}

export default App;
