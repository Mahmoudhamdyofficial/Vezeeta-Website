import "./login.css";
import { FaFacebookF } from "react-icons/fa";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../signUp/firebase"; // Firebase config file
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import { doc, getDoc } from "firebase/firestore";
import { LanguageContext } from "../../context/TranslationContext";
import { Strings } from "../../constant/strings";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { dispatch } = useContext(AuthContext);
    const { language, setLanguage } = useContext(LanguageContext);
    console.log(setLanguage);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log('User logged in:', user);
            const userDoc = await getDoc(doc(db, 'User', user.uid));
            const userData = userDoc.exists() ? userDoc.data() : null;

            // Dispatch login action with the user data
            dispatch({ type: 'LOGIN', payload: { ...user, ...userData } });

            alert('Login successful');

            window.location.href = "/";
        } catch (error) {
            console.error("Login Error:", error);
            switch (error.code) {
                case 'auth/wrong-password':
                    setError('Incorrect password.');
                    break;
                case 'auth/user-not-found':
                    setError('No account found with this email.');
                    break;
                case 'auth/invalid-email':
                    setError('Invalid email address.');
                    break;
                default:
                    setError('Failed to login. Please try again.');
            }
        }
    };

    return (
        <>
            <div className="container-fluid body" dir={language == "English" ? "ltr" : "rtl"}>
                <div className="row justify-content-center py-5">
                    <div className="col-3-5 rounded-2 overflow-hidden bg-white mb-5 px-0">
                        <div className="bg-primary text-center text-white">
                            {language == "English" ? Strings.login.log.en : Strings.login.log.ar}
                        </div>
                        <div className="row justify-content-center mt-4">
                            <div className="col-9 text-muted">{language == "English" ? Strings.login.logwith.en : Strings.login.logwith.ar}<span className="star">*</span>
                                <input className="d-block w-100 log-input"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="row justify-content-center mt-4">
                            <div className="col-9 text-muted"> {language == "English" ? Strings.login.pass.en : Strings.login.pass.ar}<span className="star">*</span>
                                <input className="d-block w-100 log-input"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        {error && (
                            <div className="row justify-content-center mt-2">
                                <div className="col-9 text-danger">{error}</div>
                            </div>
                        )}
                        <div className="row justify-content-center mt-4">
                            <div className="col-9 text-muted">
                                <button className="btn w-100 log-btn" onClick={handleLogin}>
                                    {language == "English" ? Strings.login.log.en : Strings.login.log.ar}
                                </button>
                            </div>
                        </div>
                        <div className="row justify-content-center mt-4">
                            <div className="col-9 d-flex">
                                <div className="w-50">
                                    <input id="chk" type="checkbox" className="custom-checkbox" />
                                    <label className="chk-label" htmlFor="chk"> {language == "English" ? Strings.login.remember.en : Strings.login.remember.ar} </label>
                                </div>
                                <div className="w-50 text-end"><a className="forget-link"> {language == "English" ? Strings.login.forget.en : Strings.login.forget.ar}</a></div>
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="separator">
                                <div className="separator-line"></div>
                                <div className="separator-text">{language == "English" ? Strings.login.or.en : Strings.login.or.ar}</div>
                                <div className="separator-line"></div>
                            </div>
                        </div>
                        <div className="container text-center mt-5">
                            <button className="facebook-btn">
                                <span className="fb-icon"><FaFacebookF /></span>
                                <span className="separator"> </span>
                                {language == "English" ? Strings.login.connect.en : Strings.login.connect.ar}
                            </button>
                        </div>
                        <div className="row mt-4 justify-content-center">
                            <div className="col-6 d-flex new-user">
                                <div className="w-50 text-muted fw-semibold">{language == "English" ? Strings.login.new.en : Strings.login.new.ar}</div>
                                <div className="w-50"><a className="text-muted fw-semibold" href="/signUp">{language == "English" ? Strings.login.sign.en : Strings.login.sign.ar}</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
