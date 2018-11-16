import React from 'react'
import { graphql } from 'gatsby'

export default ({ data }) => (
  <ul>
    {data.allContentfulPage.edges.map(edge => {
      return <li key={edge.node.id}>{edge.node.title}</li>
    })}
  </ul>
)

export const query = graphql`
    query {
        allContentfulPage {
            edges {
                node {
                    id,
                    title,
                    blocks {
                        id,
                        content {
                            nodeType,
                            content {
                                nodeType,
                                content {
                                    value
                                    nodeType
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`
