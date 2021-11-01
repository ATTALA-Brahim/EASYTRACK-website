import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "./AuthActions";
import swal from "sweetalert";




export const login = async (user, dispatch) => {
  dispatch(loginStart());



  axios
  .post("auth/login", user)
  .then((res) => {
    dispatch(loginSuccess(res.data));
    console.log(res.data);
    window.location = "/Home";
   
  })
  .catch((error) => {
    dispatch(loginFailure());
    console.log(error);
    swal("Error!", "Email or password is incorrect", "error");
  });




};



