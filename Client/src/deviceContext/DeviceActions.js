export const getDeviceStart = () => ({
    type: "GET_DEVICE_START",
  });
  
  export const getDeviceSuccess = (devices) => ({
    type: "GET_DEVICE_SUCCESS",
    payload: devices,
  });
  
  export const getDeviceFailure = () => ({
    type: "GET_DEVICE_FAILURE",
  });

  export const creatDeviceStart = () => ({
    type: "CREATE_DEVICE_START",
  });
  
  export const createDeviceSuccess = (device) => ({
    type: "CREATE_DEVICE_SUCCESS",
    payload: device,
  });
  
  export const createDeviceFailure = () => ({
    type: "CREATE_DEVICE_FAILURE",
  });
  
  export const updateDeviceStart = () => ({
    type: "UPDATE_DEVICE_START",
  });
  
  export const updateDeviceSuccess = (device) => ({
    type: "UPDATE_DEVICE_SUCCESS",
    payload: device,
  });
  
  export const updateDeviceFailure = () => ({
    type: "UPDATE_DEVICE_FAILURE",
  });
  
  export const deleteDeviceStart = () => ({
    type: "DELETE_DEVICE_START",
  });
  
  export const deleteDeviceSuccess = (id) => ({
    type: "DELETE_DEVICE_SUCCESS",
    payload: id,
  });
  
  export const deleteDeviceFailure = () => ({
    type: "DELETE_DEVICE_FAILURE",
  });