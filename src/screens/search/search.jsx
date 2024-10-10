import './search.css';  
import { CiSearch } from "react-icons/ci";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaUmbrella } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";


export default function Search() {
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

      <section className="section55" style={{ backgroundColor: 'rgb(223, 223, 223)' }}>
       <div className="container">
            <p className="text-primary d-inline pSmall">Vezeeta </p>
            <p className="d-inline pSmall">Doctor Mostafa Nabil Eldsoky</p>

        <div className="row">
          <div className="col-lg-10 col-md-12 h-25 px-0">
            <div className="bg-white mb-3 pb-4 rounded-2">
              <div className="row">
                <div className="col-3">
                  <div className="ms-3 mt-3">
                    <img className="rounded-circle img-fluid" src="/clinic-muhammad-almessry-spinal-surgery_20190507130902275.jpg" alt="Doctor" />
                  </div>
                </div>
                <div className="col-9 mt-3">
                  <h4 className="text-secondary">Doctor Ahmed Mohamed Farid</h4>
                  <h6 className="text-secondary">
                    Consultant of pediatric surgery Cairo University Children's Hospital and consultant of pediatric Genitourinary, Laparoscopic, and Oncosurgery
                  </h6>
                  <a href="#" className="docLinks">Pediatric Surgeon</a>
                  <p className="d-inline docLinks">Specialized in</p>
                  <a href="#" className="docLinks">Pediatric General Surgery</a>,
                  <a href="#" className="docLinks">Pediatric Urology Surgery</a>,
                  <a href="#" className="docLinks">Pediatric Oncology Surgery</a>,
                  <a href="#" className="docLinks">Pediatric Gastroenterological Surgery</a>
                  <br />
                  <FaStar size={18} style={{ color: 'gold' }} />
                  <FaStar size={18} style={{ color: 'gold' }} />
                  <FaStar size={18} style={{ color: 'gold' }} />
                  <FaStar size={18} style={{ color: 'gold' }} />
                  <FaStar size={18} style={{ color: 'gold' }} />
                  <a href="#" className="docLinks">Show all reviews</a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-2 col-md-12 h-25 text-center position-sticky top-0" style={{ backgroundColor: 'rgb(223, 223, 223)' }}>
            <div className="bg-white rounded-2 overflow-hidden">
              <h6 className="bg-primary text-white py-1">Filters</h6>
              <p id="toggle-title" className="g">Title</p>
              <div id="title-inputs">
                <div>
                  <input id="Professors" type="checkbox" />
                  <label htmlFor="Professors">Professors</label>
                </div>
                <div>
                  <input id="lecturers" type="checkbox" />
                  <label htmlFor="lecturers">Lecturers</label>
                </div>
                <div>
                  <input id="consultant" type="checkbox" />
                  <label htmlFor="consultant">Consultant</label>
                </div>
                <div>
                  <input id="specialist" type="checkbox" />
                  <label htmlFor="specialist">Specialist</label>
                </div>
              </div>
              <hr />
              <p id="toggle-title2" className="g">Gender</p>
              <div id="title-inputs2">
                <div>
                  <input id="Mail" type="checkbox" />
                  <label htmlFor="Mail">Mail</label>
                </div>
                <div>
                  <input id="Femail" type="checkbox" />
                  <label htmlFor="Femail">Femail</label>
                </div>
              </div>
            </div>
          </div>

          {/* Second Doctor's Info */}
          <div className="col-lg-10 col-md-12 h-25 px-0">
            <div className="bg-white mb-3 pb-4 rounded-2">
              <div className="row">
                <div className="col-3">
                  <div className="ms-3 mt-3">
                    <img className="rounded-circle img-fluid" src="/ahmed-mohamed-farid-oncology-surgery_20240720171132682.jpg" alt="Doctor" />
                  </div>
                </div>
                <div className="col-9 mt-3">
                  <h4 className="text-secondary">Doctor Mostafa Nabil Eldsoky</h4>
                  <h6 className="text-secondary">
                    Consultant of pediatric surgery Cairo University Children's Hospital and consultant of pediatric Genitourinary, Laparoscopic, and Oncosurgery
                  </h6>
                  <a href="#" className="docLinks">Pediatric Surgeon</a>
                  <p className="d-inline docLinks">Specialized in</p>
                  <a href="#" className="docLinks">Pediatric General Surgery</a>,
                  <a href="#" className="docLinks">Pediatric Urology Surgery</a>,
                  <a href="#" className="docLinks">Pediatric Oncology Surgery</a>,
                  <a href="#" className="docLinks">Pediatric Gastroenterological Surgery</a>
                  <br />
                  <FaStar size={18} style={{ color: 'gold' }} />
                  <FaStar size={18} style={{ color: 'gold' }} />
                  <FaStar size={18} style={{ color: 'gold' }} />
                  <FaStar size={18} style={{ color: 'gold' }} />
                  <FaStar size={18} style={{ color: 'gold' }} />
                  <a href="#" className="docLinks">Show all reviews</a>
                </div>
              </div>
            </div>
          </div>

          {/* Third Doctor's Info */}
          <div className="col-lg-10 col-md-12 h-25 px-0">
            <div className="bg-white mb-3 pb-4 rounded-2">
              <div className="row">
                <div className="col-3">
                  <div className="ms-3 mt-3">
                    <img className="rounded-circle img-fluid" src="/doctor-mohamed-said-elgamal-cardiology_20201115173019537.jpg" alt="Doctor" />
                  </div>
                </div>
                <div className="col-9 mt-3">
                  <h4 className="text-secondary">Doctor Khaled Gamal Elnoby</h4>
                  <h6 className="text-secondary">
                    Consultant of pediatric surgery Cairo University Children's Hospital and consultant of pediatric Genitourinary, Laparoscopic, and Oncosurgery
                  </h6>
                  <a href="#" className="docLinks">Pediatric Surgeon</a>
                  <p className="d-inline docLinks">Specialized in</p>
                  <a href="#" className="docLinks">Pediatric General Surgery</a>,
                  <a href="#" className="docLinks">Pediatric Urology Surgery</a>,
                  <a href="#" className="docLinks">Pediatric Oncology Surgery</a>,
                  <a href="#" className="docLinks">Pediatric Gastroenterological Surgery</a>
                  <br />
                  <i style={{ color: 'gold' }} className="fa-solid fa-star colored"></i>
                  <i style={{ color: 'gold' }} className="fa-solid fa-star colored"></i>
                  <i style={{ color: 'gold' }} className="fa-solid fa-star colored"></i>
                  <i style={{ color: 'gold' }} className="fa-solid fa-star colored"></i>
                  <i style={{ color: 'gold' }} className="fa-solid fa-star colored"></i>
                  <a href="#" className="docLinks">Show all reviews</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
