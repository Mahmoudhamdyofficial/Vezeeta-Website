import Navbar from "../components/Navbar";
import { Dropdown } from 'react-bootstrap';
import doctors from "../assets/doctors.png"
import Footer from "../components/Footer";
import { VscSearch } from "react-icons/vsc";
import { IoLocationOutline } from "react-icons/io5";
import { RiUmbrellaLine } from "react-icons/ri";
import { FaUserDoctor } from "react-icons/fa6";
import ListGroup from 'react-bootstrap/ListGroup';
import { TbMessageQuestion } from "react-icons/tb";
import { HiUserGroup } from "react-icons/hi2";
import { RiUserSearchFill } from "react-icons/ri";
import { useState } from "react";
import { GrWorkshop } from "react-icons/gr";
import Amir from "../assets/our team/Amir.jpg"
import Mougi from "../assets/our team/Mougi.jpg"
import doc1 from "../assets/vezeeta life/mounir-shaker.jpg"
import doc2 from "../assets/vezeeta life/reham-el-husseiny.jpg"
import doc3 from "../assets/vezeeta life/rana-qandil.jpg"
import doc4 from "../assets/vezeeta life/andrew-maher.jpg"
import doc5 from "../assets/vezeeta life/rana-mahfouz.jpg"



import "./About.css"
function About() {
    const [activeKey, setActiveKey] = useState("#link1");

    const handleSelect = (key) => {
        setActiveKey(key);
    };
    return (<>
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
                    <div className="col-lg-3 col-sm-6">
                        <ListGroup defaultActiveKey="#link1">
                            <ListGroup.Item onClick={() => handleSelect("#link1")}
                                className={activeKey === "#link1" ? "text-white" : "text-secondary"}
                                action href="#link1">
                                <TbMessageQuestion fontSize={"22"} /> About Us
                            </ListGroup.Item>
                            <ListGroup.Item
                                className={activeKey === "#link2" ? "text-white" : "text-secondary"}
                                onClick={() => handleSelect("#link2")} action href="#link2" >
                                <HiUserGroup fontSize={"22"} /> Our Team
                            </ListGroup.Item>
                            <ListGroup.Item
                                className={activeKey === "#link3" ? "text-white" : "text-secondary"}
                                onClick={() => handleSelect("#link3")} action href="#link3" >
                                <GrWorkshop fontSize={"22"} /> Life At Vezeeta
                            </ListGroup.Item>
                            <ListGroup.Item
                                className={activeKey === "#link4" ? "text-white" : "text-secondary"}
                                onClick={() => handleSelect("#link4")} action href="#link4" >
                                <RiUserSearchFill fontSize={"22"} /> Careers
                            </ListGroup.Item>
                        </ListGroup></div>
                    <div className="col-lg-9 col-sm-12">
                        {activeKey === "#link1" ? <><h3 className="text-primary">About Us</h3>
                            <p className="text-muted">Vezeeta.com is the leading digital healthcare booking platform and practice management software in MENA. We are pioneering the shift to automated physician, clinic and hospital bookings making healthcare easily accessible in the region. <br />

                                With over 200,000 verified reviews, patients are able to search, compare, and book the best doctors in just 1 minute. Doctors also provide Patients with seamless healthcare experiences through our clinic management software.<br />

                                We operate in Egypt, KSA, Jordan, Lebanon, Kenya and Nigeria. We strive to lead every aspect of the healthcare industry and continue to launch products that have positive impact on people’s lives.</p>
                            <a href="" className="text-primary fs-6 text-decoration-none" >Contact Us</a></> : <></>}

                        {activeKey === "#link2" ? <><h3 className="text-primary">Our Team</h3>
                            <div className="row">
                                <div className="col-3"> <img style={{ width: "100%" }} src={Amir} alt="" /></div>
                                <div className="col-9">
                                    <h3 className="text-primary">Amir Barsoum; CEO & Co-founder</h3>
                                    <p className="text-secondary no-space-paragraph">Amir introduced Vezeeta in 2012 as a digital platform which today has redefined the healthcare industry in MENA. The revolutionary accessibility bridge between patients and doctors is creating unprecedentedly swift and effective healthcare experiences. Amir built Vezeeta from an idea to a company of 200 employees, 60,000 monthly bookings, 6000 subscribed doctors and 1 million users across MENA with offices in Cairo, Jordan, Lebanon, Morocco and UAE. Amir’s unique entrepreneurial vision was the cornerstone for raising US$ 10.5 Mn in 4 years turning Vezeeta into the go-to portal for healthcare-related matters across MENA. Amir is an all-time entrepreneur; he established his first company directly after graduation. He successfully grew it into a well-established FMCG importer and distributor. Later he made an exit and moved into the corporate world learning to build bigger companies and industry disrupters. Prior to Vezeeta, Amir was a Management Consultant at McKinsey & Company where he provided expertise for Healthcare and FMCGs across public and private sectors in Europe and MENA. He also led the strategy creation of AstraZeneca in MENA. He holds an MBA from the American University of Cairo, a Bachelor of Pharmacy from Ain Shams University. Amir is also an endeavor entrepreneur.</p>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-3"> <img style={{ width: "100%" }} src={Mougi} alt="" /></div>
                                <div className="col-9">
                                    <h3 className="text-primary">Mohammad El Mougi; Director of Product Management</h3>
                                    <p className="text-secondary no-space-paragraph">Mohammad El Mougi joined Vezeeta in 2016 as Director of Product Management and since then his team has managed to re-launch great products and features that precisely fit Vezeeta markets. Mohammad has 8 years of experience in the Technology and Telecom industries. His distinction lies in his ability to identify growth opportunities and winning strategies and he has a strong track record of generating game-changing ideas with successful implementation. Prior to Vezeeta,
                                        Mohammad was Small and Medium Businesses Marketing Manager at Vodafone and Research Consultant at the Technology Practice at Nielsen. He holds a Masters of International Business from Hult University, San Francisco and a Bachelor in Pharmacy and Biotechnology from the German University in Cairo.</p>
                                </div>
                            </div>
                        </> : <></>}

                        {activeKey === "#link3" ? <><h3 className="text-primary">Life at Vezeeta</h3>
                            <div >
                                <p className="text-secondary no-space-paragraph">Vezeeta is built by a team who constantly brings in fresh perspectives, provides new ideas and finds solutions for everyday challenges to make an impact.
                                </p>
                                <p className="text-secondary">Our culture values are:</p>
                                <p className="text-secondary no-space-paragraph">
                                    <ul style={{ listStyleType: "disc" }} className="text-secondary no-space-paragraph">
                                        <li>lead from the front</li>
                                        <li>synthesize knowledge</li>
                                        <li>problem-solve passionately</li>
                                        <li>build on others’ strength</li>
                                        <li>drive outcomes fast</li>
                                    </ul>
                                    Vezeeta culture fosters learning, adaptability and disruption. A culture that equips youth with skills, opportunities and a network of strong willed individuals all sharing the same passion for what they do for life.<br /><br />

                                    At Vezeeta we embrace that youth are the change agents and it is not about the quantity of years on the job but the quality of your thinking.<br /><br />
                                    Over the past few years, Vezeeta with its youthful team has successfully disrupted the healthcare market, the way doctors operate and the way patients go for visitation, resulting in a better life for both patients and doctors.</p>
                                <h4 className="text-secondary fw-bold">What our employees say about us…</h4>
                            </div>
                            <div className="row mt-4">
                                <div className="col-4"> <img style={{ width: "100%" }} src={doc1} alt="" /></div>
                                <div className="col-8">
                                    <h4 className="text-secondary fw-bold">Mounir Shaker, Engineering Lead</h4>
                                    <p className="text-secondary no-space-paragraph">We – Vezeeta’s Engineers – are always on top of the game; we never settle for using any technology but always the latest and most advanced to make sure that our products are top-notch and yield great user experiences!</p>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-8">
                                    <h4 className="text-secondary fw-bold">Reham El Husseiny, Senior Project Coordinator</h4>
                                    <p className="text-secondary no-space-paragraph">Vezeeta is a workplace that stretches its employees – you learn a lot in very little time. The work-environment is very friendly, everybody is treated equally regardless of their position in the company; senior management are always available and easily accessible.</p>
                                </div>
                                <div className="col-4"> <img style={{ width: "100%" }} src={doc2} alt="" /></div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-4"> <img style={{ width: "100%" }} src={doc3} alt="" /></div>
                                <div className="col-8">
                                    <h4 className="text-secondary fw-bold">Rana Qandil, SEM Lead</h4>
                                    <p className="text-secondary no-space-paragraph">Unlike conventional rigid workplaces, Vezeeta is known for its fun yet stretching work environment. Growing and getting promoted in Vezeeta has nothing to do with your age or how many years you spent in the company; if you adopt a fast learning attitude you will get rewarded.</p>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-8">
                                    <h4 className="text-secondary fw-bold">Andrew Maher – Finance Manager</h4>
                                    <p className="text-secondary no-space-paragraph">My journey in Vezeeta – which started in 2013 – is truly a journey of a lifetime.
                                        I started out as an Accountant, then Lead Accountant, then Accounting Manager, and now Finance Manager.
                                        This fast sprint in my career could have never happened elsewhere.
                                        What I have reached in 5 years would have taken me 12-15 years in any other company.
                                        If you show passion and eagerness to learn, management invests time and effort in you to grow and groom you to get promoted irrespective of your age.</p>
                                </div>
                                <div className="col-4"> <img style={{ width: "100%" }} src={doc4} alt="" /></div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-4"> <img style={{ width: "100%" }} src={doc5} alt="" /></div>
                                <div className="col-8">
                                    <h4 className="text-secondary fw-bold">Rana Mahfouz, Growth and Partnerships Manager</h4>
                                    <p className="text-secondary no-space-paragraph">Five years ago, I started my career in Vezeeta as a Product Specialist. Since then, I had the chance to join different functions including Business Planning and Marketing.
                                        This was a lifetime opportunity that helped me choose the areas I am passionate about.
                                        So far, my ride took me to be the first Vee to lead the launch of a new market; Jordan.
                                        Working at Vezeeta is a rollercoaster ride that is extremely thrilling, suspenseful and exhilarating.</p>
                                </div>
                            </div>
                        </> : <></>}

                    </div>

                </div>
            </div>
        </div>
    </>);
}

export default About;