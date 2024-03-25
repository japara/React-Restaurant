import React, { Component } from "react";
import Footer from "./Footer";

export default class Contact extends Component {
  render() {
    return (
      <>
        <div className="contact-page">
          <div className="contact-cont">
            <p id="adress">Adress: 11 Shota Rustaveli Avenue</p>
            <p id="telephone">Tel: (+995) 555 555 555</p>
            <p id="email">Email: random@gmail.com</p>
          </div>
          <div className="map-cont">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2979.027271025618!2d44.79661721550995!3d41.69834697923691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440ce7b55479a1%3A0x8bee5147408a25dc!2s11%20Shota%20Rustaveli%20Ave%2C%20T&#39;bilisi!5e0!3m2!1sen!2sge!4v1662559775397!5m2!1sen!2sge"
              width="100%"
              height="100%"
            ></iframe>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
