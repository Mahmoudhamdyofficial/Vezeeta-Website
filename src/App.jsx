import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Home from "./screens/Home";
import Login from "./screens/login";
import About from "./screens/About";
import Teleconsultation from "./screens/allspecialities/Teleconsultation";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/teleconsultation" element={<Teleconsultation />} />
        {/* Add other routes here */}
      </Routes>
    </main>
  );
}

export default App;
