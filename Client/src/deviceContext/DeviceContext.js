import DeviceReducer from "./DeviceReducer";
import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  devices: [],
  isFetching: false,
  error: false,
};

export const DeviceContext = createContext(INITIAL_STATE);

export const DeviceContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DeviceReducer, INITIAL_STATE);

  return (
    <DeviceContext.Provider
      value={{
        devices: state.devices,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </DeviceContext.Provider>
  );
};