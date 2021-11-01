export const getPinStart = () => ({
    type: "GET_PIN_START",
  });
  
  export const getPinSuccess = (pins) => ({
    type: "GET_PIN_SUCCESS",
    payload: pins,
  });
  
  export const getPinFailure = () => ({
    type: "GET_PIN_FAILURE",
  });
