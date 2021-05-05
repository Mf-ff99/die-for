const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const { data } = await graphql(`
    {
      allShopifyProduct {
        edges {
          node {
            title
            handle
            shopifyId
          }
        }
      }


      allSitePage {
        edges {
          node {
            id
          }
        }
      }

    

      shopifyCollection {
        title
        handle
      }
      
      
    }
  `)

  
  console.log(data)
    

   data !== undefined ? data.allShopifyProduct.edges.forEach(({ node }) => {
      createPage({
        path: `/product/${node.handle}/`,
        component: path.resolve(`./src/templates/ProductPage/index.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          handle: node.handle,
          shopifyId: node.shopifyId
        },
      })
    }) : null



 data !== undefined ? data.allShopifyPage.edges.forEach((el) => {
    createPage({
      path: `/page/${el.handle}/`,
      component: path.resolve(`./src/templates/Pages/index.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        handle: el.handle,
      },
    })
  }) : null




  data !== undefined ? data.allShopifyCollection.forEach(el => {
    createPage({
      path: `/collection/${el.handle}/`,
      component: path.resolve(`./src/templates/Collection/index.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        handle: el.handle,
      },
    })
  }) : null
  
 

}
