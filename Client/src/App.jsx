import React from "react";
import Home from "./Header-Footer/home";
import HomeUser from "./pages/home/homeUser";
import Login from "./pages/login/Login";
import Register from "./pages/register/register";
import Header from "./pages/home/header";
import Footer from "./Header-Footer/footer"
import Sidebar from "./pages/home/sidebar";
import ContactUs from "./pages/Contact/contact";
import AboutUs from "./pages/About/about";
import Map from "./pages/map/map"
import Historique from "./pages/Historique"
import Preview from "./pages/preview/preview"
import Device from "./pages/device/device"
import "./app.scss";
import "./header-footer.scss";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import ProductList from "./pages/productList/ProductList";
import NewProduct from "./pages/newProduct/NewProduct";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./authContext/AuthContext";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
    <Switch>
    <Route path="/contact-us">
              <ContactUs />
            </Route>
            <Route path="/about-us">
              <AboutUs />
            </Route>
    <Route path="/login">{!user ? <Login /> : <Redirect to="/home" />}</Route>
    <Route path="/register">
          {!user ? <Register /> : <Redirect to="/home" />}
        </Route>
      <Route exact path="/">{user ? <Redirect to="/home" /> : <Home />}</Route>
      {user && (
          <div className="HomeUser">
          <div className="home__header">
            <Header />
          </div>
          <div className="sides__section">
            <div className="side__leftSection">
              <Sidebar />
            </div>
            <Route path="/home">
              <HomeUser />
            </Route>
          

            <Route path="/my-devices">
              <ProductList />
            </Route>
            <Route path="/add-Device">
              <NewProduct />
            </Route>
            <Route path="/start-tracking-device">
                <Map />
              </Route>
            
              <Route path="/device-history">
                <Historique />
              </Route>
              <Route path="/show-device-history">
                <Preview />
              </Route>
              <Route path="/edit-Device">
                <Device />
              </Route>
           
            </div>
            <Footer/>
          </div>
          
      )}
    </Switch>
  </Router>

   
  );
}

export default App;
