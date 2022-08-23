import React from 'react';
import Tarjeta from '../components/tarjeta';
import Boton from '../components/boton';
import  {useAuthContext}  from '../contexts/authContext';


export default function Home() {
    
    const {logout, userName} = useAuthContext();

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
                    <h1>{userName}</h1>
                    <Boton 
                        title='Logout' 
                        onClick={handleLogout} 
                        styles={BtnStyle}
                        />
                    <Tarjeta />
                </div>
                <div className='col-md-4'>
                    <h2>Mapa</h2>
                </div>
            </div>
        </div>
    )
}