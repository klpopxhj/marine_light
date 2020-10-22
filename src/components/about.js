import React from "react";
import Img from "gatsby-image";
import CopyMailTo from "react-copy-mailto";

const Header = ({ data }) => (
  <div className="about section" id="About">
    <div className="container">
      <div className="about-main  row">
        <div className="col-lg-12 ">
          <div className="about-details">
            <h2 className="sub-position">{data.designation}.</h2>
            <div
              className="lead"
              dangerouslySetInnerHTML={{
                __html: data.description.childMarkdownRemark.html,
              }}
            />
            <ul className="details">
              <li>
                <strong>Email</strong>
                <p>
                  <CopyMailTo email={data.gmail} />{" "}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
