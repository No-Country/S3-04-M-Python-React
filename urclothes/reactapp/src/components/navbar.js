import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png';


export const navbar = () => {
  return (
    <div>


      
<nav className="navbar bg-light fixed-top">
  <div className="container-fluid">
    <Link className="navbar-brand" to="#"> 
    <img src={logo} alt="UrClothes logo" style={{width: '70px'}}/>
    </Link>

    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">UrClothes</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">


            <Link className="nav-link active" aria-current="page" to="#">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">Mis matchs</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">Perfil</Link>
          </li>
          
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </div>
</nav>
        
    </div>
  )
}

export default navbar;
