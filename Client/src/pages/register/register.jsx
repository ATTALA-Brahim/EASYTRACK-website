import axios from "axios";
import {Link } from "react-router-dom";
import "./register.css";
import { Formik, Form, Field } from "formik";
import swal from "sweetalert";
import Header from "../../Header-Footer/header";
import Footer from "../../Header-Footer/footer";

export default function Register() {
 
  
  
  function validateMobile(value) {
    let error;
    if (!value) {
      error = "Phone number required";
    } else if (!/[0-9]/.test(value)) {
      error = "Enter only numbers";
    } else if (!/^(0)(5|6|7)(4|5|6|7|9)[0-9]{7}$/.test(value)) {
      error = "phone number invalid";
    }
    return error;
  }
  

  
  
 
  const handleFinish = async (e) => {
    const email = e.email;
    const password = e.password;
    const username = e.username;
    const mobile = e.mobile;


   console.log(e);

    axios
    .post("auth/register", { username,email, mobile,password })
    .then((res) => {
      console.log(res.data);
      swal("Registration Success!", "your account has been succesfully created", "success").then((value) => {
        window.location = "/Login";
      });
    })
    .catch((error) => {
      console.log(error);
      swal("Error!", "Email Address Exist", "error");
    });



    if(e.target.name==='email'){
      this.validateEmail(e.target.value);
     }
     if(e.target.name==='password'){
      this.validatePass(e.target.value);
     }

  };

  function validateUsername(value) {
    let error;
    if (!value) {
      error = "Please enter a username";
    }
    return error;
  }

  const validatePassword = (password) => {
    let error;
    if (!password) {
      error = "Please confirm your password";
    } else if (password !== document.getElementById("password").value) {
      error = "passwords do not match";
    }
    return error;
  };

  function validatePass(value) {
    let error;
    if (!value) {
      error = "Please enter your password";
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/.test(value)) {
      error = "Weak password";
    }
    return error;
  }
  
  
function validateEmail(value) {
  let error;
  if (!value) {
    error = "Address email required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = "Adrress email invalid";
  }
  return error;
}

  return (
    <div>
<Header/>
<div className="register">
    <center>
      <div className="login-form">
        <h3 className="h3 mb-3 font-weight-normal">
          Sign Up
        </h3>
        <div className="social-login" />
        <Formik
          initialValues={{
            username: "",
            email: "",
            mobile: "",
            password: "",
            confirmPassword:""
          }}
          onSubmit={handleFinish}
        >
          {({ errors, touched, resetForm }) => (
            <Form>
            
            <span style={{ fontSize: 16 }}>
                {" "}
                <i className="fa fa-user" /> Username 
                <span style={{ color: "red" }}> * </span>
              </span>
              <Field
                name="username"
                type="string"
                className="form-control"
                validate={validateUsername}
                placeholder="Username"
                required
              />
              {errors.username && touched.username && (
                <div style={{ color: "brown", fontSize: "15px" }}>
                  {" "}
                  {errors.username}{" "}
                </div>
              )}

              <span style={{ fontSize: 16 }}>
                {" "}
                <i className="fa fa-envelope" /> Email address :
                <span style={{ color: "red" }}> *</span>
              </span>
              <Field
                name="email"
                type="email"
                className="form-control"
                validate={validateEmail}
                placeholder="Email address"
                required
              />
              {errors.email && touched.email && (
                <div style={{ color: "brown", fontSize: "15px" }}>
                  {" "}
                  {errors.email}{" "}
                </div>
              )}

              <span style={{ fontSize: 16 }}>
                <i className="fa fa-phone" /> Phone number
                <span style={{ color: "red" }}> *</span>
              </span>
              <Field
                name="mobile"
                className="form-control"
                placeholder="Phone number"
                validate={validateMobile}
                minLength="10"
                maxLength="10"
                required
              />
              {errors.mobile && touched.mobile && (
                <div style={{ color: "brown", fontSize: "15px" }}>
                  {" "}
                  {errors.mobile}{" "}
                </div>
              )}

             

          

              <span style={{ fontSize: 16 }}>
                <i className="fa fa-lock" /> Password
                <span style={{ color: "red" }}> *</span>
              </span>
              <Field
                id="password"
                name="password"
                type="password"
                validate={validatePass}
                className="form-control"
                placeholder="Password"
                minLength="6"
                maxLength="20"
                required
              />
              {errors.password && touched.password && (
                <div style={{ color: "brown", fontSize: "15px" }}>
                  {" "}
                  {errors.password}{" "}
                </div>
              )}

              <span style={{ fontSize: 16 }}>
                <i className="fa fa-lock" /> Confirm Password
                <span style={{ color: "red" }}> *</span>
              </span>
              <Field
                name="confirmPassword"
                type="password"
                validate={validatePassword}
                className="form-control"
                placeholder="Confirm password"
                minLength="6"
                maxLength="20"
                required
              />
              {errors.confirmPassword && touched.confirmPassword && (
                <div style={{ color: "brown", fontSize: "15px" }}>
                  {" "}
                  {errors.confirmPassword}{" "}
                </div>
              )}

             

              <button
                type="submit"
                id="btn"
                className="btn btn-outline-primary btn-block"
              >
                <i className="fa fa-user-plus" /> Sign Up
              </button>
              <hr />
              <p style={{ font: "italic  bold 16px Georgia, Serif" }}>
              Already have an account ?{" "}
              </p>
              <Link to="/login">
                <i className="fa fa-sign-in" /> Sign In
              </Link>
            </Form>
          )}
        </Formik>
      </div>
      </center>
    </div>
      
      <Footer/>
    </div>
    
    
  );
}