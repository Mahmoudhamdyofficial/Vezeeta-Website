import './search.css';  
import { CiSearch } from "react-icons/ci";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaUmbrella } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { BsGenderAmbiguous } from "react-icons/bs";
import { RiFilter2Line } from "react-icons/ri";
import { TbHeadset } from "react-icons/tb";
import { PiGraduationCapLight } from "react-icons/pi";
import { GiPriceTag } from "react-icons/gi";
import { SlCalender } from "react-icons/sl";
import { IoTicketOutline } from "react-icons/io5";
import { useState } from 'react';
import { IoMdStar } from "react-icons/io";
import { BsTelephone } from "react-icons/bs";


export default function Search() {
  const [index, setIndex] = useState(0);

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

  const handlePrev = () => {
      setIndex((prevIndex) => (prevIndex === 0 ? Math.floor((calendars.length - 1) / 3) : prevIndex - 1));
  };

  const handleNext = () => {
      setIndex((prevIndex) => (prevIndex === Math.floor((calendars.length - 1) / 3) ? 0 : prevIndex + 1));
  };

  const calendarsToDisplay = calendars.slice(index * 3, index * 3 + 3);
  return (
    <>
      <section className="pb-3" style={{ backgroundColor: 'rgb(238, 236, 236)' }}>
        <div className="container pt-4">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <h3>best doctor in Egypt</h3>
              <p>Book online or call 📞 16676</p>
              <p>15000 Doctors - 9000 Professors and Consultants - More than 40 Specialties</p>
            </div>
            <div className="col-md-6 col-sm-12 d-flex align-bottom justify-content-center">
              <img src="/public/images/doctors.png" alt="Doctors" />
            </div>
          </div>

          <div className="row">
            <div className="container text-center">
              <div className="row row-cols-2 row-cols-lg-6 g-2 g-lg-3">
                <div className="col bg-white rounded-start-3 border-end">
                  <div>
                    <button
                      className="btn dropdown-toggle"
                      id="dropdownMenuButton1"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <p className="text-secondary text-start mb-0">Select a Doctor</p>
                      <p className="d-inline text-primary">🩺choose speciality</p>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton1">

                      <li><a className="dropdown-item" href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Another action</a></li>
                      <li><a className="dropdown-item" href="#">Something else here</a></li>
                      
                      
                    </ul>
                  </div>
                </div>

                {/* City Dropdown */}
                <div className="col bg-white border-end">
                  <div>
                    <button
                      className="btn dropdown-toggle"
                      id="dropdownMenuButton2"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <p className="text-secondary text-start mb-0">In this City</p>
                      <FaMapMarkerAlt className="text-primary" />

                      <p className="d-inline text-primary">choose city</p>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton2">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </div>
                </div>

                {/* Area Dropdown */}
                <div className="col bg-white border-end">
                  <div>
                    <button
                      className="btn dropdown-toggle"
                      id="dropdownMenuButton3"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <p className="text-secondary text-start mb-0">In this area</p>
                      <FaMapMarkerAlt className="text-primary" />
                      <p className="d-inline text-primary">choose area</p>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton3">
                      <li><a className="dropdown-item" href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Another action</a></li>
                      <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </div>
                </div>

                {/* Insurance Dropdown */}
                <div className="col bg-white border-end">
                  <div>
                    <button
                      className="btn dropdown-toggle"
                      id="dropdownMenuButton4"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <p className="text-secondary text-start mb-0">My insurance is</p>
                      <FaUmbrella  className="text-primary"/>
                      <p className="d-inline text-primary">choose insurance</p>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton4">
                      <li><a className="dropdown-item" href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Another action</a></li>
                      <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </div>
                </div>

                {/* Search by Name Dropdown */}
                <div className="col bg-white border-end">
                  <div>
                    <button
                      className="btn dropdown-toggle"
                      id="dropdownMenuButton5"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <p className="text-secondary text-start mb-0">Or search by name</p>
                      <FaUserDoctor className="text-primary" />
                      <p className="d-inline text-primary" style={{ fontSize: 'smaller' }}>doctor name or hospital</p>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton5">
                      <li><a className="dropdown-item" href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Another action</a></li>
                      <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </div>
                </div>

                {/* Search Button */}

                <div  className="col bg-danger border-end rounded-end-3">
                  <div className="p-3 text-white fs-4"> 
                        <p className="d-inline text-white"> Search</p>

                            <a >
                            <CiSearch style={{ color: 'white' , fontSize: '25px' }} />
                            </a>
                  
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
      
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
                                <img src="../../../public/images/ahmed-mohamed-farid-oncology-surgery_20240720171132682.jpg" className='rounded-circle w-100 prof-img' alt="" />
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
                                <img src="../../../public/images/doctor-ibrahim-mohamed-abdelmageed-cardiology-and-vascular-disease-1_20240109153459437.jpg" className='rounded-circle w-100 prof-img' alt="" />
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
    </>
  );
}
