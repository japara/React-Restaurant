import React, { Component } from "react";
import logo from "./images/logo.png";
import cart from "./images/cart.png";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <nav id="header-nav">
          <ul>
            <img src={logo} id="header-logo" alt="logo"></img>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact</li>
            <li>Menu</li>
            <li>Gallery</li>
          </ul>
        </nav>
        <img src={cart} id="cart" alt="shopping-cart"></img>
      </div>
    );
  }
}
