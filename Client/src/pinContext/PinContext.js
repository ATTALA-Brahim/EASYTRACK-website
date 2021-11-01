import PinReducer from "./PinReducer";
import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  pins: [],
  isFetching: false,
  error: false,
};

export const PinContext = createContext(INITIAL_STATE);

export const PinContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(PinReducer, INITIAL_STATE);

  return (
    <PinContext.Provider
      value={{
        pins: state.pins,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </PinContext.Provider>
  );
};