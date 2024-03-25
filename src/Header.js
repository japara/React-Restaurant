import React, { useContext } from "react";
import logo from "./images/logo.png";
import cart from "./images/cart.png";
import { NavLink, Outlet } from "react-router-dom";
import { Context } from "./Context";

export default function Header() {
  const cartNumber = useContext(Context);

  return (
    <>
      <div className="header">
        <nav id="header-nav">
          <ul>
            <img src={logo} id="header-logo" alt="logo"></img>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/aboutus">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/menu">Menu</NavLink>
            </li>
          </ul>
        </nav>
        <div>
          <img src={cart} id="cart" alt="shopping-cart"></img>
          <p id="cartNumber">{cartNumber.cartNumber}</p>
        </div>
      </div>
      <Outlet />
    </>
  );
}
