var path = require("path");

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    const servicePostTemplate = path.resolve("src/templates/service-post.js");

    resolve(
      graphql(`
        {
          allContentfulService {
            edges {
              node {
                slug
              }
            }
          }
        }
      `).then((result) => {
        if (result.errors) {
          reject(result.errors);
        }

        result.data.allContentfulService.edges.forEach((edge) => {
          createPage({
            path: edge.node.slug,
            component: servicePostTemplate,
            context: {
              slug: edge.node.slug,
            },
          });
        });
        return;
      })
    );
  });
};
