import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./login.css"
import { FaFacebookF } from "react-icons/fa";


function Login() {
    return (<>
        <Navbar />
        {/* Login Card  */}
        <div className="container-fluid body">
            <div className="row justify-content-center py-5">
                <div className="col-3-5 rounded-2 overflow-hidden bg-white mb-5 px-0">
                    <div className="bg-primary text-center text-white">
                        Login
                    </div>
                    <div className="row justify-content-center mt-4">
                        <div className="col-9 text-muted"> Mobile or Email<span className="star">*</span>
                            <input className="d-block w-100 log-input" type="text" />
                        </div>
                    </div>
                    <div className="row justify-content-center mt-4">
                        <div className="col-9 text-muted"> Password<span className="star">*</span>
                            <input className="d-block w-100 log-input" type="text" />
                        </div>
                    </div>
                    <div className="row justify-content-center mt-4">
                        <div className="col-9 text-muted">
                            <button className="btn w-100 log-btn">LOGIN</button>                        </div>
                    </div>
                    <div className="row justify-content-center mt-4">
                        <div className="col-9 d-flex">
                            <div className="w-50">
                                <input id="chk" type="checkbox" className="custom-checkbox" />
                                <label className="chk-label" htmlFor="chk"> Remember Me </label></div>
                            <div className="w-50 text-end"><a className="forget-link" href=""> Forgot Your Password?</a></div>
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="separator">
                            <div className="separator-line"></div>
                            <div className="separator-text">or</div>
                            <div className="separator-line"></div>
                        </div>
                    </div>
                    <div className="container text-center mt-5">
                        <button className="facebook-btn">
                            <span className="fb-icon"><FaFacebookF />
                            </span>
                            <span className="separator"></span>
                            Connect With Facebook
                        </button>
                    </div>
                    <div className="row mt-4 justify-content-center">
                        <div className="col-6 d-flex new-user">
                            <div className="w-50 text-muted fw-semibold">New User ?</div>
                            <div className="w-50"><a className="text-muted fw-semibold" href="">Sign Up</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </>);
}

export default Login;