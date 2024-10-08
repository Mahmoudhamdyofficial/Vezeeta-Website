import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from "./screens/Home";
import Login from "./screens/login";
import About from "./screens/About";
import Teleconsultation from "./screens/allspecialities/Teleconsultation";

function App() {
  return (
    <>
      {/* <Home /> */}
      {/* <Login /> */}
      {/* <About /> */}
      <Teleconsultation />

    </>
  );
}

export default App;
