import React from 'react'
import {Form, Button} from 'react-bootstrap';

export default function Questions () {
  return (
    <div className='container-fluid m-auto'>
    <div className='lrContainer p-3 w-50'>
        <h3>Responde el siguiente cuestionario</h3>
    <Form>
        <Form.Group className='mb-4'>
            <Form.Text>Primera pregunta</Form.Text>
            <Form.Check
            type='radio'
            name='first'
            id='first-1'
            class="btn-check" 
            />
            <Form.Check.Label className='btn btn-outline-success' htmlFor='first-1'>1</Form.Check.Label>
            
            <Form.Check
            type='radio'
            name='first'
            id='first-2'
            class="btn-check" 
            />
            <Form.Check.Label className='btn btn-outline-success' htmlFor='first-2'>2</Form.Check.Label>
            
            <Form.Check
            type='radio'
            name='first'
            id='first-3'
            class="btn-check" 
            />
            <Form.Check.Label className='btn btn-outline-success' htmlFor='first-3'>3</Form.Check.Label>
            
            <Form.Check
            type='radio'
            name='first'
            id='first-4'
            class="btn-check" 
            />
            <Form.Check.Label className='btn btn-outline-success' htmlFor='first-4'>4</Form.Check.Label>
        </Form.Group>
        <Form.Group className='mb-4'>
            <Form.Text>Segunda pregunta</Form.Text>
            <Form.Check
            type='radio'
            name='second'
            id='second-1'
            class="btn-check" 
            />
            <Form.Check.Label className='btn btn-outline-success' htmlFor='second-1'>1</Form.Check.Label>
            
            <Form.Check
            type='radio'
            name='second'
            id='second-2'
            class="btn-check" 
            />
            <Form.Check.Label className='btn btn-outline-success' htmlFor='second-2'>2</Form.Check.Label>
            
            <Form.Check
            type='radio'
            name='second'
            id='second-3'
            class="btn-check" 
            />
            <Form.Check.Label className='btn btn-outline-success' htmlFor='second-3'>3</Form.Check.Label>
            
            <Form.Check
            type='radio'
            name='second'
            id='second-4'
            class="btn-check" 
            />
            <Form.Check.Label className='btn btn-outline-success' htmlFor='second-4'>4</Form.Check.Label>
        </Form.Group>
        <Form.Group className='mb-4'>
            <Form.Text>Tercera pregunta</Form.Text>
            <Form.Check
            type='radio'
            name='third'
            id='third-1'
            class="btn-check" 
            />
            <Form.Check.Label className='btn btn-outline-success' htmlFor='third-1'>1</Form.Check.Label>
            
            <Form.Check
            type='radio'
            name='third'
            id='third-2'
            class="btn-check" 
            />
            <Form.Check.Label className='btn btn-outline-success' htmlFor='third-2'>2</Form.Check.Label>
            
            <Form.Check
            type='radio'
            name='third'
            id='third-3'
            class="btn-check" 
            />
            <Form.Check.Label className='btn btn-outline-success' htmlFor='third-3'>3</Form.Check.Label>
            
            <Form.Check
            type='radio'
            name='third'
            id='third-4'
            class="btn-check" 
            />
            <Form.Check.Label className='btn btn-outline-success' htmlFor='third-4'>4</Form.Check.Label>
        </Form.Group>
        <Form.Group className='mb-4'>
            <Form.Text>Cuarta pregunta</Form.Text>
            <Form.Check
            type='radio'
            name='fourth'
            id='fourth-1'
            class="btn-check" 
            />
            <Form.Check.Label className='btn btn-outline-success' htmlFor='fourth-1'>1</Form.Check.Label>
            
            <Form.Check
            type='radio'
            name='fourth'
            id='fourth-2'
            class="btn-check" 
            />
            <Form.Check.Label className='btn btn-outline-success' htmlFor='fourth-2'>2</Form.Check.Label>
            
            <Form.Check
            type='radio'
            name='fourth'
            id='fourth-3'
            class="btn-check" 
            />
            <Form.Check.Label className='btn btn-outline-success' htmlFor='fourth-3'>3</Form.Check.Label>
            
            <Form.Check
            type='radio'
            name='fourth'
            id='fourth-4'
            class="btn-check" 
            />
            <Form.Check.Label className='btn btn-outline-success' htmlFor='fourth-4'>4</Form.Check.Label>
        </Form.Group>
    </Form>
    </div>
    </div>
  )
}
