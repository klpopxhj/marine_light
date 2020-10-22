import React, { Component } from "react";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout";
import SEO from "../components/seo";

export default class servicePost extends Component {
  render() {
    const data = this.props.data.contentfulService;
    return (
      <Layout>
        <SEO title={data.name} keywords={["real estate"]} />
        <div className="site-container blog-post">
          <div className="container text-center">
            <div className="jumbotron">
              <Img
                alt={data.title}
                className="feature-img"
                fixed={data.featureImage.fluid}
                objectFit="cover"
                objectPosition="50% 50%"
              />
              <h1 className="title text-center ">{data.title}</h1>

              <p
                className="text-left"
                dangerouslySetInnerHTML={{
                  __html: data.description.childMarkdownRemark.html,
                }}
              />
            </div>
            <ul className="list-inline">
              <li className="list-inline-item">
                <div className="see-more">
                  <Link to="/#Stories">
                    <span>Go back to Home</span>
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query SingleServiceQuery($slug: String!) {
    contentfulService(slug: { eq: $slug }) {
      title
      slug
      createdAt
      featureImage {
        fluid(maxWidth: 1500) {
          base64
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
        }
      }
      description {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
