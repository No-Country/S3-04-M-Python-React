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
          if(longitud != null && latitud != null){
            setLocation({lat:latitud, lng: longitud});
          } else {setLocation({lat: position.coords.latitude, lng:position.coords.longitude})}
        
          }, function(error) {

          console.error("Error Code = " + error.code + " - " + error.message);

        });
      }
    
    }
   

  getLocation();
   
  


 },[])

console.log(location)

  if(!isLoaded){
    return(<div>...</div>)
  }


  return (
    <div className="mapa-google_dnone">
      <GoogleMap 
      mapContainerStyle={{width: "100%", height: "85vh", borderRadius: "10px", ...style}}
      center={location}
      zoom={15}>
        <Marker
          position={location}

          name={'Me'}
        />
      +

      </GoogleMap>
      
    </div>
    
  )
}
