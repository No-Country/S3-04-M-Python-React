import React, {useEffect, useState} from 'react';
import {Form, Button, FormGroup, FormControl, FormText, FormLabel} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import  {useAuthContext}  from '../contexts/authContext';
import Geocode from "react-geocode";
import {TiArrowBack} from "react-icons/ti";
import { useNavigate } from 'react-router-dom';

export const Profile = () => {
  const [Window, setWindow] = useState(false);
  const {userName} = useAuthContext();
  const [location, setLocation] = useState({lat: null, lng: null}); 
  const [areaName, setAreaName] = useState({country: "", state: "", city: ""});

 const navigate = useNavigate();

/*Screensize*/
  useEffect(() => {
    function windowsWidth () {
      const { screenWidth: width, screenHeight: height } = window;
      
      if (window.innerWidth > 702) {return setWindow(false)}
      else {return setWindow(true)}
    }
    
    window.addEventListener('resize', windowsWidth);
  return () => window.removeEventListener('resize', windowsWidth);
  }, [])
 
 /*GetLocation*/ 
 Geocode.setApiKey("AIzaSyCeNc6LOuvYh6URl6ow4IPj066qhBGfrQo");
 Geocode.setLanguage("es");

 useEffect(() => {
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function showPosition(position){
        setLocation({lat: position.coords.latitude, lng:position.coords.longitude})}, function(error) {
        console.error("Error Code = " + error.code + " - " + error.message);
      });
    }
  }
 
  getLocation();

  if(location.lat != null && location.lng != null){
    Geocode.fromLatLng(`${location.lat}`, `${location.lng}`).then(
      (response) => {
        let city, state, country;
        for (let i = 0; i < response.results[0].address_components.length; i++) {
          for (let j = 0; j < response.results[0].address_components[i].types.length; j++) {
            switch (response.results[0].address_components[i].types[j]) {
              case "locality":
                setAreaName({country: areaName.country, state:areaName.state, city:response.results[0].address_components[i].long_name});
                break;
              case "administrative_area_level_1":
                setAreaName({country: areaName.country, state:response.results[0].address_components[i].long_name, city:areaName.city});
                break;
              case "country":
                setAreaName({country: response.results[0].address_components[i].long_name, state:areaName.state, city:areaName.city});
                break;
            }
          }
        }
console.log(areaName);
      },
      (error) => {
        console.error(error);
      }
    );
  }


}, [])






  const color = {
    red: '#FF000',
    green: '#00FF00',
    blue: '#0000FF',
    black: '#000000',
    grayFont: '#f8f9fa' 
  }

  return (
    <div className="container-fluid py-3" style={{background: '#0070b8'}}>
        <div className='lrContainer mt-0 position-relative' style={{width: !Window ? 'clamp(685px, 75vw, 756px)': '95vw', background: 'white' }}>
          <button className='backButton' onClick={(e) => {
            e.preventDefault();
            navigate('/home');}}>
            <TiArrowBack size={30}/>
          </button>

          <div className='position-relative'> {/*profile pic and name*/}
            <div className='rounded-top' style={{background: color.black, height: '200px'}}>

            </div>
            <div style={{background: color.grayFont, height: '100px'}}>

            </div>
            <div className='position-absolute ' style={{top:'28%', width:'100%'}}> 
              <img style={{width:'151.2px'}} className='d-block mx-auto border border-4 border-white' src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp' alt='ProfilePic' />
              <p className='fs-5 text-center fw-semibold mb-0 text-capitalize'>{userName}</p>
              <p className='fs-6 text-center fw-semibold'>Random Location</p>
            </div>

          </div>
          <div style={{width:'100%'}} > {/*Change name, email, and password*/}
          <p className='fs-5 fw-semibold mt-3 ms-3'>Personal Info</p>
          <Form style={{width:'96%', background: color.grayFont}} className='mx-auto pt-1 pb-2 rounded'>
            <FormGroup className='d-flex'>
            <FormGroup className='ms-2 mb-2' style={{width:'48%'}}>
              <FormLabel className = 'ms-2 mb-1'>Name</FormLabel>
              <FormControl type = 'text' />
            </FormGroup>
            <FormGroup className='ms-2 mb-2' style={{width:'48%'}}>
              <FormLabel className = 'ms-2 mb-1'>Last name</FormLabel>
              <FormControl type = 'text'/>
            </FormGroup>
            </FormGroup>
            <FormGroup className='ms-2 mb-2'>
              <FormLabel className = 'ms-2 mb-1'>Email</FormLabel>
              <FormControl type = 'email' style={{width:'48%'}}/>
            </FormGroup>
            <FormGroup className='ms-2 mb-2'>
              <FormLabel className = 'ms-2 mb-1'>Password</FormLabel>
              <FormControl type = 'password' style={{width:'48%'}}/>
            </FormGroup>
            <Form.Group className='d-flex justify-content-end me-3'>
              <Button type="submit" className='fs-6' style={{width:'105px'}}>Enviar</Button>
            </Form.Group>            
          </Form>
          </div>
          <div> {/*Matches*/}
             <div className='d-flex justify-content-between mx-auto mt-3' style={{width:'96%'}}>
              <p className='fs-5 fw-semibold'> Recent Matches</p>
              <Link className='fs-5 fw-normal text-muted text-decoration-none' to='#'>See all matches</Link>
             </div>

             {/*Displaying card*/}
             <div style={{height: '500px'}}>
              {/* four matches */}
             </div>
          </div>
        </div>
    </div>
  )
}
