import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthContextProvider } from "./authContext/AuthContext";
import { DeviceContextProvider } from "./deviceContext/DeviceContext";
import { PinContextProvider} from "./pinContext/PinContext"

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
    <DeviceContextProvider>
    <PinContextProvider>
      
      <App />
    </PinContextProvider>
    </DeviceContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);