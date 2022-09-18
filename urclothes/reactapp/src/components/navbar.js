import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useAuthContext } from "../contexts/authContext";
import Boton from "./boton";

export const Navbar = () => {
  const { logout, isAuthenticated } = useAuthContext();

  const handleLogout = () => {
    logout();
    // alert("Gracias por ");
  };


const BtnStyle = {
    backgroundColor: 'rgb(255, 255, 255)',
    color: 'rgb(0, 0, 0 )',
    borderRadius: '5px',
    padding: '10px',
    border: 'none',
    margin: '0px',
    boxShadow: '2px 2px 6px 2px rgb(0 0 0 / 20%)',  
}

  return (
    <nav className="navbar sticky-top shadow-none">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/home">
          <img src={logo} alt="UrClothes logo" style={{ width: "60px" }} />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          style={{ border: "none" }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <div className="d-flex align-items-center">
              <img
                src={logo}
                alt="UrClothes logo"
                style={{ width: "50px", marginRight: "8px" }}
              />
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                UrClothes
              </h5>
            </div>


            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 mb-2">
              <li className="nav-item">
                <Link className="nav-link fs-4" aria-current="page" to="#">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-4" to="#">
                  Matches
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-4" to="/home/profile">
                  Perfil
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-4" to="/home/about">
                  About us
                </Link>
              </li>
            </ul>
            {!isAuthenticated ? null : (
              <Boton title="Logout" onClick={handleLogout} styles={BtnStyle} />
            )}
            {/* <form className="d-flex" role="search">
              <input
                className="search-form me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
