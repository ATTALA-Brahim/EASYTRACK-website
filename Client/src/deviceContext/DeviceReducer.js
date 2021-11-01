const DeviceReducer = (state, action) => {
    switch (action.type) {
      case "GET_DEVICE_START":
        return {
          devices: [],
          isFetching: true,
          error: false,
        };
      case "GET_DEVICE_SUCCESS":
        return {
          devices: action.payload,
          isFetching: false,
          error: false,
        };
      case "GET_DEVICE_FAILURE":
        return {
          devices: [],
          isFetching: false,
          error: true,
        };

        case "CREATE_DEVICE_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "CREATE_DEVICE_SUCCESS":
      return {
        devices: [...state.devices, action.payload],
        isFetching: false,
        error: false,
      };
    case "CREATE_DEVICE_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case "UPLOAD_DEVICE_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "UPLOAD_DEVICE_SUCCESS":
      return {
        devices: state.devices.map(
          (device) => device._id === action.payload._id && action.payload
        ),
        isFetching: false,
        error: false,
      };
    case "UPLOAD_DEVICE_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case "DELETE_DEVICE_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "DELETE_DEVICE_SUCCESS":
      return {
        devices: state.devices.filter((device) => device._id !== action.payload),
        isFetching: false,
        error: false,
      };
    case "DELETE_DEVICE_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default:
      return { ...state };
    }}
    export default DeviceReducer;