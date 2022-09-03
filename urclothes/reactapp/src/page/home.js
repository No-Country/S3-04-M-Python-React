import React from "react";
import Tarjeta from "../components/tarjeta";
import MapaGoogle from "../components/mapaGoogle";
import { useAuthContext } from "../contexts/authContext";
import Navbar from "../components/navbar";
import Boton from "../components/boton";
import Footer from "./footer";

export default function Home() {
  const { userName } = useAuthContext();

    const BtnStyle = {
        backgroundColor: 'rgb(255, 255, 255)',
        color: 'rgb(0, 0, 0 )',
        borderRadius: '5px',
        padding: '10px',
        border: 'none',
        margin: '5px',
        boxShadow: '2px 2px 6px 2px rgb(0 0 0 / 20%)',  
    }

  
    return (
        <div className="container-fluid p-0">
            <Navbar />
            <div className="container">
            <span className="d-block mb-2 text-capitalize fs-3 fw-bold text-center" >Bienvenido {userName}</span>
                <div className='row'>
                    <div className="col-xxl-8 col-lg-6">                
                        <Tarjeta />
                    </div>
                    <div className="d-none d-lg-block col-md-4 col-lg-6 col-xxl-4">
                         <MapaGoogle /> 
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
