import React, { Component } from "react";
import Img from "gatsby-image";

import logo from "../images/logo.jpg";

export default class Banner extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="banner" style={{ backgroundColor: "#000" }}>
        {/* <Img
          fixed={data.bannerImage.fluid}
          objectFit="cover"
          objectPosition="50% 50%"
        /> */}
        <div className="container banner-details">
          <img src={logo} style={{ width: "400px" }} alt="bruh" />
        </div>
      </div>
    );
  }
}
