import React, {useEffect, useState} from 'react';
import {useJsApiLoader, GoogleMap, Marker} from "@react-google-maps/api"

export default function MapaGoogle() {
  
  const [location, setLocation] = useState({lat: null, lng: null});

    const {isLoaded} = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  })

 
useEffect(() => {
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, function(error) {

        console.error("Error Code = " + error.code + " - " + error.message);

      });
    }
  }

  const showPosition = (position) => {

    setLocation({lat: position.coords.latitude, lng:position.coords.longitude});
    
  }

  getLocation();
 },[])
  

  if(!isLoaded){
    return(<div>...</div>)
  }


  return (
    <div>
      <GoogleMap mapContainerStyle={{width: "100%", height: "100vh", borderRadius: "10px"}}
      center={location}
      zoom={15}>
        <Marker

          position={location}

          name={'Me'}

        />

      </GoogleMap>
    </div>
    
  )
}
