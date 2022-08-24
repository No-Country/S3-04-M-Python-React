import React, {useEffect, useState} from 'react';
import {useJsApiLoader, GoogleMap, Marker, DirectionsRenderer} from "@react-google-maps/api"


export default function MapaGoogle() {

  
  const [location, setLocation] = useState({lat: null, lng: null});
  const [Destiny, setDestiny] = useState(null);
 

    const {isLoaded} = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: ['places']
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
    async function calculateRoute() {
    
      // eslint-disable-next-line no-undef
      const directionsService = new google.maps.DirectionsService()
      const results = await directionsService.route({
        origin: location,
        destination: {
          lat:  10.502219280479151, 
          lng: -66.90413403673223},
        // eslint-disable-next-line no-undef
        travelMode: google.maps.TravelMode.DRIVING,
      })
      setDestiny(results)

    }

    calculateRoute();


 },[])


console.log(location, Destiny);

// setDestiny(
  
// )


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
        <DirectionsRenderer directions={Destiny}/>

      </GoogleMap>
      
    </div>
    
  )
}
