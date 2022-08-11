import React from 'react';
import Boton from '../components/boton';
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook } from 'react-icons/bs';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { LOGIN } from '../config/routes/path';

export default function Registro() {

    const handleClick =() => {
        alert('Registro Google fire up');
    }

    const handleFacebook = () => {
        alert('Registro facebook fire up');
    }

    const googleBtnStyle = {
        backgroundColor: 'rgb(255, 255, 255)',
        color: 'rgb(0, 0, 0 )',
        borderRadius: '5px',
        padding: '10px',
        border: 'none',
        margin: '5px',
        boxShadow: '2px 2px 6px 2px rgb(0 0 0 / 20%)', 
    }

    const facebookBtnStyle = {
        backgroundColor: 'rgb(66, 133, 244)',
        color: 'rgb(255, 255, 255)',
        borderRadius: '5px',
        padding: '10px',
        border: 'none',
        margin: '5px',
        boxShadow: '2px 2px 6px 2px rgb(0 0 0 / 20%)',
    }

  return (
    <div className="container-fluid m-auto mt-5">
        <div className='row lrContainer'>
            <div className="col-md-6 bg-img"></div>
            <div className="col-md-6">
            <div className="m-4 text-center">
                <img src={logo} alt="UrClothes logo" style={{width: '100px'}}/>
            </div>
            <h3 className='text-center'>
                Bienvenido a UrClothes
            </h3>
            <Form className="form-lr mb-4">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formConfirmPassword">
                    <Form.Label>Comprobar Password</Form.Label>
                    <Form.Control type="password" placeholder="Comprobar Password" />
                </Form.Group>
                <Link to={LOGIN} className="mb-3">
                    Tenes una cuenta? Inicia sesión
                </Link>
                
                <Button variant="primary" type="submit" size="lg" style={{width: '100%', marginBottom: '10px', marginTop: '5px'}}>
                    Registrarse
                </Button>
                <div className=" d-flex justify-content-around">
                    <Boton 
                        title='Google' 
                        onClick={handleClick} 
                        styles={googleBtnStyle}
                        iconLeft={<FcGoogle />}
                        />
                    <Boton 
                        title='Facebook' 
                        onClick={handleFacebook}
                        styles={facebookBtnStyle}
                        iconLeft={<BsFacebook />}
                        />
                </div>
            </Form>
            </div>
        </div>



    </div>
  )
}
