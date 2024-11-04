import { Dropdown } from "react-bootstrap";
import { SlCalender } from "react-icons/sl";
import { RiCustomerServiceLine } from "react-icons/ri";
import { CiStethoscope } from "react-icons/ci";
import { Link } from "react-router-dom"
import { LanguageContext } from "../context/TranslationContext";
import { useContext } from "react";
import { Strings } from "../constant/strings";

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
        <div className="row g-3">
          {/* Select a Specialty */}
          <div className="col-md-3">
            <Dropdown>
              <Dropdown.Toggle
                variant="outline-primary"
                id="dropdown-specialty"
                className="w-100"
              >
                <CiStethoscope style={{ color: "#007bff", fontSize: "20px" }} />
                {language == "English" ? Strings.searchbar.spec.en : Strings.searchbar.spec.ar}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#">Specialty 1</Dropdown.Item>
                <Dropdown.Item href="#">Specialty 2</Dropdown.Item>
                <Dropdown.Item href="#">Specialty 3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          {/* Choose City */}
          <div className="col-md-3">
            <Dropdown>
              <Dropdown.Toggle
                variant="outline-primary"
                id="dropdown-city"
                className="w-100"
              >
                <i className="fa-solid fa-location-dot me-2"></i>{language == "English" ? Strings.searchbar.city.en : Strings.searchbar.city.ar}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#">City 1</Dropdown.Item>
                <Dropdown.Item href="#">City 2</Dropdown.Item>
                <Dropdown.Item href="#">City 3</Dropdown.Item>
              </Dropdown.Menu>
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

              <Dropdown.Menu>
                <Dropdown.Item href="#">Area 1</Dropdown.Item>
                <Dropdown.Item href="#">Area 2</Dropdown.Item>
                <Dropdown.Item href="#">Area 3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          {/* Doctor Name or Hospital */}
          <div className="col-md-3">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder={language == "English" ? Strings.searchbar.nameorhos.en : Strings.searchbar.nameorhos.ar}
                aria-label={language == "English" ? Strings.searchbar.nameorhos.en : Strings.searchbar.nameorhos.ar}
              />
              <span className="input-group-text">
                <i className="fa-solid fa-user-md"></i>
              </span>
            </div>
          </div>

          {/* Search Button */}
          <div className="col-md-12 text-end">
            <button className="btn btn-danger px-4">
              <Link to="/search">{language == "English" ? Strings.searchbar.search.en : Strings.searchbar.search.ar}</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
