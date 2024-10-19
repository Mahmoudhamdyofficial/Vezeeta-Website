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
import { useContext, useState } from "react";
import { GrWorkshop } from "react-icons/gr";
import Amir from "../assets/our team/Amir.jpg"
import Mougi from "../assets/our team/Mougi.jpg"
import doc1 from "../assets/vezeeta life/mounir-shaker.jpg"
import doc2 from "../assets/vezeeta life/reham-el-husseiny.jpg"
import doc3 from "../assets/vezeeta life/rana-qandil.jpg"
import doc4 from "../assets/vezeeta life/andrew-maher.jpg"
import doc5 from "../assets/vezeeta life/rana-mahfouz.jpg"



import "./About.css"
import { LanguageContext } from "../context/TranslationContext";
import { Strings } from "../constant/strings";
function About() {
    const [activeKey, setActiveKey] = useState("#link1");

    const handleSelect = (key) => {
        setActiveKey(key);
    };
    const { language, setLanguage } = useContext(LanguageContext);
    return (<>
        <div dir={language == "English" ? "ltr" : "rtl"}>
            <div className="pb-3"
                style={{ backgroundColor: 'rgb(238, 236, 236)' }}
            >
                <div className="container pt-4">
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <h4 className="booknow">{language == "English" ? Strings.about.booknow.en : Strings.about.booknow.ar}</h4>
                            <p className="booktitle">{language == "English" ? Strings.about.bookonline.en : Strings.about.bookonline.ar}</p>
                            <p className="booktitle">{language == "English" ? Strings.about.doctorsnumber.en : Strings.about.doctorsnumber.ar}</p>
                        </div>
                        <div className="col-md-6 col-sm-12 d-flex align-bottom justify-content-center ">
                            <img src={doctors} alt="" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="container text-center ">
                            <div className=" row row-cols-2 row-cols-lg-6 g-2 g-lg-3">
                                <div className={language == "English" ? "col bg-white  border-end rounded-start-3" : "col bg-white  border-end rounded-end-3"}>
                                    <Dropdown>
                                        <Dropdown.Toggle variant="none" id="dropdownMenuButton1" className="w-100">
                                            <p className="text-secondary text-start mb-0"> {language == "English" ? Strings.about.selectspec.en : Strings.about.selectspec.ar}</p>
                                            <p className="d-inline text-primary"><FaUserDoctor fontSize={"15"} /> {language == "English" ? Strings.about.choosespec.en : Strings.about.choosespec.ar}</p>
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
                                            <p className="text-secondary text-start mb-0"> {language == "English" ? Strings.about.city1.en : Strings.about.city1.ar}</p>
                                            <i className="fa-solid fa-location-dot text-primary"></i>
                                            <p className="d-inline text-primary"> <IoLocationOutline fontSize={"18"} /> {language == "English" ? Strings.about.city2.en : Strings.about.city2.ar}</p>
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
                                            <p className="text-secondary text-start mb-0"> {language == "English" ? Strings.about.area1.en : Strings.about.area1.ar}</p>
                                            <i className="fa-solid fa-location-dot text-primary"></i>
                                            <p className="d-inline text-primary"><IoLocationOutline fontSize={"18"} /> {language == "English" ? Strings.about.area2.en : Strings.about.area2.ar}</p>
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
                                            <p className="text-secondary text-start mb-0"> {language == "English" ? Strings.about.insurance1.en : Strings.about.insurance1.ar}</p>
                                            <i className="fa-solid fa-umbrella text-primary"></i>
                                            <p className="d-inline text-primary"><RiUmbrellaLine fontSize={"18"} /> {language == "English" ? Strings.about.insurance2.en : Strings.about.insurance2.ar}</p>
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
                                            <p className="text-secondary text-start mb-0"> {language == "English" ? Strings.about.byname.en : Strings.about.byname.ar}</p>
                                            <i className="fa-solid fa-user-doctor text-primary"></i>
                                            <p className="d-inline text-primary" style={{ fontSize: 'smaller' }}> <FaUserDoctor fontSize={"15"} /> {language == "English" ? Strings.about.docname.en : Strings.about.docname.ar}</p>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu align="end">
                                            <Dropdown.Item className="text-primary" href="#">Action</Dropdown.Item>
                                            <Dropdown.Item className="text-primary" href="#">Another action</Dropdown.Item>
                                            <Dropdown.Item className="text-primary" href="#">Something else here</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                                <button className={language == "English" ? "col bg-danger border-end border-danger rounded-end-3" : "col bg-danger border-end border-danger rounded-start-3"}>
                                    <div className="p-3  text-white fs-4">
                                        <i className="fa-solid fa-magnifying-glass"></i>
                                        <p className="d-inline text-white "><VscSearch fontSize={"30"} /> {language == "English" ? Strings.about.search.en : Strings.about.search.ar}</p>
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
                                    <TbMessageQuestion fontSize={"22"} /> {language == "English" ? Strings.about.about.en : Strings.about.about.ar}
                                </ListGroup.Item>
                                <ListGroup.Item
                                    className={activeKey === "#link2" ? "text-white" : "text-secondary"}
                                    onClick={() => handleSelect("#link2")} action href="#link2" >
                                    <HiUserGroup fontSize={"22"} /> {language == "English" ? Strings.about.team.en : Strings.about.team.ar}
                                </ListGroup.Item>
                                <ListGroup.Item
                                    className={activeKey === "#link3" ? "text-white" : "text-secondary"}
                                    onClick={() => handleSelect("#link3")} action href="#link3" >
                                    <GrWorkshop fontSize={"22"} /> {language == "English" ? Strings.about.life.en : Strings.about.life.ar}
                                </ListGroup.Item>
                                <ListGroup.Item
                                    className={activeKey === "#link4" ? "text-white" : "text-secondary"}
                                    onClick={() => handleSelect("#link4")} action href="#link4" >
                                    <RiUserSearchFill fontSize={"22"} /> {language == "English" ? Strings.about.careers.en : Strings.about.careers.ar}
                                </ListGroup.Item>
                            </ListGroup></div>
                        <div className="col-lg-9 col-sm-12">
                            {activeKey === "#link1" ? <><h3 className="text-primary"> {language == "English" ? Strings.about.about.en : Strings.about.about.ar}</h3>
                                <p className="text-muted">{language == "English" ? Strings.about.abouttitle1.en : Strings.about.abouttitle1.ar}<br />
                                    {language == "English" ? Strings.about.abouttitle2.en : Strings.about.abouttitle2.ar}
                                    <br />
                                    {language == "English" ? Strings.about.abouttitle3.en : Strings.about.abouttitle3.ar}
                                </p>
                                <a href="" className="text-primary fs-6 text-decoration-none" >{language == "English" ? Strings.about.contact.en : Strings.about.contact.ar}</a></> : <></>}

                            {activeKey === "#link2" ? <><h3 className="text-primary">{language == "English" ? Strings.about.team.en : Strings.about.team.ar}</h3>
                                <div className="row">
                                    <div className="col-3"> <img style={{ width: "100%" }} src={Amir} alt="" /></div>
                                    <div className="col-9">
                                        <h3 className="text-primary">{language == "English" ? Strings.about.drbarsom.en : Strings.about.drbarsom.ar}</h3>
                                        <p className="text-secondary no-space-paragraph">{language == "English" ? Strings.about.barsomtext.en : Strings.about.barsomtext.ar}</p>
                                    </div>
                                </div>
                                <div className="row mt-4">
                                    <div className="col-3"> <img style={{ width: "100%" }} src={Mougi} alt="" /></div>
                                    <div className="col-9">
                                        <h3 className="text-primary">{language == "English" ? Strings.about.drmougi.en : Strings.about.drmougi.ar}</h3>
                                        <p className="text-secondary no-space-paragraph">{language == "English" ? Strings.about.mougitext.en : Strings.about.mougitext.ar}</p>
                                    </div>
                                </div>
                            </> : <></>}

                            {activeKey === "#link3" ? <><h3 className="text-primary">{language == "English" ? Strings.about.life.en : Strings.about.life.ar}</h3>
                                <div >
                                    <p className="text-secondary no-space-paragraph">{language == "English" ? Strings.about.lifetext.en : Strings.about.lifetext.ar}</p>
                                    <p className="text-secondary">{language == "English" ? Strings.about.culture.en : Strings.about.culture.ar}</p>
                                    <p className="text-secondary no-space-paragraph">
                                        <ul style={{ listStyleType: "disc" }} className="text-secondary no-space-paragraph">
                                            <li>{language == "English" ? Strings.about.li1.en : Strings.about.li1.ar}</li>
                                            <li>{language == "English" ? Strings.about.li2.en : Strings.about.li2.ar}</li>
                                            <li>{language == "English" ? Strings.about.li3.en : Strings.about.li3.ar}</li>
                                            <li>{language == "English" ? Strings.about.li4.en : Strings.about.li4.ar}</li>
                                            <li>{language == "English" ? Strings.about.li5.en : Strings.about.li5.ar}</li>
                                        </ul>
                                        {language == "English" ? Strings.about.vezfosters.en : Strings.about.vezfosters.ar}<br /><br />

                                        {language == "English" ? Strings.about.vezembrace.en : Strings.about.vezembrace.ar}<br /><br />
                                        {language == "English" ? Strings.about.pastyears.en : Strings.about.pastyears.ar}</p>
                                    <h4 className="text-secondary fw-bold">{language == "English" ? Strings.about.ouremployees.en : Strings.about.ouremployees.ar}</h4>
                                </div>
                                <div className="row mt-4">
                                    <div className="col-4"> <img style={{ width: "100%" }} src={doc1} alt="" /></div>
                                    <div className="col-8">
                                        <h4 className="text-secondary fw-bold">{language == "English" ? Strings.about.mounir.en : Strings.about.mounir.ar}</h4>
                                        <p className="text-secondary no-space-paragraph">{language == "English" ? Strings.about.mounirtext.en : Strings.about.mounirtext.ar}</p>
                                    </div>
                                </div>
                                <div className="row mt-4">
                                    <div className="col-8">
                                        <h4 className="text-secondary fw-bold">{language == "English" ? Strings.about.reham.en : Strings.about.reham.ar}</h4>
                                        <p className="text-secondary no-space-paragraph">{language == "English" ? Strings.about.rehamtext.en : Strings.about.rehamtext.ar}</p>
                                    </div>
                                    <div className="col-4"> <img style={{ width: "100%" }} src={doc2} alt="" /></div>
                                </div>
                                <div className="row mt-4">
                                    <div className="col-4"> <img style={{ width: "100%" }} src={doc3} alt="" /></div>
                                    <div className="col-8">
                                        <h4 className="text-secondary fw-bold">{language == "English" ? Strings.about.rana.en : Strings.about.rana.ar}</h4>
                                        <p className="text-secondary no-space-paragraph">{language == "English" ? Strings.about.ranatext.en : Strings.about.ranatext.ar}</p>
                                    </div>
                                </div>
                                <div className="row mt-4">
                                    <div className="col-8">
                                        <h4 className="text-secondary fw-bold">{language == "English" ? Strings.about.andrew.en : Strings.about.andrew.ar}</h4>
                                        <p className="text-secondary no-space-paragraph">{language == "English" ? Strings.about.andrewtext.en : Strings.about.andrewtext.ar}</p>
                                    </div>
                                    <div className="col-4"> <img style={{ width: "100%" }} src={doc4} alt="" /></div>
                                </div>
                                <div className="row mt-4">
                                    <div className="col-4"> <img style={{ width: "100%" }} src={doc5} alt="" /></div>
                                    <div className="col-8">
                                        <h4 className="text-secondary fw-bold">{language == "English" ? Strings.about.mahfouz.en : Strings.about.mahfouz.ar}</h4>
                                        <p className="text-secondary no-space-paragraph">{language == "English" ? Strings.about.mahfouztext.en : Strings.about.mahfouztext.ar}</p>
                                    </div>
                                </div>
                            </> : <></>}

                        </div>

                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default About;