import React from 'react'
import get from 'lodash/get'

class AboutTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const { previous, next } = this.props.pathContext
    const info = post.frontmatter
    console.log(info.image1)

    return (
      <div>
        <h1>About Us</h1>
        <p>Hello World!</p>
      </div>
    )
  }
}

export default AboutTemplate