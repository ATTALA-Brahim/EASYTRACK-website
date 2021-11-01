import React from "react";
import {ThumbsUp, Shield, Map } from "react-feather";
import Header from "./header";
import Footer from "./footer";


class Home extends React.Component {
  render() {
    return (
      <div id="body">
        <Header/>
        <div className="home-section1">
          <div className="bg" />
          <div className="content">
            
            <div className="row">
              <div className="col-sm-8">
                
                <div className="section-heading">
                  GPS Track is the Better Way to track your devices.
                </div>
                <div className="section-text1">
                  <p>
                    Our GPS tracking system can monitor and track the position
                    of vehicles and other objects in real time, no matter where
                    you are, you can always know the geographical location of
                    the object and protect the safety of the vehicle or the
                    object.
                  </p>
                </div>
                <div className="getting-started">
                  <a className="btn" href="/Login">
                    Get Started tracking
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-section2">
          <div className="content">
            <div className="row">
              <div className="col-lg-12">
                <div className="head-wrap">
                  <div className="section-heading">Why GPS Track?</div>
                  <div className="section-text">
                    Features which make GPS Track the best real time tracking
                    tool.
                  </div>
                </div>
                <div className="content-wrap">
                  <div className="col-lg-4 col-sm-12 float-left">
                  
                    <div className="feature-wrap">
                      <div class="feature-img">
                        <a href ="/">
                          <ThumbsUp />
                        </a>
                      </div>
                      <div class="feature-text">
                        <h2>EASY TO USE</h2>
                        <p>
                          Simply login to this web site in your web browser and
                          choose the device to track
                        </p>
                      </div>
                    </div>
                    
                  </div>
                  <div className="col-lg-4 col-sm-12 float-left">
                    <div className="feature-wrap">
                      <div class="feature-img">
                        <a href ="/">
                          <Map />
                        </a>
                      </div>
                      <div class="feature-text">
                        <h2>HELPFUL</h2>
                        <p>
                          You can know the geographical location of the object
                          and protect the safety of the vehicle
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-12 float-left">
                    <div className="feature-wrap">
                      <div class="feature-img">
                        <a href ="/">
                          <Shield />
                        </a>
                      </div>
                      <div class="feature-text">
                        <h2>SECURITY</h2>
                        <p>Protect your data location with our GPS Track</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}
export default Home;
