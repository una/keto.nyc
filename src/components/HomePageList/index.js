import React from 'react'
import get from 'lodash/get'
import Link from 'gatsby-link'
import style from './style.module.css'

class HomePageList extends React.Component {
  render() {
    return (
      <ul className={style.homePageList}>
      {
        this.props.posts.map(({ node }) => {
          const title = get(node, 'frontmatter.title') || node.fields.slug
          return (
            <li key={node.fields.slug} className={style.homePagePost}>
              <h3>
                <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
              <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </li>
          )
        })
      }
      </ul>
    )
  }
}

export default HomePageList