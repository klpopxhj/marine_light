import React, { Component } from "react";
import DarkMode from "./darkmode";
import CopyMailTo from "react-copy-mailto";

export default class footer extends Component {
  render() {
    const toggler = <DarkMode />;

    return (
      <>
        <hr
          className="m-0 d-none d-sm-block bg-warning "
          style={{ height: "25px" }}
        />
        <div className="site-footer " id="footer">
          <div className="container">
            <footer className="footer-copyright">
              <div
                className="row justify-content-around footer-main"
                style={{ fontSize: "14px" }}
              >
                <div className="col-lg-2 col-md-4 text-left d-none d-sm-block ">
                  <p className="mb-1">
                    <strong>Navigation</strong>
                  </p>
                  <ul className="list-unstyled text-left">
                    <li className="">
                      {" "}
                      <a href="/">Home</a>
                    </li>
                    <li className="">
                      {" "}
                      <a href="#About">About</a>
                    </li>
                    <li className="">
                      {" "}
                      <a href="#Services">Services</a>
                    </li>
                    <li className="">
                      <a href="#Photos">Photos</a>
                    </li>
                    <li className="">
                      <a href="#Contact">Contact</a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3  col-md-4 text-left d-none d-sm-block">
                  <p className="mb-1">
                    <strong>Services</strong>
                  </p>

                  <ul className="list-unstyled ">
                    <li className="">
                      <a href="/real-estate">Real Estate</a>
                    </li>
                    <li className="">
                      <a href="/Constructions and Developers">
                        Constructions and Developers
                      </a>
                    </li>
                    <li className="">
                      <a href="/Essential Marine">Essential Marine</a>
                    </li>
                    <li className="">
                      <a href="/Marine Light Productions">
                        Marine Light Productions
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-4 offset-lg-3 col-md-4 about-details text-left d-none d-sm-block offset-md-0">
                  <div className="socials">
                    <p className="mb-1">
                      <strong>Follow us on</strong>
                    </p>
                    <ul>
                      <li>
                        <a
                          className="fab fa-facebook-f"
                          href={this.props.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                        ></a>
                      </li>
                      <li>
                        <a
                          className="fab fa-twitter"
                          href={this.props.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                        ></a>
                      </li>
                      <li>
                        <a
                          className="fab fa-instagram"
                          href={this.props.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                        ></a>
                      </li>
                    </ul>
                  </div>
                  <p className="mt-5">
                    <strong>Write to us on: </strong>
                    <span className="">
                      <CopyMailTo email={this.props.email} />
                    </span>
                  </p>
                </div>
              </div>
              <hr className="mt-0 mb-2 d-none d-sm-block" />
              <div title="Toggle dark mode">{toggler}</div>
              <span>© {this.props.siteName}</span> &#9826;{" "}
              {new Date().getFullYear()} <br />
              Made with <i className="fas fa-heart text-danger"></i> in India by{" "}
              <a
                href="https://zubayrali.in"
                target="_blank"
                rel="noopener noreferrer"
              >
                Zubayr Ali
              </a>
            </footer>
          </div>
        </div>
      </>
    );
  }
}
