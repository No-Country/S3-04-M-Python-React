import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Questions () {
    const [Window, setWindow] = useState(false);
    const [answer, setAnswer] = useState({
        first: null,
        second: null,
        third: null,
        fourth: null
    })
    const [able, setAble] = useState(false);

    useEffect(() => {
        if (answer.first != null && answer.second != null && answer.third != null && answer.fourth != null) 
        {setAble(true);}
        else {setAble(false);}  
      
      
    function windowsWidth () {
        const { screenWidth: width, screenHeight: height } = window;
        
        if (window.innerWidth > 786) {return setWindow(false)}
        else {return setWindow(true)}
      }
    
      
      window.addEventListener('resize', windowsWidth);
    return () => window.removeEventListener('resize', windowsWidth);
    }, [])
    

    console.log(able);

    const sendInfo = (e) => {
        e.preventDefault();

        useNavigate('/home');
    }
    


  return (
    <div className='container-fluid m-auto py-2' style={{background: "#0070b8"}}>
    <div className={Window? 'lrContainer p-3 w-75 mb-3':'lrContainer p-3 w-50 mb-3'} style={{background: "white"}}>
        <h3 className='text-center'>Responde el siguiente cuestionario</h3>
    <form onSubmit={sendInfo}>
        <p className='mb-2'>¿Qué color crees que te define mejor?</p>
        <div className='inputContainer mb-3' onChange = {(e) => setAnswer({first: e.target.value, second: answer.second, third: answer.third, fourth: answer.fourth})}>

            <input type='radio' id='first-1' className='radioButtons' value='Rojo' name='first'/>
            <label htmlFor='first-1' className="radioLabel">Rojo</label>
            
            <input type='radio' id='first-2' className='radioButtons' value='Azul' name='first'/>
            <label htmlFor='first-2' className="radioLabel">Azul</label>

            <input type='radio' id='first-3' className='radioButtons' value='Amarillo' name='first'/>
            <label htmlFor='first-3' className="radioLabel">Amarillo</label>

            <input type='radio' id='first-4' className='radioButtons' value='Verde' name='first'/>
            <label htmlFor='first-4' className="radioLabel">Verde</label>
        </div>
        
        <p className='mb-2'>Elige tu estación favorita del año</p>
        <div className='inputContainer mb-3' onChange = {(e) => setAnswer({first: answer.first, second: e.target.value, third: answer.third, fourth: answer.fourth})}>
            
            <input type='radio' id='second-1' className='radioButtons' value='Invierno' name='second'/>
            <label htmlFor='second-1' className="radioLabel">Invierno</label>
            
            <input type='radio' id='second-2' className='radioButtons' value='Verano' name='second'/>
            <label htmlFor='second-2' className="radioLabel">Verano</label>
            
            <input type='radio' id='second-3' className='radioButtons' value='Otoño' name='second'/>
            <label htmlFor='second-3' className="radioLabel">Otoño</label>
            
            <input type='radio' id='second-4' className='radioButtons' value='Primavera' name='second'/>
            <label htmlFor='second-4' className="radioLabel">Primavera</label>
        </div>
        
        <p className='mb-2'>¿Con cuál de estos diseños te identificas más?</p>
        <div className='inputContainer mb-3' onChange = {(e) => setAnswer({first: answer.first, second: answer.second, third: e.target.value, fourth: answer.fourth})}>

            <input type='radio' id='third-1' className='radioButtons' value='Animal Print' name='third'/>
            <label htmlFor='third-1' className="radioLabel">Animal Print</label>
            
            <input type='radio' id='third-2' className='radioButtons' value='Liso' name='third'/>
            <label htmlFor='third-2' className="radioLabel">Liso</label>
            
            <input type='radio' id='third-3' className='radioButtons' value='Puntos' name='third'/>
            <label htmlFor='third-3' className="radioLabel">Puntos</label>
            
            <input type='radio' id='third-4' className='radioButtons' value='Rayas' name='third'/>
            <label htmlFor='third-4' className="radioLabel">Rayas</label>
        </div>

        <p className='mb-2'>¿Practicas algún deporte?</p>
        <div className='inputContainer mb-3' onChange = {(e) => setAnswer({first: answer.first, second: answer.second, third: answer.third, fourth: e.target.value})}>
            
            <input type='radio' id='fourth-1' className='radioButtons' value='No practico deportes' name='fourth'/>
            <label htmlFor='fourth-1' className="radioLabel">No practico deportes</label>
            
            <input type='radio' id='fourth-2' className='radioButtons' value='Practico fútbol' name='fourth'/>
            <label htmlFor='fourth-2' className="radioLabel">Practico fútbol</label>
            
            <input type='radio' id='fourth-3' className='radioButtons' value='Practico basketball' name='fourth'/>
            <label htmlFor='fourth-3' className="radioLabel">Practico basketball</label>
            
            <input type='radio' id='fourth-4' className='radioButtons' value='Practico yoga' name='fourth'/>
            <label htmlFor='fourth-4' className="radioLabel">Practico yoga</label>
        </div>
        <div style={{display: "flex", width: "100%", justifyContent: "flex-end"}}>
        <input type={'submit'} className='btn btn-primary px-5 me-2' disabled={!able}/>
        </div>
    </form>
    </div>
    </div>
  )
}
