import React, { Component } from "react";

export default class Testimonial extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="section " id="Testimonials">
        <div className="container">
          <div className="section-head">
            <h2>Testimonials</h2>
            <p>People I've worked with have said some nice things...</p>
          </div>
          <div className="row pt-3">
            {data.edges.map((item, index) => {
              return (
                <div key={index} className="col-lg-6 ">
                  <blockquote
                    className="blockquote shadow rounded testimonial p-3"
                    data-sal="flip-up"
                    data-sal-delay="300"
                    data-sal-easing="ease-in"
                  >
                    <div
                      dangerouslySetInnerHTML={{
                        __html: item.node.description.childMarkdownRemark.html,
                      }}
                    />
                    <h3 className="name">{item.node.name}</h3>
                    <span className=" blockquote-footer">
                      {item.node.subTitle}
                    </span>
                  </blockquote>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
