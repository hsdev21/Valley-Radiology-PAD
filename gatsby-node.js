/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async function ({ actions, graphql }) {
  const pluginOptions = {
    wordPressUrl: `https://valleyradiolo1.wpengine.com/`,
    uploadsUrl: `https://valleyradiolo1.wpengine.com/uploads/`,
  }
  const {
    data: {
      wpcontent: {
        pages: { pageNodes },
        posts: { postNodes },
      },
    },
  } = await graphql(
    `
      query {
        wpcontent {
          pages(first: 20) {
            pageNodes: nodes {
              id
              uri
              template {
                __typename
              }
            }
          }
          posts {
            postNodes: nodes {
              id
              uri
            }
          }
        }
      }
    `
  )
  pageNodes.forEach(node => {
    const uri = node.uri
    if (uri === "/") return
    switch (node.template.__typename) {
      case "WPGraphQL_CustomTemplateTemplate":
        actions.createPage({
          path: uri,
          component: require.resolve(`./src/templates/pages`),
          context: { ...node, pluginOptions },
        })
        break
      case "WPGraphQL_NoSidebarTemplate":
        actions.createPage({
          path: uri,
          component: require.resolve(`./src/templates/pagesNoSideBar`),
          context: { ...node, pluginOptions },
        })
        break
      case "WPGraphQL_ContactTemplate":
        actions.createPage({
          path: uri,
          component: require.resolve(`./src/templates/pageContact`),
          context: { ...node, pluginOptions },
        })
        break
      default:
        actions.createPage({
          path: uri,
          component: require.resolve(`./src/templates/pages`),
          context: { ...node, pluginOptions },
        })
    }
  })
  postNodes.forEach(node => {
    const uri = node.uri
    actions.createPage({
      path: uri,
      component: require.resolve(`./src/templates/posts`),
      context: { ...node, pluginOptions },
    })
  })
}
