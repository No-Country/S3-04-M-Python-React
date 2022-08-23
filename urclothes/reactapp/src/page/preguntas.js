import React from 'react'
import {Form, Button} from 'react-bootstrap';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

export default function Questions () {
  return (
    <div className='container-fluid m-auto'>
    <div className='lrContainer p-3 w-50 mb-3'>
        <h3 className='text-center'>Responde el siguiente cuestionario</h3>
    <Form>
        <Form.Group className='mb-2'>
            <p className='mb-3'>Primera pregunta</p>
           <ButtonGroup className="d-flex flex-column w-50">
            <ToggleButton
            className='mb-3 rounded' type='radio' 
            variant='outline-success'
            name='first'>1</ToggleButton>
            <ToggleButton
            className='mb-3 rounded' type='radio' 
            variant='outline-success'
            name='first'>2</ToggleButton>
            <ToggleButton
            className='mb-3 rounded' type='radio' 
            variant='outline-success'
            name='first'>3</ToggleButton>
            <ToggleButton
            className='mb-3 rounded' type='radio' 
            variant='outline-success'
            name='first'>4</ToggleButton>
           </ButtonGroup>


        </Form.Group>
        <Form.Group className='mb-2'>
            <p className='mb-3'>Segunda pregunta</p>
            <ButtonGroup className="d-flex flex-column w-50">
            <ToggleButton
            className='mb-3 rounded'
            type='radio'
            name='second'
            id='second-1'
            variant='outline-success' 
            >1</ToggleButton>
            
            <ToggleButton
            className='mb-3 rounded'
            type='radio'
            name='second'
            id='second-2'
            variant='outline-success' 
            >2</ToggleButton>
            
            <ToggleButton
            className='mb-3 rounded'
            type='radio'
            name='second'
            id='second-3'
            variant='outline-success' 
            >3</ToggleButton>
            
            <ToggleButton
            className='mb-3 rounded'
            type='radio'
            name='second'
            id='second-4'
            variant='outline-success' 
            >4</ToggleButton>
            </ButtonGroup>
        </Form.Group>
        <Form.Group className='mb-2'>
            <p className='mb-3'>Tercera pregunta</p>
            <ButtonGroup className="d-flex flex-column w-50">
            <ToggleButton
            className='mb-3 rounded'
            type='radio'
            name='third'
            id='third-1'
            variant='outline-success' 
            >1</ToggleButton>            
            <ToggleButton
            className='mb-3 rounded'
            type='radio'
            name='third'
            id='third-2'
            variant='outline-success' 
            >2</ToggleButton>            
            <ToggleButton
            className='mb-3 rounded'
            type='radio'
            name='third'
            id='third-3'
            variant='outline-success' 
            >3</ToggleButton>            
            <ToggleButton
            className='mb-3 rounded'
            type='radio'
            name='third'
            id='third-4'
            variant='outline-success' 
            >4</ToggleButton>
            </ButtonGroup>       
             </Form.Group>
        <Form.Group className='mb-2'>
            <p className='mb-3'>Cuarta pregunta</p>
            <ButtonGroup className="d-flex flex-column w-50">
            <ToggleButton
            className='mb-3 rounded'
            type='radio'
            name='fourth'
            id='fourth-1'
            variant='outline-success' 
            >1</ToggleButton>
            
            <ToggleButton
            className='mb-3 rounded'
            type='radio'
            name='fourth'
            id='fourth-2'
            variant='outline-success' 
            >2</ToggleButton>
            
            <ToggleButton
            className='mb-3 rounded'
            type='radio'
            name='fourth'
            id='fourth-3'
            variant='outline-success' 
            >3</ToggleButton>
            
            <ToggleButton
            className='mb-3 rounded'
            type='radio'
            name='fourth'
            id='fourth-4'
            variant='outline-success' 
            >4</ToggleButton>
            </ButtonGroup>
        </Form.Group>

        <Button as="input" type="submit" value="Enviar" />
    </Form>
    </div>
    </div>
  )
}
