import React from 'react';
import Tarjeta from '../components/tarjeta';
import MapaGoogle from '../components/mapaGoogle';
import  {useAuthContext}  from '../contexts/authContext';
import Navbar from '../components/navbar';


export default function Home() {
    
    const { userName } = useAuthContext();

  
    return (
        <div className="container-fluid">
            <Navbar />
            <div className="container">
                <div className='row'>
                    <div className="col-md-8">                
                        <h1>Bienvenido {userName}</h1>
                        <Tarjeta />
                    </div>
                    <div className="col-md-4">
                        <MapaGoogle />
                    </div>
                </div>
            </div>
        </div>
    )
}

