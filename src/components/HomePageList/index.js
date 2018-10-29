import React from 'react'
import get from 'lodash/get'
import Link from 'gatsby-link'
import style from './style.module.css'
import classnames from 'classnames'

class HomePageList extends React.Component {
  render() {
    return (
      <ul className={style.homePageList}>
      {
        this.props.posts.map(({ node }) => {
          const title = get(node, 'frontmatter.title') || node.fields.slug
          const post = node.frontmatter

          return (
            <li key={node.fields.slug} className={classnames(post.featured && style.highlight, style.post)}>
                <Link to={node.fields.slug}>
                  <h3 className={style.header}>
                    {title}
                  </h3>
                  <figure className={style.mediaContainer}>
                    <img src={post.image1.childImageSharp.resolutions.src} srcSet={post.image1.childImageSharp.resolutions.srcSet} />
                  </figure>                    
                    <ul className={style.nutrition}>
                      <li><span className={style.value}>{post.calories}</span> calories</li>
                      <li><span className={style.value}>{post.netCarbs}</span>g net carbs</li>
                      <li><span className={style.value}>{post.fat}</span>g fat</li>
                      <li><span className={style.value}>{post.protein}</span>g protein</li>
                    </ul> 
                </Link>
            </li>
          )
        })
      }
      </ul>
    )
  }
}

export default HomePageList