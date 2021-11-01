import axios from "axios";
import {
    

  getPinFailure,
  getPinStart,
  getPinSuccess,
} from "./PinActions";

export const getPins = async (dispatch) => {
  dispatch(getPinStart());
  try {
    const res = await axios.get("/pin", {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(getPinSuccess(res.data));
  } catch (err) {
    dispatch(getPinFailure());
  }
};




