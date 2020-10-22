import React, { Component } from "react";

export default class Social extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="about-details py-5 section">
        <div className="container">
          <h2>We are social</h2>
          <p>Follow us on these platforms to keep us with us.</p>
          <div className="row justify-content-center">
            <div className="socials">
              <ul>
                <li>
                  <a
                    className="fab fa-facebook-f"
                    href={data.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                  ></a>
                </li>
                <li>
                  <a
                    className="fab fa-twitter"
                    href={data.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                  ></a>
                </li>
                <li>
                  <a
                    className="fab fa-instagram"
                    href={data.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  ></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
