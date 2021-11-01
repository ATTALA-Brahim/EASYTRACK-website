import React from "react";
import { MapContainer, TileLayer, Marker,Popup } from 'react-leaflet'
import { useContext ,useEffect} from "react";
import "./preview.css";
import { PinContext } from "../../pinContext/PinContext";
import {  getPins } from "../../pinContext/apiCalls";



const Preview = () => {





    
  const { pins, dispatch } = useContext(PinContext);
  useEffect(() => {
    getPins(dispatch);
  }, [dispatch]);


  
 

    
  // add popup
   

    return (
		<MapContainer center={[35.203049, -0.650135]} zoom={13} scrollWheelZoom={true}>
  <TileLayer
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />

{pins.map(pin=>(
  
  <Marker 
  key={pin._id}
  
  position={[pin.latitude,pin.longitude]}
  >
    
      <Popup

      
       position={[pin.latitude,pin.longitude]}
        
      
      >
          <div className="custom-popup">
            <h3>{"Device: "+pin.assetnumber}</h3>
            <h3>{"Date: "+pin.updatedate}</h3>
            <h3>{"Lat: "+pin.latitude}</h3>
            <h3>{"Lon: "+pin.longitude}</h3>
            

        </div>

      </Popup>
  
  </Marker>

))}
</MapContainer>
     
    );
};

export default Preview;



