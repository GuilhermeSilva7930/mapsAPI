import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import "./MapPage.css"

const MapPage = () => {

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyB5O8EukphBi5HvIGjipbCq0gsNSwMCMxY"
  })

  const position = {
    lat: -23.497031,
    lng: -46.692509
  }

  return (
    <div className='map'>
      <h1 id='texto-principal'>Api do Maps</h1>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "100%" }}
          center={position}
          zoom={15}
        >
          <Marker position={position} options={{
            label: {
              text: "Mc Donalds",
              className: "map-marker"
            },
          }}/>
        </GoogleMap>
      ) : <></>}
    </div>
  )
}

export default MapPage;