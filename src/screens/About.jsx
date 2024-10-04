import Navbar from "../components/Navbar";
import { Dropdown } from 'react-bootstrap';
import doctors from "../assets/doctors.png"
import Footer from "../components/Footer";
import { VscSearch } from "react-icons/vsc";
import { IoLocationOutline } from "react-icons/io5";
import { RiUmbrellaLine } from "react-icons/ri";
import { FaUserDoctor } from "react-icons/fa6";




function About() {
    return (<>
        <Navbar />
        <div className="pb-3"
            style={{ backgroundColor: 'rgb(238, 236, 236)' }}
        >
            <div className="container pt-4">
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <h5>Book now with the best Doctor</h5>
                        <p>Book online or call 📞 16676</p>
                        <p>15000 Doctors - 9000 Professors and Consultants - More than 40 Specialties</p>
                    </div>
                    <div className="col-md-6 col-sm-12 d-flex align-bottom justify-content-center ">
                        <img src={doctors} alt="" />
                    </div>
                </div>
                <div className="row">
                    <div className="container text-center">
                        <div className=" row row-cols-2 row-cols-lg-6 g-2 g-lg-3">
                            <div className="col bg-white rounded-start-3 border-end">
                                <Dropdown>
                                    <Dropdown.Toggle variant="none" id="dropdownMenuButton1" className="w-100">
                                        <p className="text-secondary text-start mb-0">select a speciality</p>
                                        <p className="d-inline text-primary"><FaUserDoctor fontSize={"15"} /> choose speciality</p>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu align="end">
                                        <Dropdown.Item href="https://www.facebook.com" target="_blank" className="text-primary">
                                            Action
                                        </Dropdown.Item>
                                        <Dropdown.Item className="text-primary" href="#">Another action</Dropdown.Item>
                                        <Dropdown.Item className="text-primary" href="#">Something else here</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <div className="col bg-white border-end">
                                <Dropdown>
                                    <Dropdown.Toggle variant="none" id="dropdownMenuButton1" className="w-100">
                                        <p className="text-secondary text-start mb-0">in this City</p>
                                        <i className="fa-solid fa-location-dot text-primary"></i>
                                        <p className="d-inline text-primary"> <IoLocationOutline fontSize={"18"} /> choose city</p>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu align="end">
                                        <Dropdown.Item className="text-primary" href="#">Action</Dropdown.Item>
                                        <Dropdown.Item className="text-primary" href="#">Another action</Dropdown.Item>
                                        <Dropdown.Item className="text-primary" href="#">Something else here</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>

                            <div className="col bg-white border-end">
                                <Dropdown>
                                    <Dropdown.Toggle variant="none" id="dropdownMenuButton2" className="w-100">
                                        <p className="text-secondary text-start mb-0">in this area</p>
                                        <i className="fa-solid fa-location-dot text-primary"></i>
                                        <p className="d-inline text-primary"><IoLocationOutline fontSize={"18"} /> choose area</p>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu align="end">
                                        <Dropdown.Item className="text-primary" href="#">Action</Dropdown.Item>
                                        <Dropdown.Item className="text-primary" href="#">Another action</Dropdown.Item>
                                        <Dropdown.Item className="text-primary" href="#">Something else here</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>

                            <div className="col bg-white border-end">
                                <Dropdown>
                                    <Dropdown.Toggle variant="none" id="dropdownMenuButton3" className="w-100">
                                        <p className="text-secondary text-start mb-0">My insurance is</p>
                                        <i className="fa-solid fa-umbrella text-primary"></i>
                                        <p className="d-inline text-primary"><RiUmbrellaLine fontSize={"18"} /> choose insurance</p>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu align="end">
                                        <Dropdown.Item className="text-primary" href="#">Action</Dropdown.Item>
                                        <Dropdown.Item className="text-primary" href="#">Another action</Dropdown.Item>
                                        <Dropdown.Item className="text-primary" href="#">Something else here</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>

                            <div className="col bg-white border-end">
                                <Dropdown>
                                    <Dropdown.Toggle variant="none" id="dropdownMenuButton4" className="w-100">
                                        <p className="text-secondary text-start mb-0">or search by name</p>
                                        <i className="fa-solid fa-user-doctor text-primary"></i>
                                        <p className="d-inline text-primary" style={{ fontSize: 'smaller' }}> <FaUserDoctor fontSize={"15"} /> doctor name or hospital</p>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu align="end">
                                        <Dropdown.Item className="text-primary" href="#">Action</Dropdown.Item>
                                        <Dropdown.Item className="text-primary" href="#">Another action</Dropdown.Item>
                                        <Dropdown.Item className="text-primary" href="#">Something else here</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <button className="col bg-danger border-end border-danger rounded-end-3">
                                <div className="p-3  text-white fs-4">
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                    <p className="d-inline text-white "><VscSearch fontSize={"30"} /> Search</p>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
        <div
            className="py-5"
            style={{ backgroundColor: "rgb(223, 223, 223)" }}>

            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-sm-6">00</div>
                    <div className="col-lg-9 col-sm-12">
                        <h3 className="text-primary">About Us</h3>
                        <p className="text-muted">Vezeeta.com is the leading digital healthcare booking platform and practice management software in MENA. We are pioneering the shift to automated physician, clinic and hospital bookings making healthcare easily accessible in the region. <br />

                            With over 200,000 verified reviews, patients are able to search, compare, and book the best doctors in just 1 minute. Doctors also provide Patients with seamless healthcare experiences through our clinic management software.<br />

                            We operate in Egypt, KSA, Jordan, Lebanon, Kenya and Nigeria. We strive to lead every aspect of the healthcare industry and continue to launch products that have positive impact on people’s lives.</p>
                        <a href="" className="text-primary fs-6 text-decoration-none" >Contact Us</a>
                    </div>

                </div>
            </div>
        </div>
        <Footer />
    </>);
}

export default About;