import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../authContext/AuthContext";
import { logOut } from "../../authContext/AuthActions";
import "./home.css";


function Header() {
  const { dispatch } = useContext(AuthContext);
  const { user } = useContext(AuthContext);
  console.log(user.username);
  return (

    <div class="header">
      <nav
        color="white"
        className="navbar navbar-expand-lg navbar-light bg-light "
      >
        <a className="navbar-brand" href="">
          <img
            src="https://uploads.codesandbox.io/uploads/user/394a073e-ac76-4500-88bf-59a13ae9a863/5U6A-mercury-logo.png"
            className="d-inline-block align-middle"
            width="50"
            alt="mercury-logo"
            style={{ filter: "invert(100%)" }}
          />
          EASY TRACK
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="/Home">
                <i className="fa fa-home" aria-hidden="true" />&nbsp;
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/my-devices">
                <i className="fa fa-tablet-alt" aria-hidden="true" />&nbsp;
                Devices
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/About-us">
                <i className="fa fa-id-card-alt" aria-hidden="true" />&nbsp;
                About us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Contact-us">
                <i className="fa fa-align-center" aria-hidden="true" />&nbsp;
                Contact us
              </a>
            </li>

            <nav className="maz navbar  navbar-expand-sm rounded border border-dark ">
              <h4 className="navbar-brand" style={{ fontSize: "20px", fontFamily: "Times New Roman" }}>

                Welcome, {user.username}
                &ensp;
                &ensp;

              </h4>

              <br />
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-list-4" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbar-list-4">
                <ul class="navbar-nav">
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <img src="https://www.kindpng.com/picc/m/10-104902_simple-user-icon-user-icon-white-png-transparent.png" width="40" height="40" class="rounded-circle" />
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                      <a class="dropdown-item" href="/">Dashboard</a>
                      <a class="dropdown-item" href="/Settings">Edit Profile</a>
                      <a class="dropdown-item" href="/" onClick={() => dispatch(logOut())}>Log Out</a>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>

          </ul>
        </div>
      </nav>
    </div>
  );

}

export default Header;
