import { Form, Container, Row, Col } from 'react-bootstrap';
import { useContext, useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from './firebase'; // Import db and auth from firebase.js
import { setDoc, doc } from "firebase/firestore";

import './SignUp.css';
import { ImFacebook2 } from "react-icons/im";
import { LanguageContext } from '../../context/TranslationContext';
import { Strings } from '../../constant/strings';

export default function SignUp() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [error, setError] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await setDoc(doc(db, 'User', user.uid), {
        name: name,
        phone: phone,
        email: email,
        gender: gender,
        birthDate: birthDate,
        uid: user.uid
      });
      console.log('User registered and added to Firestore:', user);
      alert('You have signed up successfully!');
      window.location.href = "/login";
    } catch (error) {
      console.error("Error during signup:", error);
      setError(error.message);
    }
  };
  const { language, setLanguage } = useContext(LanguageContext);
  console.log(setLanguage);
  return (
    <Container className="container" dir={language == "English" ? "ltr" : "rtl"}>
      <Row className="justify-content-md-center pt-5">
        <Col md={6}>
          <div className="sign-up-form">
            <p className="signUpText text-center">{language == "English" ? Strings.signup.sign.en : Strings.signup.sign.ar}</p>

            <div className="d-flex justify-content-center mb-3">
              <div className="d-flex align-items-center btn-facebook">
                <ImFacebook2 className="mx-2" />
                <p className="m-0">{language == "English" ? Strings.signup.connect.en : Strings.signup.connect.ar}</p>
              </div>
            </div>

            <div className="divider"><span></span></div>

            <Form onSubmit={handleSignup}>
              <div className="formName">
                <label htmlFor="formName">{language == "English" ? Strings.signup.name.en : Strings.signup.name.ar}<span className="star">*</span></label>
                <input className='formControl' type="text" id="formName" placeholder={language == "English" ? Strings.signup.nameplace.en : Strings.signup.nameplace.ar} value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <br />

              <div className="formName">
                <label htmlFor="formPhone">{language == "English" ? Strings.signup.mobile.en : Strings.signup.mobile.ar} <span className="star">*</span></label>
                <input className='formControl' type="text" id="formPhone" placeholder={language == "English" ? Strings.signup.mobileplace.en : Strings.signup.mobileplace.ar} value={phone} onChange={(e) => setPhone(e.target.value)} />
              </div>
              <br />

              <div className="formName">
                <label htmlFor="formEmail">{language == "English" ? Strings.signup.email.en : Strings.signup.email.ar}<span className="star">*</span></label>
                <input className='formControlEmail' type="email" id="formEmail" placeholder="example@domain.com" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <br />

              <div className="formName">
                <Form.Label>{language == "English" ? Strings.signup.gender.en : Strings.signup.gender.ar} <span className="star">*</span></Form.Label>
                <div>
                  <Form.Check
                    inline
                    type="radio"
                    label={language == "English" ? Strings.signup.female.en : Strings.signup.female.ar}
                    id="Female"
                    name="gender"
                    value="Female"
                    onChange={(e) => setGender(e.target.value)}
                    checked={gender === 'Female'}
                  />
                  <Form.Check
                    inline
                    type="radio"
                    label={language == "English" ? Strings.signup.male.en : Strings.signup.male.ar}
                    id="Male"
                    name="gender"
                    value="Male"
                    onChange={(e) => setGender(e.target.value)}
                    checked={gender === 'Male'}
                  />
                </div>
              </div>
              <br />

              <div className="formName">
                <Form.Label>{language == "English" ? Strings.signup.bdate.en : Strings.signup.bdate.ar}<span className="star">*</span></Form.Label>
                <input className="formControl" type="date" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} />
              </div>
              <br />

              <div className="formName">
                <Form.Label>{language == "English" ? Strings.signup.pass.en : Strings.signup.pass.ar}<span className="star">*</span></Form.Label>
                <input className="formControl" type="password" placeholder={language == "English" ? Strings.signup.pass.en : Strings.signup.pass.ar} value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <br />

              {error && <p className="text-danger">{error}</p>}

              <div className="buttonSub">
                <button className="Subscribe" type="submit">
                  {language == "English" ? Strings.signup.subscribe.en : Strings.signup.subscribe.ar}
                </button>
              </div>
              <br />

              <div className="divider"><span></span></div>

              <p className="text-center terms">
                {language == "English" ? Strings.signup.agree.en : Strings.signup.agree.ar}<a href="#">{language == "English" ? Strings.signup.terms.en : Strings.signup.terms.ar}</a>
              </p>
              <p className="text-center">
                {language == "English" ? Strings.signup.already.en : Strings.signup.already.ar} <a href="/login">{language == "English" ? Strings.signup.log.en : Strings.signup.log.ar}</a>
              </p>
              <br />
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
