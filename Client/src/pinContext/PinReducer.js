const PinReducer = (state, action) => {
    switch (action.type) {
      case "GET_PIN_START":
        return {
          pins: [],
          isFetching: true,
          error: false,
        };
      case "GET_PIN_SUCCESS":
        return {
          pins: action.payload,
          isFetching: false,
          error: false,
        };
      case "GET_PIN_FAILURE":
        return {
          pins: [],
          isFetching: false,
          error: true,
        };

      
    default:
      return { ...state };
    }}
    export default PinReducer;