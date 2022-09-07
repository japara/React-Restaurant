import React, { Component } from "react";
import phone from "./images/phone.png";
import email from "./images/Email.png";
import location from "./images/location.png";
import facebook from "./images/facebook.png";
import instagram from "./images/instagram.png";
import twitter from "./images/twitter.png";
import youtube from "./images/youtube.png";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-info">
          <div className="info-cont">
            <img src={phone} className="footer-img" alt="phone-logo"></img>
            <p className="footer-text">(+995) 555 555 555</p>
          </div>
          <div className="info-cont">
            <img src={email} className="footer-img" alt="email-logo"></img>
            <p className="footer-text">somerandom@gmail.com</p>
          </div>
          <div className="info-cont">
            <img
              src={location}
              className="footer-img"
              alt="location-ping"
            ></img>
            <p className="footer-text">Some random adress N2</p>
          </div>
        </div>
        <div className="footer-tags">
          <img className="footer-tag" src={facebook} alt="facbeook"></img>
          <img className="footer-tag" src={instagram} alt="instagram"></img>
          <img className="footer-tag" src={twitter} alt="twitter"></img>
          <img className="footer-tag" src={youtube} alt="youtube"></img>
        </div>
      </div>
    );
  }
}
