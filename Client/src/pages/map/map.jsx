import {useEffect,useContext,React} from 'react'
import { MapContainer, TileLayer, Polyline,Marker} from 'react-leaflet'
import './map.css'
import { PinContext } from "../../pinContext/PinContext";
import {  getPins } from "../../pinContext/apiCalls";


const Map = () => {


  let polyline=[];
 


  const redOptions = { color: 'red' }



  const { pins, dispatch } = useContext(PinContext);
  
  useEffect(() => {
    getPins(dispatch);
    console.log(pins);
    const interval=setInterval(()=>{
      getPins(dispatch)
     },7000)
  
       
     return()=>clearInterval(interval)
  }, [dispatch]);


  pins.map(pin=>{
    
 

    polyline.push([pin.latitude,pin.longitude]);
    
  })
 

 


  return (
    <div className="mapcontainer">
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
  
  </Marker>

))}

<Polyline pathOptions={redOptions} positions={polyline} />


</MapContainer>
  </div> 
  );
};

export default Map;


