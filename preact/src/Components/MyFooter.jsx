import React from "react";
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

export default function Footer() {
    return (
        <div>
            <div id="CFoot" style={{ height: "15em", display: "flex" }}>

                <div>
                    <img src="https://www.freeiconspng.com/thumbs/blogger-logo-icon-png/blogger-logo-icon-png-11.png" style={{ width: "6em", height: "6em", margin: "50%", alignContent: 'center' }} alt=''></img>
                </div>
                <div className="col-4" style={{ marginLeft: "1em", fontSize: "1em", marginTop: "5em" }}>
                    <h1 style={{ fontFamily: "Georgia, ''Gill Sans', 'Gill Sans MT', Calibri, sans-serif", fontWeight: "bold", marginBottom: ".8em", color: "orangered" }}>BlogSpot</h1>
                </div>
                <div class="col-2 text-center" style={{ marginTop: "4em" }}>
                    <h6 class="text-uppercase mb-0 section" style={{ fontWeight: "bold", fontSize: "1.5em" }}>Menu</h6>
                    <ul class="list-unstyled">
                        <li>
                            <span style={{ fontSize: "1.2em" }}>About Us</span>
                        </li>
                        <li>
                            <span style={{ fontSize: "1.2em", marginTop: "1.2em" }}>History</span>
                        </li>
                    </ul>
                </div>
                <div class="col-lg-2 col-md-6 mb-4 mb-md-0 text-center" style={{ marginTop: "4em" }}>
                    <h6 class="text-uppercase mb-0 section" style={{ fontWeight: "bold", marginBottom: "1em", fontSize: "1.5em" }}>Discover</h6>
                    <ul class="list-unstyled">
                        <li>
                            <span style={{ fontSize: "1.2em", marginTop: "1.2em" }}>Customer</span>
                        </li>
                        <li>
                            <span style={{ fontSize: "1.2em", marginTop: "1.2em" }}>Privacy</span>
                        </li>
                        <li>
                            <span style={{ fontSize: "1.2em", marginTop: "1.2em" }}>FAQ's</span>
                        </li>
                    </ul>
                </div>
                <div className="col-lg-2 col-md-6 mb-4 mb-md-0 text-center" style={{ marginTop: "4em" }}>
                    <h6 className="text-uppercase mb-0 section" style={{ fontWeight: "bold", marginBottom: "1em", fontSize: "1.4em" }}>Follow Us</h6>
                    <ul className="list-unstyled">
                        <li>
                            <span style={{ fontSize: "1.2em", marginTop: "1.2em", color: "orangered" }}><FaFacebook /></span> &nbsp;&nbsp;<span style={{ fontSize: "1.2em", marginTop: "1.2em", color: "orangered" }}> <FaTwitter /> </span> &nbsp;&nbsp; <span style={{ fontSize: "1.2em", marginTop: "1.2em", color: "orangered" }}> <FaInstagram /></span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
