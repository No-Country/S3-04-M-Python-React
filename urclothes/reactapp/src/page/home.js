import React from 'react';
import Tarjeta from '../components/tarjeta';
import MapaGoogle from '../components/mapaGoogle';
import Boton from '../components/boton';
import  {useAuthContext}  from '../contexts/authContext';
import Navbar from '../components/navbar';


export default function Home() {
    
    const {logout} = useAuthContext();

    const handleLogout = () => {
        logout();
    }

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
        <div className='container'>
            <div className='row'>
                <div className='col-md-8'>
                    

                    <h1>Home</h1>
                    <Boton 
                        title='Logout' 
                        onClick={handleLogout} 
                        styles={BtnStyle}
                        />
                    <Tarjeta />
                </div>
                <div className='col-md-4'>
                    <h2>Mapa</h2>
                    <MapaGoogle />
                </div>
            </div>
        </div>
    )
}