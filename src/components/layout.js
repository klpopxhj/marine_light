import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import { Helmet } from "react-helmet";
import { TinyButton as ScrollUpButton } from "react-scroll-up-button";

import Header from "./header";
import Footer from "./footer";

import "../css/style.css";
import "bootstrap/dist/css/bootstrap.css";

if (typeof window !== "undefined") {
  require("smooth-scroll")('a[href*="#"]');
}

const Layout = ({ children, header }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        contentfulSiteInformation {
          email
          facebook
          twitter
          instagram
          siteName
          siteDescription
          logo {
            file {
              url
            }
          }
          menus
        }
      }
    `}
    render={(data) => (
      <>
        <Helmet>
          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
            rel="stylesheet"
          />
        </Helmet>
        <Header
          data={data.contentfulSiteInformation}
          siteTitle={data.contentfulSiteInformation.siteName}
          header={header}
        />
        <div>
          <main id="home">{children}</main>
        </div>
        <Footer
          siteName={data.contentfulSiteInformation.siteName}
          twitter={data.contentfulSiteInformation.twitter}
          facebook={data.contentfulSiteInformation.facebook}
          email={data.contentfulSiteInformation.email}
          instagram={data.contentfulSiteInformation.instagram}
        />
        <ScrollUpButton ContainerClassName="ScrollUpButton__Container" />
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
