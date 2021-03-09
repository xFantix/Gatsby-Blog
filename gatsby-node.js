const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/layouts/post.js`)
  // Query for markdown nodes to use in creating pages.
  // You can query for whatever data you want to create pages for e.g.
  // products, portfolio items, landing pages, etc.
  // Variables can be added as the second function parameter
  const result  = await graphql(`
  {
    allDatoCmsWorkArticle {
      edges {
        node {
          maintitle
          paragraph
          originalId
          image {
            fixed(width: 246, height: 180) {
              src
            }
          }
        }
      }
    }
  }
  `, { limit: 1000 }).then(result => {
    if (result.errors) {
      throw result.errors
    }

    
    // Create blog post pages.
    result.data.allDatoCmsWorkArticle.edges.forEach(edge => {
      createPage({
        // Path for this page — required
        path: `work/${edge.node.originalId}`,
        component: blogPostTemplate,
        context: {
         id:edge.originalId,
        },
      })
    })
  })
}