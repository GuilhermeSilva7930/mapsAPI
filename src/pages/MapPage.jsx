import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import "./MapPage.css"

const MapPage = () => {

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyB5O8EukphBi5HvIGjipbCq0gsNSwMCMxY"
  })

  const containerStyle = {
    width: '600px',
    height: '600px'
  };

  return (
    <div className='map'>

      <h1 id='texto-principal'>Api do Maps</h1>

      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={{
            lat: -23.488307,
            lng: -46.686481
          }}
          zoom={15}
        >
        </GoogleMap>
      ) : <></>}
    </div>
  )
}

export default MapPage;