import React from 'react'
import { graphql } from 'gatsby'
import renderHTML from "react-render-html"

const PolicyPage = ({ data })=> {
    const page = data.shopifyPage

   
    return (
        <div>
    <h1>{page.title}</h1>
    {renderHTML(page.body)}
  
    </div>
    )


} 
export const query = graphql`
query($handle: String!) {
    
    shopifyProduct(handle: { eq: $handle }) {
      handle
      title
      description
    }
  }
  
`

export default PolicyPage