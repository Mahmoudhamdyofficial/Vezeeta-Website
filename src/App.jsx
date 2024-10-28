import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Home from "./screens/Home/Home";
import Login from "./screens/login/login";
import About from "./screens/About";
import SignUp from "./screens/signUp/signUp";
import Search from "./screens/search/search";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Teleconsultation from "./screens/allspecialities/Teleconsultation";
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";
import DoctorSignup from "./screens/DoctorSignup/DoctorSignup";
import DoctorInfo from "./screens/doctorInfo/doctorInfo";
import Profile from "./screens/Profile/Profile";

function App() {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);
  return (
    <>
    <Router>
    <Navbar />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/about" element={<About />} />
    <Route path="/search" element={<Search />} />
    <Route path="/Signup" element={<SignUp />} />
    <Route path="/teleconsultation" element={<Teleconsultation />} />
    <Route path="/Profile" element={<Profile />} />
    <Route path="/DoctorSignup" element={<DoctorSignup />} />
    <Route path="/doctor/:id" element={<DoctorInfo/>} />

    </Routes>
    <Footer/>
    </Router>

    </>
  );
}

export default App;
