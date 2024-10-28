import { Form, Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from './firebase';
import { setDoc, doc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "./firebase"; // Import the Firebase storage instance
import './DoctorSignup.css';

export default function DoctorSignup() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [gender, setGender] = useState('');
    const [specialization, setspecialization] = useState('');
    const [clinicLocation, setclinicLocation] = useState('');
    const [Cost, setCost] = useState('');
    const [qualifications, setqualifications] = useState('');
    const [role, setrole] = useState('doctor');
    const [image, setImage] = useState(null);
    const [error, setError] = useState('');
     console.log(setrole);
    const handleImageChange = (e) => {
        if (e.target.files[0]) {
          setImage(e.target.files[0]);
        }
      };
      const handleImageUpload = () => {
        if (image) {
          const storageRef = ref(storage, `images/${image.name}`);
          
          // Upload the file to Firebase Storage
          uploadBytes(storageRef, image).then((snapshot) => {
            // Get the image URL after upload is successful
            getDownloadURL(snapshot.ref).then((url) => {
              console.log("Uploaded image URL:", url);
            });
          }).catch((error) => {
            console.error("Error uploading image:", error);
          });
        }
      };
    
    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const doctor = userCredential.user;
            let imageUrl = '';
            if (image) {
                const storageRef = ref(storage, `images/${image.name}`);
                const snapshot = await uploadBytes(storageRef, image);
                imageUrl = await getDownloadURL(snapshot.ref);
            }
            await setDoc(doc(db, 'doctor', doctor.uid), {
                name: name,
                phone: phone,
                email: email,
                gender: gender,
                specialization: specialization,
                clinicLocation: clinicLocation,
                Cost:Cost,
                qualifications:qualifications,
                imageUrl: imageUrl ,
                uid: doctor.uid
            });
            await setDoc(doc(db, 'Authorized', doctor.uid), {
              
                email: email,
                password:password,
                 role: role,
                 uid: doctor.uid
              
            });
            console.log('User registered and added to Firestore:', doctor);
             alert('You have signed up successfully!');

             setEmail('');
             setPassword('');
             setName('');
             setPhone('');
             setGender('');
             setspecialization('');
             setclinicLocation('');
             setCost('');
             setqualifications('');
             setImage(null);
             setError('');
        } catch (error) {
            console.error("Error during signup:", error);
            setError(error.message);
        }
        

    };
    
    return (
        <Container className="container">
            <Row className="justify-content-md-center pt-5">
                <Col md={6}>
                    <div className="sign-up-form">
                        <p className="signUpText text-center">Sign Up as Doctors</p>

                        <br />

                        <div className="divider"><span></span></div>

                        <Form onSubmit={handleSignup}>
                            <div className="formName">
                                <label htmlFor="formName">Name<span className="star">*</span></label>
                                <input className='formControl' type="text" id="formName" placeholder="Your Full Name" value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                            <br />

                            <div className="formName">
                                <label htmlFor="formPhone">Mobile Number <span className="star">*</span></label>
                                <input className='formControl' type="text" id="formPhone" placeholder="Your Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                            </div>
                            <br />

                            <div className="formName">
                                <label htmlFor="formEmail">E-mail Address<span className="star">*</span></label>
                                <input className='formControlEmail' type="email" id="formEmail" placeholder="example@domain.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <br />
                            <div className="formName">
                                <Form.Label>Password <span className="star">*</span></Form.Label>
                                <input className="formControl" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <br />

                            <div className="formName">
                                <Form.Label>Gender <span className="star">*</span></Form.Label>
                                <div>
                                    <Form.Check
                                        inline
                                        type="radio"
                                        label="Female"
                                        id="Female"
                                        name="gender"
                                        value="Female"
                                        onChange={(e) => setGender(e.target.value)}
                                        checked={gender === 'Female'}
                                    />
                                    <Form.Check
                                        inline
                                        type="radio"
                                        label="Male"
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
                                <Form.Label>clinic location <span className="star">*</span></Form.Label>
                                <input className="formControl" type="clinic" placeholder="clinic location" value={clinicLocation} onChange={(e) => setclinicLocation(e.target.value)} />
                            </div>
                            <br />
                            <div className="formName">
                                <Form.Label>Department <span className="star">*</span></Form.Label>
                                <input className="formControl" type="Department" placeholder="Department" value={specialization} onChange={(e) => setspecialization(e.target.value)} />
                            </div>
                            <br />
                            <div className="formName">
                                <Form.Label>Cost <span className="star">*</span></Form.Label>
                                <input className="formControl" type="number" placeholder="Cost" value={Cost} onChange={(e) => setCost(e.target.value)} />
                            </div>
                            <br />
                            <div className="formName">
                                <Form.Label>Scientific qualifications  <span className="star">*</span></Form.Label>
                                <input className="formControl" type="text" placeholder=" Scientific qualifications " value={qualifications} onChange={(e) => setqualifications(e.target.value)} />
                            </div>
                            <br />
                            <div className="formName">
                                    <input className='' type="file" onChange={handleImageChange} />
                            </div>
                            <br/>
                            {error && <p className="text-danger">{error}</p>}
                            <br/>
                            <div className="buttonSub">
                                <button onClick={handleImageUpload} className="Subscribe" type="submit">
                                    Subscribe now
                                </button>
                            </div>
                            <br />

                            <div className="divider"><span></span></div>

                            <p className="text-center terms">
                                By signing up you agree to our <a href="#">Terms Of Use</a>
                            </p>
                            <p className="text-center">
                                Already Registered? <a href="/login">Login</a>
                            </p>
                            <br />
                              
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
