import React from 'react';
import Tarjeta from '../components/tarjeta';
import MapaGoogle from '../components/mapaGoogle';

const Home = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-8'>
                    <h1>Home</h1>
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

export default Home;