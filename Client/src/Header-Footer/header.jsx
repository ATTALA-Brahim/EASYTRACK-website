import React from "react";


function Header() {
  return (

    <div class="header">
      <nav
        color="white"
        className="navbar navbar-expand-lg navbar-light bg-light "
      >
        <a className="navbar-brand" href="/">
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
              <a className="nav-link" href="/">
                <i className="fa fa-home" aria-hidden="true" />&nbsp;
                Home
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

            <li className="nav-item">
              <a className="nav-link login-Btn text-center" href="/Login">
              <i className="fa fa-sign-in-alt" aria-hidden="true" />&nbsp;
                Login
              </a>
              <b>OR</b>
              <a className="nav-link register-Btn text-center" href="/Register">
              <i className="fa fa-sign-out-alt" aria-hidden="true" />&nbsp;
                Sign Up
              </a>
            </li>



          </ul>
        </div>
      </nav>
    </div>
  );

}

export default Header;
