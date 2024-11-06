import { Dropdown } from "react-bootstrap";
import { SlCalender } from "react-icons/sl";
import { RiCustomerServiceLine } from "react-icons/ri";
import { CiStethoscope } from "react-icons/ci";
import { Link } from "react-router-dom"
import { LanguageContext } from "../context/TranslationContext";
import { useContext } from "react";
import { Strings } from "../constant/strings";

const goto = (path) => {
  window.location.href = path;
};

export default function DoctorSearchBar() {
  const { language, setLanguage } = useContext(LanguageContext);
  console.log(setLanguage);
  return (
    <div className="container-fluid">
      <div className="container bg-white rounded-3 p-4 shadow-sm ">
        <div className="row align-items-center justify-content-evenly">
          {/* Left Side - Book a Doctor */}
          <div className="col-lg-6 d-flex align-items-center">
            <div className="me-3">
              <i className="fa-solid fa-calendar-plus fa-2x text-primary"></i>
            </div>
            <div>
              <div className="d-flex gap-2 align-items-center">
                <SlCalender style={{ color: "#007bff", fontSize: "20px" }} />
                <h5 className="mb-0 text-primary">{language == "English" ? Strings.searchbar.book.en : Strings.searchbar.book.ar}</h5>
              </div>
              <p className="mb-0 text-secondary">{language == "English" ? Strings.searchbar.examin.en : Strings.searchbar.examin.ar}</p>
            </div>
          </div>
          {/* Right Side - Telehealth */}
          <div className="col-lg-6 d-flex align-items-center">
            <div className="me-3">
              <i className="fa-solid fa-headset fa-2x text-secondary"></i>
            </div>
            <div>
              <div className="d-flex gap-2 align-items-center">
                <RiCustomerServiceLine style={{ fontSize: "20px" }} />

                <h5 className="mb-0 text-secondary">{language == "English" ? Strings.searchbar.teleh.en : Strings.searchbar.teleh.ar}</h5>
              </div>
              <p className="mb-0 text-secondary">
                {language == "English" ? Strings.searchbar.call.en : Strings.searchbar.call.ar}
              </p>
            </div>
          </div>
        </div>
        <hr />
        {/* Search Filters */}
        <div className="row g-2">
          {/* Select a Specialty */}
          <div onClick={() => goto("/about")} className="col-md-3">
            <Dropdown>
              <Dropdown.Toggle
                variant="outline-primary"
                id=""
                className="w-100"
              >
                <CiStethoscope href="/about" style={{ color: "#007bff", fontSize: "20px" }} />
                
                {language == "English" ? Strings.searchbar.spec.en : Strings.searchbar.spec.ar}
              </Dropdown.Toggle>
            </Dropdown>
          </div>

          {/* Choose City */}
          <div  onClick={() => goto("/Teleconsultation")} className="col-md-3">
            <Dropdown>
              <Dropdown.Toggle
                variant="outline-primary"
                
                className="w-100"
              >
                <i  className="fa-solid fa-location-dot me-2"></i>{language == "English" ? Strings.searchbar.city.en : Strings.searchbar.city.ar}
              </Dropdown.Toggle>
            </Dropdown>
          </div>

          {/* Choose Area */}
          <div className="col-md-3">
            <Dropdown>
              <Dropdown.Toggle
                variant="outline-primary"
                id="dropdown-area"
                className="w-100"
              >
                <i className="fa-solid fa-map-marker-alt me-2"></i>{language == "English" ? Strings.searchbar.area.en : Strings.searchbar.area.ar}
              </Dropdown.Toggle>

            
            </Dropdown>
          </div>
         
          <div className="col-md-12 text-end">
            <button className="btn btn-danger px-4">
              <Link to="/search" className="text-white  text-decoration-none "  >  {language == "English" ? Strings.searchbar.search.en : Strings.searchbar.search.ar}</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
