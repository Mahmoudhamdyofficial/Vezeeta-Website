import { Dropdown } from 'react-bootstrap';
import doctors from "../../assets/doctors.png"
import { VscSearch } from "react-icons/vsc";
import { BsGenderAmbiguous } from "react-icons/bs";
import { FaUserDoctor } from "react-icons/fa6";
import { RiFilter2Line } from "react-icons/ri";
import { TbHeadset } from "react-icons/tb";
import { PiGraduationCapLight } from "react-icons/pi";
import { GiPriceTag } from "react-icons/gi";
import { SlCalender } from "react-icons/sl";
import { IoTicketOutline } from "react-icons/io5";
import "./Teleconsultation.css"
import { useState } from 'react';
import doctor from "../../assets/vezeeta life/doctor-profile.jpg"
import { IoMdStar } from "react-icons/io";
import { BsTelephone } from "react-icons/bs";


function Teleconsultation() {
    const [index, setIndex] = useState(0);

    // Data for calendar items
    const calendars = [
        {
            title: "Today",
            times: ["1:15 AM", "1:30 AM", "1:45 AM", "11:00 AM"],
            buttonText: "BOOK",
        },
        {
            title: "Tomorrow",
            times: ["12:00 AM", "12:15 AM", "12:30 AM", "12:45 AM"],
            buttonText: "BOOK",
        },
        {
            title: "Sun 10/13",
            times: ["12:00 AM", "12:15 AM", "12:30 AM", "12:45 AM"],
            buttonText: "BOOK",
        },
        {
            title: "Mon 10/14",
            times: ["1:00 AM", "1:15 AM", "1:45 AM", "11:30 AM"],
            buttonText: "BOOK",
        },
        {
            title: "Tue 10/15",
            times: ["12:00 AM", "12:30 AM", "1:00 AM", "2:00 AM"],
            buttonText: "BOOK",
        },
        {
            title: "Wed 10/16",
            times: ["1:00 AM", "2:15 AM", "2:30 AM", "3:00 AM"],
            buttonText: "BOOK",
        }
    ];

    // Function to handle left navigation
    const handlePrev = () => {
        setIndex((prevIndex) => (prevIndex === 0 ? Math.floor((calendars.length - 1) / 3) : prevIndex - 1));
    };

    // Function to handle right navigation
    const handleNext = () => {
        setIndex((prevIndex) => (prevIndex === Math.floor((calendars.length - 1) / 3) ? 0 : prevIndex + 1));
    };

    // Get the calendars to display (3 per page)
    const calendarsToDisplay = calendars.slice(index * 3, index * 3 + 3);
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
        <div className="sec2 pb-3">
            <div className="container">
                <div> <a href="" className="text-primary text-decoration-none">vezeeta </a>
                    <p className="para-1"> / Telehealth in Egypt</p></div>
                <div className='row'>
                    <div id='col-2' >
                        <div className="position-sticky top-0">
                            <div className=" rounded-2 overflow-hidden">
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
                                                    <input type="checkbox" id="Phone" />
                                                    <label className='ms-2' htmlFor="Phone"> Phone</label>
                                                </div>
                                                <div>
                                                    <input type="checkbox" id="video" />
                                                    <label className='ms-2' htmlFor="video"> video</label>
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
                                            ><PiGraduationCapLight fontSize={"24"} className="icon-coll" />
                                                <span className="coll-head">Title</span>
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseTwo"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingOne"
                                            data-bs-parent="#filterAccordion"
                                        >
                                            <div className="accordion-body">
                                                <div>
                                                    <input type="checkbox" id="professor" />
                                                    <label className='ms-2' htmlFor="professor"> Professor</label>
                                                </div>
                                                <div>
                                                    <input type="checkbox" id="lecturer" />
                                                    <label className='ms-2' htmlFor="lecturer"> Lecturer</label>
                                                </div>
                                                <div>
                                                    <input type="checkbox" id="consultant" />
                                                    <label className='ms-2' htmlFor="consultant"> Consultant</label>
                                                </div>
                                                <div>
                                                    <input type="checkbox" id="specialist" />
                                                    <label className='ms-2' htmlFor="specialist"> Specialist</label>
                                                </div>
                                            </div>
                                        </div>
                                        <hr className="p-0 m-0" />
                                    </div>
                                    <div className="accordion-item rounded-0 border-0">
                                        <h2 className="accordion-header" id="headingThree">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseThree"
                                                aria-expanded="false"
                                                aria-controls="collapseThree"
                                            ><BsGenderAmbiguous fontSize={"24"} className="icon-coll" />
                                                <span className="coll-head">Gender</span>
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseThree"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingThree"
                                            data-bs-parent="#filterAccordion"
                                        >
                                            <div className="accordion-body">
                                                <div>
                                                    <input type="checkbox" id="Female" />
                                                    <label htmlFor="Female" className='ms-2'> Female</label>
                                                </div>
                                                <div>
                                                    <input type="checkbox" id="Male" />
                                                    <label htmlFor="Male" className='ms-2'> Male</label>
                                                </div>
                                            </div>
                                        </div>
                                        <hr className="p-0 m-0" />
                                    </div>
                                    <div className="accordion-item rounded-0 border-0">
                                        <h2 className="accordion-header" id="headingThree">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseFour"
                                                aria-expanded="false"
                                                aria-controls="collapseFour"
                                            ><SlCalender fontSize={"24"} className="icon-coll" />
                                                <span className="coll-head">Availability</span>
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseFour"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingFour"
                                            data-bs-parent="#filterAccordion"
                                        >
                                            <div className="accordion-body">
                                                <div>
                                                    <input type="checkbox" id="AnyDay" />
                                                    <label htmlFor="AnyDay" className='ms-2'> Any Day</label>
                                                </div>
                                                <div>
                                                    <input type="checkbox" id="Today" />
                                                    <label htmlFor="Today" className='ms-2'> Today</label>
                                                </div>
                                                <div>
                                                    <input type="checkbox" id="Tomorrow" />
                                                    <label htmlFor="Tomorrow" className='ms-2'> Tomorrow</label>
                                                </div>
                                            </div>
                                        </div>
                                        <hr className="p-0 m-0" />
                                    </div>
                                    <div className="accordion-item rounded-0 border-0">
                                        <h2 className="accordion-header" id="headingThree">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseFive"
                                                aria-expanded="false"
                                                aria-controls="collapseFive"
                                            ><GiPriceTag fontSize={"24"} className="icon-coll" />
                                                <span className="coll-head">Promo Codes</span>
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseFive"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingFive"
                                            data-bs-parent="#filterAccordion"
                                        >
                                            <div className="accordion-body">
                                                <div>
                                                    <input type="checkbox" id="Accept" />
                                                    <label htmlFor="Accept" className='ms-2' style={{ fontSize: "14px" }}> Accept Promo Codes</label>
                                                </div>
                                            </div>
                                        </div>
                                        <hr className="p-0 m-0" />
                                    </div>
                                    <div className="accordion-item rounded-0 border-0">
                                        <h2 className="accordion-header" id="headingSix">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseSix"
                                                aria-expanded="false"
                                                aria-controls="collapseSix"
                                            ><IoTicketOutline fontSize={"24"} className="icon-coll" />
                                                <span className="coll-head">Examination Fee</span>
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseSix"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingSix"
                                            data-bs-parent="#filterAccordion"
                                        >
                                            <div className="accordion-body">
                                                <div>
                                                    <input type="checkbox" id="any" />
                                                    <label htmlFor="any" className='ms-2'> Any</label>
                                                </div>
                                                <div>
                                                    <input type="checkbox" id="less50" />
                                                    <label htmlFor="less50" className='ms-2'> Less Than 50</label>
                                                </div>
                                                <div>
                                                    <input type="checkbox" id="from50" />
                                                    <label htmlFor="from50" className='ms-2'> From 50 To 100</label>
                                                </div>
                                                <div>
                                                    <input type="checkbox" id="specialist" />
                                                    <label htmlFor="specialist" className='ms-2'>Specialist</label>
                                                </div>
                                            </div>
                                        </div>
                                        <hr className="p-0 m-0" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-10">
                        <div className="row bg-white rounded-3 py-3 mt-3">
                            <div className='col-lg-2 col-md-3 overflow-hidden'>
                                <img src={doctor} className='rounded-circle w-100 prof-img' alt="" />
                            </div>
                            <div className='col-lg-5 col-md-9 py-3'>
                                <p className='text-primary d-inline'>Doctor</p>
                                <a href="#" className='fs-5 ms-1 doctor-name-link'>Islam Ammar</a>
                                <p className='doc-discrip'>Specialist of physiotherapy_Cairo University</p>
                                <div className='stars-line'><IoMdStar fontSize={"25"} className='str-rate' />
                                    <IoMdStar fontSize={"25"} className='str-rate' />
                                    <IoMdStar fontSize={"25"} className='str-rate' />
                                    <IoMdStar fontSize={"25"} className='str-rate' />
                                    <IoMdStar fontSize={"25"} className='str-rate' />
                                </div>
                                <p className='rating-num'>Overall Rating From 5 Visitors</p>
                                <p className='degrees'><FaUserDoctor fontSize={"17"} className='me-2 icon-degree' />
                                    <a className='degrees-link' href="">Gastroenterologist </a>Specialized in
                                    <a className='degrees-link' href=""> Adult Diabetes and Endocrinology</a> </p>
                                <p className='degrees'><IoTicketOutline fontSize={"18"} className="me-2 icon-degree" />Fees : 300EGP</p>
                                <p className='degrees'><BsTelephone fontSize={"18"} className="me-2 icon-degree" /> <span className='hot-line'>16676</span> Cost Of Regular Call</p>
                            </div>
                            <div className='col-lg-5 col-md-12 mt-4'>
                                <div className="d-flex align-items-center justify-content-center">
                                    <button className="btn btn-outline-primary me-2" onClick={handlePrev}>
                                        &lt;
                                    </button>

                                    <div className="d-flex overflow-hidden">
                                        {calendarsToDisplay.map((calendar, calendarIndex) => (
                                            <div
                                                key={calendarIndex}
                                                className="card text-center mx-1 "
                                                style={{ minWidth: '60px', maxWidth: '200px' }}
                                            >
                                                <div className="card-header bg-primary text-white card-font px-0 py-1">
                                                    {calendar.title}
                                                </div>
                                                <div className="card-body card-font p-0">
                                                    {calendar.times.map((time, timeIndex) => (
                                                        <a href='#' className='m-0 p-0 card-font d-block text-decoration-none link-time' key={timeIndex}>{time}</a>
                                                    ))}
                                                    <p><a className='text-decoration-none' href="#">More</a></p>
                                                </div>
                                                <div className="card-footer py-0 px-2 foot-btn  ">
                                                    <button className="btn card-font text-white">{calendar.buttonText}</button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <button className="btn btn-outline-primary ms-2" onClick={handleNext}>
                                        &gt;
                                    </button>
                                </div>
                                <p className='text-center degrees mt-3'>Appointement Reservation</p>
                            </div>
                        </div>
                        <div className="row bg-white rounded-3 py-3 mt-3">
                            <div className='col-lg-2 col-md-3 overflow-hidden'>
                                <img src={doctor} className='rounded-circle w-100 prof-img' alt="" />
                            </div>
                            <div className='col-lg-5 col-md-9 py-3'>
                                <p className='text-primary d-inline'>Doctor</p>
                                <a href="#" className='fs-5 ms-1 doctor-name-link'>Islam Ammar</a>
                                <p className='doc-discrip'>Specialist of physiotherapy_Cairo University</p>
                                <div className='stars-line'><IoMdStar fontSize={"25"} className='str-rate' />
                                    <IoMdStar fontSize={"25"} className='str-rate' />
                                    <IoMdStar fontSize={"25"} className='str-rate' />
                                    <IoMdStar fontSize={"25"} className='str-rate' />
                                    <IoMdStar fontSize={"25"} className='str-rate' />
                                </div>
                                <p className='rating-num'>Overall Rating From 5 Visitors</p>
                                <p className='degrees'><FaUserDoctor fontSize={"17"} className='me-2 icon-degree' />
                                    <a className='degrees-link' href="">Gastroenterologist </a>Specialized in
                                    <a className='degrees-link' href=""> Adult Diabetes and Endocrinology</a> </p>
                                <p className='degrees'><IoTicketOutline fontSize={"18"} className="me-2 icon-degree" />Fees : 300EGP</p>
                                <p className='degrees'><BsTelephone fontSize={"18"} className="me-2 icon-degree" /> <span className='hot-line'>16676</span> Cost Of Regular Call</p>
                            </div>
                            <div className='col-lg-5 col-md-12 mt-4'>
                                <div className="d-flex align-items-center justify-content-center">
                                    <button className="btn btn-outline-primary me-2" onClick={handlePrev}>
                                        &lt;
                                    </button>

                                    <div className="d-flex overflow-hidden">
                                        {calendarsToDisplay.map((calendar, calendarIndex) => (
                                            <div
                                                key={calendarIndex}
                                                className="card text-center mx-1 "
                                                style={{ minWidth: '60px', maxWidth: '200px' }}
                                            >
                                                <div className="card-header bg-primary text-white card-font px-0 py-1">
                                                    {calendar.title}
                                                </div>
                                                <div className="card-body card-font p-0">
                                                    {calendar.times.map((time, timeIndex) => (
                                                        <a href='#' className='m-0 p-0 card-font d-block text-decoration-none link-time' key={timeIndex}>{time}</a>
                                                    ))}
                                                    <p><a className='text-decoration-none' href="#">More</a></p>
                                                </div>
                                                <div className="card-footer py-0 px-2 foot-btn  ">
                                                    <button className="btn card-font text-white">{calendar.buttonText}</button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <button className="btn btn-outline-primary ms-2" onClick={handleNext}>
                                        &gt;
                                    </button>
                                </div>
                                <p className='text-center degrees mt-3'>Appointement Reservation</p>
                            </div>
                        </div>
                        <div className="row bg-white rounded-3 py-3 mt-3">
                            <div className='col-lg-2 col-md-3 overflow-hidden'>
                                <img src={doctor} className='rounded-circle w-100 prof-img' alt="" />
                            </div>
                            <div className='col-lg-5 col-md-9 py-3'>
                                <p className='text-primary d-inline'>Doctor</p>
                                <a href="#" className='fs-5 ms-1 doctor-name-link'>Islam Ammar</a>
                                <p className='doc-discrip'>Specialist of physiotherapy_Cairo University</p>
                                <div className='stars-line'><IoMdStar fontSize={"25"} className='str-rate' />
                                    <IoMdStar fontSize={"25"} className='str-rate' />
                                    <IoMdStar fontSize={"25"} className='str-rate' />
                                    <IoMdStar fontSize={"25"} className='str-rate' />
                                    <IoMdStar fontSize={"25"} className='str-rate' />
                                </div>
                                <p className='rating-num'>Overall Rating From 5 Visitors</p>
                                <p className='degrees'><FaUserDoctor fontSize={"17"} className='me-2 icon-degree' />
                                    <a className='degrees-link' href="">Gastroenterologist </a>Specialized in
                                    <a className='degrees-link' href=""> Adult Diabetes and Endocrinology</a> </p>
                                <p className='degrees'><IoTicketOutline fontSize={"18"} className="me-2 icon-degree" />Fees : 300EGP</p>
                                <p className='degrees'><BsTelephone fontSize={"18"} className="me-2 icon-degree" /> <span className='hot-line'>16676</span> Cost Of Regular Call</p>
                            </div>
                            <div className='col-lg-5 col-md-12 mt-4'>
                                <div className="d-flex align-items-center justify-content-center">
                                    <button className="btn btn-outline-primary me-2" onClick={handlePrev}>
                                        &lt;
                                    </button>

                                    <div className="d-flex overflow-hidden">
                                        {calendarsToDisplay.map((calendar, calendarIndex) => (
                                            <div
                                                key={calendarIndex}
                                                className="card text-center mx-1 "
                                                style={{ minWidth: '60px', maxWidth: '200px' }}
                                            >
                                                <div className="card-header bg-primary text-white card-font px-0 py-1">
                                                    {calendar.title}
                                                </div>
                                                <div className="card-body card-font p-0">
                                                    {calendar.times.map((time, timeIndex) => (
                                                        <a href='#' className='m-0 p-0 card-font d-block text-decoration-none link-time' key={timeIndex}>{time}</a>
                                                    ))}
                                                    <p><a className='text-decoration-none' href="#">More</a></p>
                                                </div>
                                                <div className="card-footer py-0 px-2 foot-btn  ">
                                                    <button className="btn card-font text-white">{calendar.buttonText}</button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <button className="btn btn-outline-primary ms-2" onClick={handleNext}>
                                        &gt;
                                    </button>
                                </div>
                                <p className='text-center degrees mt-3'>Appointement Reservation</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </>);
}

export default Teleconsultation;