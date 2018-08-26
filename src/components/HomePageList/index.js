import React from 'react'
import get from 'lodash/get'
import Link from 'gatsby-link'
import style from './style.module.css'
import classNames from 'classNames'

class HomePageList extends React.Component {
  render() {
    return (
      <ul className={style.homePageList}>
      {
        this.props.posts.map(({ node }) => {
          const title = get(node, 'frontmatter.title') || node.fields.slug

          return (
            <li key={node.fields.slug} className={classNames(node.frontmatter.featured && style.highlight, style.post)}>
              <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
                  <h3 className={style.header}>
                  <svg viewBox="0 0 573 105">
                    <path id="curve" fill="transparent" d="M0,100.9C43.6,2.9,89.9,0,141,0c53.2,0,160.6,105.2,247.7,105.2c81.4,0,125.4-20.9,184.4-48.6" />
                    <text x="25">
                      <textPath href="#curve">
                      {title}
                    </textPath>
                    
                  </text>
                </svg>
                  </h3>
                  <figure className={style.mediaContainer}>
                    <img src={node.frontmatter.image1.childImageSharp.resolutions.src} srcSet={node.frontmatter.image1.childImageSharp.resolutions.srcSet} />
                  </figure>                    
                    <ul className={style.nutrition}>
                      <li><span className={style.value}>{node.frontmatter.calories}</span> calories</li>
                      <li><span className={style.value}>{node.frontmatter.netCarbs}</span>g net carbs</li>
                      <li><span className={style.value}>{node.frontmatter.fat}</span>g fat</li>
                      <li><span className={style.value}>{node.frontmatter.protein}</span>g protein</li>
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