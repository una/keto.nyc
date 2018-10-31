import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import '../global-styles/base.module.css'
import Intro from '../components/Intro'
import HomePageList from '../components/HomePageList'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <div>
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content="Keto / low carb recipes and New York City (NYC) restaurant dish reviews for the ketogenic diet" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Helmet>
        <Intro />
        <HomePageList posts={posts} />
      </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            featured
            published
            netCarbs
            calories
            fat
            protein
            image1 {
              childImageSharp {
                resolutions(width: 600) {
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
