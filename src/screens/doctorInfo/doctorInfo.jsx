
import { addDoc, collection, doc, getDoc} from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaUmbrella } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import { db } from "../DoctorSignup/firebase";
import { IoTicketOutline } from "react-icons/io5";
import { IoMdStar } from "react-icons/io";
import { BsTelephone } from "react-icons/bs";
import { IoLocation } from "react-icons/io5";
import { FaMoneyBillWave } from "react-icons/fa";
import { RiFilter2Line } from "react-icons/ri";
import { CiStopwatch } from "react-icons/ci";
import { FaCalendarAlt } from "react-icons/fa";
import { Modal, Button, Form } from 'react-bootstrap';

// import { GiPriceTag } from "react-icons/gi";
// import { SlCalender } from "react-icons/sl";
import Spinner from 'react-bootstrap/Spinner';
import "./doctorInfo.css"
import { AuthContext } from "../../context/AuthContext";
export default function DoctorInfo() {
    const {currentUser} = useContext(AuthContext)

    const [index, setIndex] = useState(0);
    const [showModal, setShowModal] = useState(false); // State to control modal visibility
    const [selectedTime, setSelectedTime] = useState(''); // State to store selected time
    const [selectedDate, setSelectedDate] = useState(''); // State to store selected date
    const [status, setStatus] = useState(''); 
    const getFormattedDate = (date) => {
        const options = { weekday: 'short', month: 'numeric', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    };
    console.log(setStatus);
    const getCalendars = () => {
        const calendars = [];
        const today = new Date();

        // Push today's entry
        calendars.push({
            title: "Today",
            times: ["12:00 pm", "12:30 pm", "01:00 pm", "01:30 pm"],
            buttonText: "BOOK",
        });

        // Push tomorrow's entry
        const tomorrow = new Date(today);
        tomorrow.setDate(today.getDate() + 1);
        calendars.push({
            title: "Tomorrow",
            times: ["12:00 pm", "12:30 pm", "01:00 pm", "01:30 pm"],
            buttonText: "BOOK",
        });

        // Push entries for the next 5 days
        for (let i = 2; i < 7; i++) {
            const nextDate = new Date(today);
            nextDate.setDate(today.getDate() + i);
            calendars.push({
                title: getFormattedDate(nextDate),
                times: ["12:00 pm", "12:30 pm", "01:00 pm", "01:30 pm"],
                buttonText: "BOOK",
            });
        }

        return calendars;
    };

    const calendars = getCalendars();



    const handlePrev = () => {
        setIndex((prevIndex) => (prevIndex === 0 ? Math.floor((calendars.length - 1) / 3) : prevIndex - 1));
    };

    const handleNext = () => {
        setIndex((prevIndex) => (prevIndex === Math.floor((calendars.length - 1) / 3) ? 0 : prevIndex + 1));
    };

    const calendarsToDisplay = calendars.slice(index * 3, index * 3 + 3);
    const { id } = useParams();
    const [doctor, setDoctor] = useState(null);

    useEffect(() => {
        const fetchDoctor = async () => {
            const docRef = doc(db, "doctor", id);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                setDoctor(docSnap.data());
            } else {
                console.log("No such document!");
            }
        };

        fetchDoctor();
    }, [id]);

    if (!doctor) return <div className="loading-page">
        <Spinner animation="border" role="status" className="loading-spinner">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
        <p>We are fetching the latest data for you. Please wait a moment while we prepare everything.</p>
        <p>Your patience is appreciated as we load all the information you need to proceed.</p>
    </div>
     const handleTimeSlotClick = (time, date) => {
        setSelectedTime(time);
        setSelectedDate(date);;
        setShowModal(true); 
    };

    const handleConfirmBooking = async () => {
        if (!selectedDate) {
            console.error("Selected date is undefined.");
            return;
        }
        console.log("Booking confirmed for:", currentUser.name,currentUser.email , selectedTime);
        await addDoc(collection(db, "appointments"), {
            doctorId: id,
            currentUserId: currentUser.uid,
            time: selectedTime,
            date: selectedDate,
            status: status,
            
        })
        alert("Booking confirmed ");
        setShowModal(false);
    };
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

                                            <p className="d-inline text-primary">Choose city</p>
                                            <input className='SearchInput' type="text  " placeholder='choose Area' />

                                        </button>

                                    </div>
                                </div>

                                {/* Area Dropdown */}
                                <div className="col bg-white border-end">
                                    <div>
                                        <button
                                            className="btn "
                                            id=""
                                            type="button"
                                        >
                                            <p className="text-secondary text-start mb-0">In this area</p>
                                            <FaMapMarkerAlt className="text-primary" />
                                            <input className='SearchInput' type="text  " placeholder='choose  Area' />

                                        </button>

                                    </div>
                                </div>

                                {/* Insurance Dropdown */}
                                <div className="col bg-white border-end">
                                    <div>
                                        <button
                                            className="btn dropdown-toggle"
                                            id="dropdownMenuButton4"

                                        >
                                            <p className="text-secondary text-start mb-0">My insurance is</p>
                                            <FaUmbrella className="text-primary" />
                                            <p className="d-inline text-primary">choose insurance</p>
                                        </button>

                                    </div>
                                </div>

                                {/* Search by Name Dropdown */}
                                <div className="col bg-white border-end">
                                    <div>
                                        <button
                                            className="btn "
                                            type="button"
                                        >
                                            <p className="text-secondary text-start mb-0">Or search by name</p>
                                            <FaUserDoctor className="text-primary" />
                                            <input className='SearchInput' type="text  " placeholder='doctor name or hospital' />
                                        </button>

                                    </div>
                                </div>

                                {/* Search Button */}

                                <div className="col bg-danger border-end rounded-end-3">
                                    <div className="p-3 text-white fs-4">
                                        <p className="d-inline text-white"> Search</p>

                                        <a >
                                            <CiSearch style={{ color: 'white', fontSize: '25px' }} />
                                        </a>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

             {/* Header and other existing code... */}

            {/* Modal Component */}
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>تأكيد الحجز</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formPatientName">
                            <Form.Label>الاسم</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="أدخل اسمك"
                                value={currentUser.name}
                            />
                        </Form.Group>
                        <Form.Group controlId="formPatientEmail">
                            <Form.Label>البريد الإلكتروني</Form.Label>
                            <Form.Control
                                placeholder="أدخل بريدك الإلكتروني"
                                value={currentUser.email}
                            />
                        </Form.Group>
                        <Form.Group controlId="formPatientEmail">
                            <Form.Label>رقم الهاتف  </Form.Label>
                            <Form.Control
                                value={currentUser.phone}
                            />
                        </Form.Group>
                        <Form.Group controlId="formPatientEmail">
                            <Form.Label >  الميعاد الخاص بك  </Form.Label>
                            <Form.Control
                                value={selectedTime}
                            />
                        </Form.Group>
                        <Form.Group controlId="formPatientEmail">
                            <Form.Label >  الميعاد الخاص بك  </Form.Label>
                            <Form.Control
                                value={selectedDate}
                            />
                        </Form.Group>
                       
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        إلغاء
                    </Button>
                    <Button variant="primary" onClick={handleConfirmBooking}>
                        تأكيد الحجز
                    </Button>
                </Modal.Footer>
            </Modal>


            <div className="sec2 pb-3">
                <div className="container">
                    <div> <a href="" className="text-primary text-decoration-none">vezeeta </a>
                        <p className="para-1"> / Telehealth in Egypt</p></div>
                    <div className='row'>
                        <div id="col-4" className="col-4" >
                            <div className="position-sticky top-0">
                                <div className=" rounded-2 overflow-hidden">
                                    <div className="bg-primary">
                                        <RiFilter2Line fontSize={"23"} color="white" className="ms-3" />
                                        <span className="list-head">Booking Information</span>
                                    </div>
                                    <div className="" >
                                        <div className="bookSec" >
                                            <div>
                                                <p className="">Book</p>
                                            </div>
                                            <div>
                                                <p className="text-primary ">Medical Examination</p>
                                            </div>




                                        </div>
                                        <hr className="p-0 m-0" />
                                    </div>
                                    <div className="" >
                                        <div className="bookSec2" >

                                            <div className="bookSec">
                                                <FaMoneyBillWave fontSize={"18"} className="icon-coll" />
                                                <span className="coll-head">Fees {doctor.Cost} EGP</span>
                                            </div>

                                            <div className="bookSec">
                                                <CiStopwatch fontSize={"25"} className="icon-coll" />
                                                <span className="coll-head ">Wating Time:  {doctor.Wating} minute</span>
                                            </div>


                                        </div>

                                        <hr className="p-0 m-0" />
                                    </div>
                                    <div className="accordion" >
                                        <div className="">
                                            <div className="bookSec2">
                                                <div className="bookSec3 bg-primary">
                                                    <FaMoneyBillWave fontSize={"18"} className="icon-coll text-white " />
                                                    <span className="coll-head textCost">Fees {doctor.Cost} EGP</span>
                                                </div>

                                            </div>
                                            <hr className="p-0 m-0" />
                                        </div>

                                        <div className="" >
                                            <div className="bookSec2" >
                                                <div className="bookSec3">
                                                    <FaMapMarkerAlt className="text-primary" />
                                                    <span className=""> {doctor.clinicLocation}</span>
                                                    <p className="textMap"> احجز الان وسيتم ارسال تفاصيل العنوان بالكامل ورقم العيادة</p>

                                                </div>


                                            </div>
                                            <hr className="p-0 m-0" />
                                        </div>

                                        <div className="" >
                                            <div className="bookSec2" >
                                                <div className="">
                                                    <p className="textMap"> اخـتــــــــار ميعاد الــحــجــز</p>
                                                </div>



                                            </div>
                                        </div>
                                        <div className="" >
                                            <div className="bookSec2 " >
                                                <div className=''>
                                                    <div className="bookSec4   ">
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
                                                                            <button href='#' style={{ backgroundColor: currentUser == null ? "white" : "white" ,borderColor: currentUser == null ? "grey" : "blue", color: currentUser == null ? "grey" : "black", height: "25px" }} className='btn btn-primary text-center m-0 p-0 card-font d-block w-100 ' key={timeIndex} disabled={currentUser == null} onClick={() => handleTimeSlotClick(time,calendar.title)} >{time}</button>
                                                                        ))}
                                                                        <p><a className='text-decoration-none'>More</a></p>
                                                                    </div>
                                                                    <div className="card-footer py-0 px-2 foot-btn  " style={{ backgroundColor: currentUser == null ? "grey" : "red", borderColor: currentUser == null ? "grey" : "blue", color: currentUser == null ? "grey" : "black" }}>
                                                                        <button className="btn card-font text-white" disabled={currentUser == null}>{calendar.buttonText}</button>
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
                                            <hr className="p-0 m-0" />
                                        </div>


                                    </div>
                                    <div className="" >
                                        <div className="bookSec2" >
                                            <p className="textMap"> الحجز مسبقا و الدخول بأسبقية الحضور</p>

                                        </div>

                                        <hr className="p-0 m-0" />
                                    </div>
                                    <div className="" >
                                        <div className="bookSec5" >
                                            <div className="d-flex gap-2 pt-1">

                                                <span className="textMap"> احجز أونلاين، ادفع في العيادة</span>
                                                <FaCalendarAlt fontSize={"30"} className="text-success" />


                                            </div>
                                            <p className="textMap"> الدكتور يشترط الحجز المسبق!</p>

                                        </div>

                                        <hr className="p-0 m-0" />
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div id="col-8" className="col-8">
                            <div className="row bg-white rounded-3 py-3 mt-3 " >
                                <div className='col-lg-2 col-md-3 overflow-hidden '>
                                    <img src={doctor.imageUrl} className='prof-img1' alt="" />
                                </div>
                                <div className='col-lg-5 col-md-9 py-3'>
                                    <p className='text-primary d-inline'>Doctor</p>
                                    <a className='fs-5 ms-1 doctor-name-link'>{doctor.name}</a>
                                    <p className='doc-discrip'>{doctor.pref}</p>
                                    <div className='stars-line'><IoMdStar fontSize={"25"} className='str-rate' />
                                        <IoMdStar fontSize={"25"} className='str-rate' />
                                        <IoMdStar fontSize={"25"} className='str-rate' />
                                        <IoMdStar fontSize={"25"} className='str-rate' />
                                        <IoMdStar fontSize={"25"} className='str-rate' />
                                    </div>
                                    <p className='rating-num'>Overall Rating From 5 Visitors</p>
                                    <p className='degrees'><FaUserDoctor fontSize={"17"} className='me-2 icon-degree' />
                                        <a className=''> Doctor {doctor.specialization} </a> Specialized in 
                                        <a className=''>  {doctor.qualifications}</a> </p>
                                    <p className='degrees'><IoTicketOutline fontSize={"18"} className="me-2 icon-degree" />Fees : {doctor.Cost} EGP</p>
                                    <p className='degrees'><IoLocation fontSize={"18"} className="me-2 icon-degree" /> <span className='hot-line'>{doctor.clinicLocation}</span> </p>
                                    <p className='degrees'><BsTelephone fontSize={"18"} className="me-2 icon-degree" /> <span className='hot-line'>{doctor.phone}</span> Cost Of Regular Call</p>
                                </div>

                            </div>




                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
