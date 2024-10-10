import Navbar from "../../components/Navbar";
import { Dropdown } from 'react-bootstrap';
import doctors from "../../assets/doctors.png"
import { VscSearch } from "react-icons/vsc";
import { IoLocationOutline } from "react-icons/io5";
import { RiUmbrellaLine } from "react-icons/ri";
import { FaUserDoctor } from "react-icons/fa6";
import { RiFilter2Line } from "react-icons/ri";
import { TbHeadset } from "react-icons/tb";

import "./Teleconsultation.css"
function Teleconsultation() {
    return (<>
        <div className="pb-3 sec1">
            <div className="container pt-4">
                <div className="row" style={{ height: "17vh" }}>
                    <div className="col-md-6 col-sm-12">
                        <h5 className="text-secondary fs-6 fw-bold">Book a Telehealth Consultation Call with the best Doctors in Egypt</h5>
                        <p className="text-secondary">Book online or call 📞 <span className="fw-bold">16676</span></p>
                    </div>
                    <div className="col-md-6 col-sm-12 d-flex align-bottom justify-content-center">
                        <img src={doctors} alt="" />
                    </div>
                </div>
                <div className="row">
                    <div className="container text-center">
                        <div className=" row justify-content-end" >


                            <div className="col-lg-4 col-md-6 bg-white rounded-start-3 border-end btn-hight">
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
                            <button className="col-lg-3 col-md-6 border-end rounded-end-3 btn-hight red-btn" >
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
        <div className="sec2">
            <div className="container">
                <div> <a href="" className="text-primary text-decoration-none">vezeeta </a>
                    <p className="para-1"> / Telehealth in Egypt</p></div>
                <div className="col-2 rounded-2 overflow-hidden">
                    <div className="bg-primary">
                        <RiFilter2Line fontSize={"23"} color="white" className="ms-3" />
                        <span className="list-head">Filters</span>
                    </div>
                    <div className="accordion" id="filterAccordion">
                        <div className="accordion-item rounded-0 border-0">
                            <h2 className="accordion-header" id="headingOne">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne"
                                    aria-expanded="false"
                                    aria-controls="collapseOne"
                                ><TbHeadset fontSize={"24"} className="icon-coll" />
                                    <span className="coll-head">Appointement type</span>
                                </button>
                            </h2>
                            <div
                                id="collapseOne"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingOne"
                                data-bs-parent="#filterAccordion"
                            >
                                <div className="accordion-body">
                                    <div>
                                        <input type="checkbox" id="professor" />
                                        <label htmlFor="professor"> Professor</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" id="lecturer" />
                                        <label htmlFor="lecturer"> Lecturer</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" id="consultant" />
                                        <label htmlFor="consultant"> Consultant</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" id="specialist" />
                                        <label htmlFor="specialist"> Specialist</label>
                                    </div>
                                </div>
                            </div>
                            <hr className="p-0 m-0" />
                        </div>
                        <div className="accordion-item rounded-0 border-0">
                            <h2 className="accordion-header" id="headingTwo">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseTwo"
                                    aria-expanded="false"
                                    aria-controls="collapseTwo"
                                >
                                    Title
                                </button>
                            </h2>
                            <div
                                id="collapseTwo"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingTwo"
                                data-bs-parent="#filterAccordion"
                            >
                                <div className="accordion-body">
                                    <div>
                                        <input type="checkbox" id="professor" />
                                        <label htmlFor="professor"> Professor</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" id="lecturer" />
                                        <label htmlFor="lecturer"> Lecturer</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" id="consultant" />
                                        <label htmlFor="consultant"> Consultant</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" id="specialist" />
                                        <label htmlFor="specialist"> Specialist</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-10"></div>
            </div>

        </div>
    </>);
}

export default Teleconsultation;