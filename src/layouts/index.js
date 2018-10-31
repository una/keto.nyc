import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/Header'
import get from 'lodash/get'

class Template extends React.Component {
  render() {
    const { children } = this.props
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <div>
        <Header posts={posts} />
        {children()}
      </div>
    )
  }
}

Template.propTypes = {
  children: React.PropTypes.func,
  route: React.PropTypes.object,
}

export const headerPostQuery = graphql`
  query headerPostQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            tags
            published
            image1 {
              childImageSharp {
                resolutions(width: 250) {
                  width
                  height
                  src
                  srcSet
                }
              }
            }
          }
        }
      }
    }
  }
`

export default Template
