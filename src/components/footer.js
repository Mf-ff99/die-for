import React from 'react'
import { StaticQuery, graphql,  useStaticQuery, Link } from 'gatsby'

const Footer= () => {
  const { allSitepage } = useStaticQuery(
    graphql`
    {
      allSitePage {
        edges {
          node {
            id
          }
        }
      }
    }`)
  
  return (
  

              <footer>
                © {new Date().getFullYear()}, Built with
                {` `}
                <a href="https://www.gatsbyjs.org">Gatsby</a>

                {allSitePage.edges.map(({ id }) => (
            <Link to={`/page/${id}/`}>
           {title}
            </Link>
          
        ))}
              </footer>
           
  )
}


export default Footer
