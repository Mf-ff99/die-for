import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql, useStaticQuery, Link } from 'gatsby'
import styled from '@emotion/styled'

import ContextProvider from '~/provider/ContextProvider'

import { GlobalStyle } from '~/utils/styles'
import Navigation from '~/components/Navigation'

const Wrapper = styled.div`
  margin: 0 auto;
  /* max-width: 960px; */
  padding: 0px 50px 0 50px;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(
    graphql`
    {
      allShopifyProduct {
        nodes {
          title
          handle
        }
      }
  
 
          site {
            siteMetadata {
              title
            }
          }
        
      }

   `)

  return (
    <ContextProvider>
      <GlobalStyle />

      <>
        <Navigation siteTitle={data.site.siteMetadata.title} />
        <Wrapper>
          {children}


          <footer>


            <ul>
              {data !== undefined ? data.allShopifyProduct.nodes.map(({ id }) => (

                <li><Link to={`/page/${id}/`}>
                  {id}
                </Link></li>

              )) : null}</ul>

© {new Date().getFullYear()}, Built with
                {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </Wrapper>
      </>


    </ContextProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
