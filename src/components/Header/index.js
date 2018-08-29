import React from 'react'
import Link from 'gatsby-link'
import style from './style.module.css'

class Header extends React.Component {
  render() {
    return (
      <header className={style.header}>
        <Link to={'/'} >
          <figure className={style.logo}>
            <img src='/logo.svg' />
          </figure>
        </Link>
        <ul className={style.nav}>
          <li className={style.navItem}><Link className={style.navLinkMore} to={'/'}>Snacks</Link>
            <ul className={style.moreContent}>
              {
                this.props.posts.map(({ node }) => {
                  const post = node.frontmatter
                  if (
                    post.tags.includes('snack')
                  ) {
                    return (
                      <li>
                        <Link to={'/'}>
                          <figure className={style.mediaContainer}>
                            <img src={post.image1.childImageSharp.resolutions.src} srcSet={post.image1.childImageSharp.resolutions.srcSet} />
                          </figure> 
                          <h3>{post.title}</h3>
                        </Link>
                      </li>
                    )
                  }
                })}
            </ul>
          </li>
          <li className={style.navItem}><Link className={style.navLinkMore} to={'/'}>Meals</Link>
            <ul className={style.moreContent}>
              {
                this.props.posts.map(({ node }) => {
                  const post = node.frontmatter
                  if (
                    post.tags.includes('meal')
                  ) {
                    return (
                      <li>
                        <Link to={'/'}>
                          <figure className={style.mediaContainer}>
                            <img src={post.image1.childImageSharp.resolutions.src} srcSet={post.image1.childImageSharp.resolutions.srcSet} />
                          </figure>
                          <h3>{post.title}</h3>
                        </Link>
                      </li>
                    )
                  }
                })}
            </ul>
          </li>
          <li className={style.navItem}><Link className={style.navLinkMore} to={'/'}>Desserts</Link>
            <ul className={style.moreContent}>
              {
                this.props.posts.map(({ node }) => {
                  const post = node.frontmatter
                  if (
                    post.tags.includes('dessert')
                  ) {
                    return (
                      <li>
                        <Link to={'/'}>
                          <figure className={style.mediaContainer}>
                            <img src={post.image1.childImageSharp.resolutions.src} srcSet={post.image1.childImageSharp.resolutions.srcSet} />
                          </figure>
                          <h3>{post.title}</h3>
                        </Link>
                      </li>
                    )
                  }
                })}
            </ul>
          </li>
          <li><Link to={'/'}>About</Link></li>
        </ul>
      </header>
    )
  }
}

export default Header