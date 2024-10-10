import { Form, Container, Row, Col } from 'react-bootstrap';
import './SignUp.css';  
import { ImFacebook2 } from "react-icons/im";

export default function SignUp() {
  return (
   <>
   <Container className=" container">
      <Row className="  justify-content-md-center pt-5 ">
        <Col md={6}>
          <div className="sign-up-form">

            <p className="signUpText text-center">Sign Up</p>

            <div className=" d-flex justify-content-center mb-3">
              <div className="d-flex align-items-center btn-facebook  ">
                  <ImFacebook2 className="me-2" />
                  <p className="m-0">Connect With Facebook</p>
              </div>
            </div>
           

            <div className="divider">
              <span></span>

            </div>

            <Form>
              <div className="formName" >
                  <label htmlFor="formName"> Name</label>
                  <input className='formControl' type="text" id="formName" placeholder="Your Full Name" />
              </div>

                 <br/>
                 
              <div className="formName" >
                  <label htmlFor="formPhone">Mobile Number</label>
                  <input className='formControl' type="text" id="formPhone" placeholder="Your Phone" />
              </div>
              <br/>

              <div className="formName" >
                  <label  htmlFor="formName">E-mail Address</label>
                  <input className='formControlEmail' type="text" id="formName" placeholder="expample@domain.com" />
              </div>

              <br/>
             
             
                <div  className="formName">
                    <div >
                      <Form.Label>Gender</Form.Label>
                    </div>
                    <div>
                      <Form.Check inline type="radio" label="Female" id='Female' name="gender" />
                      <Form.Check inline type="radio" label="Male" id='Male' name="gender" />
                    </div>
                </div>

          <div className="formName">
                <Form.Label className="form-label">Birth Date</Form.Label>
                <input className="formControl" type="date" />

          </div>
          <br/>
             <div className="formName" > 
                 <Form.Label>Password</Form.Label>
                <input className="formControl" type="password" placeholder="Password" />
             </div>
            
            <br/>
                <div className="formName">
                <Form.Check label="Add Insurance" type="switch"  />
 
                </div>
                <br/>
                <div className="buttonSub  ">
                    <button className="Subscribe " type="submit">
                     Subscribe now
                    </button>

                </div>
              <br/>
             <div className="divider">
              <span></span>

            </div>
              <p className="text-center terms">
                By signing up you agree to our <a href="#terms">Terms Of Use</a>
              </p>

              <p className="text-center">
                Already Registered? <a href="#login">Login</a>
              </p>
              <br/>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
   </>
  )
}
