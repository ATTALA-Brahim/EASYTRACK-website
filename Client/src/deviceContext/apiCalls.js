import axios from "axios";
import {
    createDeviceFailure,
    creatDeviceStart,
    createDeviceSuccess,
    deleteDeviceFailure,
    deleteDeviceStart,
    deleteDeviceSuccess,

  getDeviceFailure,
  getDeviceStart,
  getDeviceSuccess,
} from "./DeviceActions";

export const getDevices = async (dispatch) => {
  dispatch(getDeviceStart());
  try {
    const res = await axios.get("/device", {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(getDeviceSuccess(res.data));
  } catch (err) {
    dispatch(getDeviceFailure());
  }
};


//create
export const createDevice = async (device, dispatch) => {
    dispatch(creatDeviceStart());
    try {
      const userId=JSON.parse(localStorage.getItem("user"))._id;
      console.log(userId)
      const res = await axios.post("/device/create/" +userId, device, {
        headers: {
          token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          
        },
        
      });
      dispatch(createDeviceSuccess(res.data));
      
    } catch (err) {
      dispatch(createDeviceFailure());
    }
  };
  
  //delete
  export const deleteDevice = async (id, dispatch) => {
    dispatch(deleteDeviceStart());
    try {
      await axios.delete("/device/" + id, {
        headers: {
          token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        },
      });
      dispatch(deleteDeviceSuccess(id));
    } catch (err) {
      dispatch(deleteDeviceFailure());
    }
  };
// we need get pin by id 
// create pin  using device id 
////////////////////////////////////
//get deviceby id
// create device  using userid


 



