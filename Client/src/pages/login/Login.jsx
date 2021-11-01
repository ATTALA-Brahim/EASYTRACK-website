import React, { useContext } from "react";
import { AuthContext } from "../../authContext/AuthContext";
import "./login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {login} from "../../authContext/apiCalls";
import Header from "../../Header-Footer/header";
import Footer from "../../Header-Footer/footer";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";


export default function Login() {
  const { dispatch } = useContext(AuthContext);



  const handleLogin = (e) => {
    const email = e.email;
    const password = e.password;
    console.log(email);

    login({email, password}, dispatch);
  };
  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Veuillez saisir votre adresse email";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Adresse email invalide";
    }
    return error;
  }
  function validatePass(value) {
    let error;
    if (!value) {
      error = "Veuillez saisir votre mot de passe";
    }
    return error;
  }
  

  return (
    <div> <Header/>
    <div className="login">
     <center>
      <div className="login-form">
      <div className="log">
        <h3 className="h3 mb-3 font-weight-normal">Sign In</h3>
        <div className="social-login" />
        <Formik
          initialValues={{
            email: "",
            password: ""
          }}
          onSubmit={handleLogin}
        >
          {({ errors, touched, resetForm }) => (
            <Form>
              <span style={{ fontSize: 16 }}>
                {" "}
                <i className="fa fa-envelope" />Email Address<b> :</b>
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
                <i className="fa fa-lock" /> Password<b> :</b>
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

              <button
                className="btn btn-outline-success btn-block"
                type="submit"
              >

                <i className="fa fa-sign-in" /> Sign In
              </button>
              <div>
              </div>
              
              <hr />
              <center>
              <p style={{ font: "italic  bold 16px Georgia, Serif" }}>
                New user to GPS Track?{" "}
              </p>
              <Link to="/register">
                <i className="fa fa-user-plus" /> Sign Up
              </Link>
              </center>
            </Form>
          )}
        </Formik>
      </div>
      </div>
      </center>
    </div>
    
    <Footer/>
    </div>
  );
}