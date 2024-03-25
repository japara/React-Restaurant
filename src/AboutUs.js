import React, { Component } from "react";
import Footer from "./Footer";

export default class AboutUs extends Component {
  render() {
    return (
      <>
        <div className="about-page">
          <p>
            Beloved by customers, Azteca Mexican Restaurants feature a wide
            selection of authentic Mexican fare including a variety of Mexican
            salads, soups, burritos, enchiladas, fajitas, and a “Little Amigo™ ”
            menu, specifically designed for children, all served in a warm
            Hacienda-style atmosphere. Each restaurant boasts a Cantina where
            Azteca’s famous Ramosrita® Margaritas, Sizzling Fajitas and
            award-winning Nachos make every visit a fiesta
          </p>
          <p>
            We love our customers and our employees are treated like family.
            They, in turn, treat you like family. Because family and community
            is so important to us, we have a strong presence in each
            neighborhood we’re a part of by supporting a variety of charitable
            efforts. A feeling of fun and camaraderie is a staple at every
            Azteca
          </p>
        </div>
        <Footer />
      </>
    );
  }
}
