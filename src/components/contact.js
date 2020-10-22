import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

export default class Contact extends Component {
  static defaultProps = {
    center: {
      lat: 17.385,
      lng: 78.4867,
    },
    zoom: 10,
  };
  render() {
    return (
      <div className="section">
        <div className="container">
          <div className="section-head">
            <h2 className="text-center">Contact</h2>
            <p>Drop us a message, we'll get back to you ASAP.</p>
          </div>
          <div className="contact row justify-content-around " id="Contact">
            <div className="col-lg-6">
              <form
                name="contact"
                method="post"
                data-netlify="true"
                // action={`https://formspree.io/${this.props.data}`}
                action="/success"
              >
                <input type="hidden" name="form-name" value="contact" />

                <div>
                  <label>
                    Your Name: <input type="text" name="name" required />
                  </label>
                </div>
                <div>
                  <label>
                    Your Email: <input type="email" name="email" required />
                  </label>
                </div>
                <div>
                  <label>
                    Message: <textarea name="message" required></textarea>
                  </label>
                </div>
                <div>
                  <button type="submit" className="shadow-lg">
                    Send
                  </button>
                </div>
              </form>
            </div>
            <div className="col-lg-6 mb-4">
              <GoogleMapReact
                bootstrapURLKeys={{
                  key: "AIzaSyCXp1geOcjW0E-y_0-gvxMLoybBs81NB-8",
                }}
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
              >
                <i
                  lat={17.47}
                  lng={78.47}
                  className="fas fa-map-marker-alt text-danger fa-4x"
                ></i>
              </GoogleMapReact>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
