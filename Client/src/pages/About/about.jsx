import React from "react";
import "./about.css";
import Header from "../../Header-Footer/header";
import Footer from "../../Header-Footer/footer";


export default function ContactUs() {


    return (
        <div className="app">
         <Header />
            <div className="hover_cards">
                <div className="container">
                    <div className="card1">
                        <div className="box">
                            <div className="content">

                                <h3>Card One</h3>
                                <p>Lorem ipsum dolor sit amet, consectur adipisicing
                                    elit, sed do eiusmod tempor incididunt ut labore et dolore
                                    magna aliqua,</p>

                            </div>
                        </div>
                    </div>
                    <div className="card1">
                        <div className="box">
                            <div className="content">

                                <h3>Card Two</h3>
                                <p>Lorem ipsum dolor sit amet, consectur adipisicing
                                    elit, sed do eiusmod tempor incididunt ut labore et dolore
                                    magna aliqua,</p>

                            </div>
                        </div>
                    </div>
                    <div className="card1">
                        <div className="box">
                            <div className="content">

                                <h3>Card Three</h3>
                                <p>Lorem ipsum dolor sit amet, consectur adipisicing
                                    elit, sed do eiusmod tempor incididunt ut labore et dolore
                                    magna aliqua,</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <Footer />
        </div>
    );
}
