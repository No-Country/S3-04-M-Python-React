import React, {useEffect, useState} from 'react';
import {useJsApiLoader, GoogleMap, Marker, DirectionsRenderer} from "@react-google-maps/api";

import {useClothesContext} from '../contexts/AppProvider';


export default function MapaGoogle({style}) {

  
  const [location, setLocation] = useState({lat: null, lng: null});
  const {dispatch, longitud, latitud} = useClothesContext();

    const {isLoaded} = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  });
 
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
   
  
  


 },[])


  if(!isLoaded){
    return(<div>...</div>)
  }


  return (
    <div className="mapa-google_dnone">
      <GoogleMap 
      mapContainerStyle={{width: "100%", height: "85vh", borderRadius: "10px", ...style}}
      center={{lat: latitud, lng: longitud}}
      zoom={15}>
        <Marker
          position={{lat: latitud, lng: longitud}}

          name={'Me'}
        />
      +

      </GoogleMap>
      
    </div>
    
  )
}
