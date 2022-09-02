import React, {useState, useEffect} from 'react'
import {Form, Button} from 'react-bootstrap';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

export default function Questions () {
    const [Window, setWindow] = useState(false);

    useEffect(() => {
      function windowsWidth () {
        const { screenWidth: width, screenHeight: height } = window;
        
        if (window.innerWidth > 715) {return setWindow(false)}
        else {return setWindow(true)}
      }
    
      
      window.addEventListener('resize', windowsWidth);
    return () => window.removeEventListener('resize', windowsWidth);
    }, [])
    

  return (
    <div className='container-fluid m-auto'>
    <div className={Window? 'lrContainer p-3 w-75 mb-3':'lrContainer p-3 w-50 mb-3'}>
        <h3 className='text-center'>Responde el siguiente cuestionario</h3>
    <Form>
        <Form.Group className='mb-2'>
            <p className='mb-3'>¿Qué color crees que te define mejor?</p>
           <ButtonGroup className='w-100 d-flex flex-column align-items-center ms-lg-4'>
            <div className="row mb-3 w-100">
            <ToggleButton
            className='mb-3 mb-lg-0 ms-2 ms-md-4 ms-lg-0 rounded col-lg-5 col-11' type='radio' 
            variant='outline-success'
            name='first'>Rojo</ToggleButton>
            <ToggleButton
            className='ms-2 ms-md-4 ms-lg-5 rounded col-lg-5 col-11' type='radio' 
            variant='outline-success'
            name='first'>Azul</ToggleButton>
            </div>
            <div className='row mb-3 w-100'>
            <ToggleButton
            className='mb-3 mb-lg-0 ms-2 ms-md-4 ms-lg-0 rounded col-lg-5 col-11' type='radio' 
            variant='outline-success'
            name='first'>Amarillo</ToggleButton>
            <ToggleButton
            className='ms-2 ms-md-4 ms-lg-5 rounded col-lg-5 col-11' type='radio' 
            variant='outline-success'
            name='first'>Verde</ToggleButton>
            </div>
           </ButtonGroup>


        </Form.Group>
        <Form.Group className='mb-2'>
            <p className='mb-3'>Elige tu estación favorita del año</p>
            <ButtonGroup className="w-100 d-flex flex-column align-items-center ms-lg-4">
                <div className="row mb-3 w-100">
            <ToggleButton
            className='mb-3 mb-lg-0 ms-2 ms-md-4 ms-lg-0 rounded col-lg-5 col-11'
            type='radio'
            name='second'
            id='second-1'
            variant='outline-success' 
            >Invierno</ToggleButton>
            
            <ToggleButton
            className='ms-2 ms-md-4 ms-lg-5 rounded col-lg-5 col-11'
            type='radio'
            name='second'
            id='second-2'
            variant='outline-success' 
            >Verano</ToggleButton>
            </div>
            <div className="row mb-3 w-100">
            <ToggleButton
            className='mb-3 mb-lg-0 ms-2 ms-md-4 ms-lg-0 rounded col-lg-5 col-11'
            type='radio'
            name='second'
            id='second-3'
            variant='outline-success' 
            >Otoño</ToggleButton>
            
            <ToggleButton
            className='ms-2 ms-md-4 ms-lg-5 rounded col-lg-5 col-11'
            type='radio'
            name='second'
            id='second-4'
            variant='outline-success' 
            >Primavera</ToggleButton>
            </div>
            </ButtonGroup>
        </Form.Group>
        <Form.Group className='mb-2'>
            <p className='mb-3'>¿Con cuál de estos diseños te identificas más?</p>
            <ButtonGroup className="w-100 d-flex flex-column align-items-center ms-lg-4">
                <div className="row mb-3 w-100">
            <ToggleButton
            className='mb-3 mb-lg-0 ms-2 ms-md-4 ms-lg-0 rounded col-lg-5 col-11'
            type='radio'
            name='third'
            id='third-1'
            variant='outline-success' 
            >Animal Print</ToggleButton>  

            <ToggleButton
            className='ms-2 ms-md-4 ms-lg-5 rounded col-lg-5 col-11'
            type='radio'
            name='third'
            id='third-2'
            variant='outline-success' 
            >Liso</ToggleButton>
            </div>
            <div className="row mb-3 w-100">
            <ToggleButton
            className='mb-3 mb-lg-0 ms-2 ms-md-4 ms-lg-0 rounded col-lg-5 col-11'
            type='radio'
            name='third'
            id='third-3'
            variant='outline-success' 
            >Puntos</ToggleButton>

            <ToggleButton
            className='ms-2 ms-md-4 ms-lg-5 rounded col-lg-5 col-11'
            type='radio'
            name='third'
            id='third-4'
            variant='outline-success' 
            >Rayas</ToggleButton>
            </div>
            </ButtonGroup>       
             </Form.Group>
        <Form.Group className='mb-2'>
            <p className='mb-3'>¿Practicas algún deporte?</p>
            <ButtonGroup className="w-100 d-flex flex-column align-items-center ms-lg-4">
                <div className="row mb-3 w-100">
            <ToggleButton
            className='mb-3 mb-lg-0 ms-2 ms-md-4 ms-lg-0 rounded col-lg-5 col-11'
            type='radio'
            name='fourth'
            id='fourth-1'
            variant='outline-success' 
            >No practico deportes</ToggleButton>
            
            <ToggleButton
            className='ms-2 ms-md-4 ms-lg-5 rounded col-lg-5 col-11'
            type='radio'
            name='fourth'
            id='fourth-2'
            variant='outline-success' 
            >Practico fútbol</ToggleButton>
            </div>
            <div className="row mb-3 w-100">
            <ToggleButton
            className='mb-3 mb-lg-0 ms-2 ms-md-4 ms-lg-0 rounded col-lg-5 col-11'
            type='radio'
            name='fourth'
            id='fourth-3'
            variant='outline-success' 
            >Practico basketball</ToggleButton>
            
            <ToggleButton
            className='ms-2 ms-md-4 ms-lg-5 rounded col-lg-5 col-11'
            type='radio'
            name='fourth'
            id='fourth-4'
            variant='outline-success' 
            >Practico yoga</ToggleButton>
            </div>
            </ButtonGroup>
        </Form.Group>
        <Form.Group className='d-flex justify-content-end'>
        <Button as="input" type="submit" value="Enviar" />
        </Form.Group>
    </Form>
    </div>
    </div>
  )
}
