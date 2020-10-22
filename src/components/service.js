import React, { Component } from "react";
import { Link } from "gatsby";

import Slider from "react-slick";

var settings = {
  dots: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  pauseOnHover: true,
  autoplaySpeed: 6000,
};

export default class service extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="service section pt-0" id="Service">
        <div className="container">
          <h2 className="my-4">Services we offer</h2>
          <div
            className="shadow rounded"
            data-sal="flip-up"
            data-sal-delay="300"
            data-sal-easing="ease-in"
            style={{
              cursor: "pointer",
            }}
          >
            <Slider {...settings}>
              {data.edges.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="service-main rounded"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <i className={item.node.icon + " fa-3x fas mb-3"}></i>
                    <h3 className="font-weight-bold">{item.node.title}</h3>
                    <p>{item.node.previewText}</p>
                    <p>
                      <Link
                        className="link text-center pb-5"
                        to={"/" + item.node.slug}
                      >
                        Learn more
                      </Link>
                    </p>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}
