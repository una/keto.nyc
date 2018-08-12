import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import get from 'lodash/get'
import style from './style.module.css'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const { previous, next } = this.props.pathContext
    const info = post.frontmatter
    console.log(info.image1)

    return (
      <div>
        <Helmet title={`${info.title} | ${siteTitle}`} />
        <div className={style.recipe}>
          <figure className={style.mediaContainer}>
            <img src={info.image1.childImageSharp.resolutions.src} srcSet={info.image1.childImageSharp.resolutions.srcSet} />
            <img src={info.image2.childImageSharp.resolutions.src} srcSet={info.image2.childImageSharp.resolutions.srcSet} />
          </figure>

          <div className={style.content}>
            <h1 className={style.title}>{info.title}</h1>

            <ul className={style.nutrition}>
              <li><span className={style.value}>{info.servings}</span>servings</li>
              <li><span className={style.value}>{info.netCarbs}</span>net carbs</li>
              <li><span className={style.value}>{info.calories}</span>calories</li>
              <li><span className={style.value}>{info.fat}</span>fat (g)</li>
              <li><span className={style.value}>{info.carbs}</span>carbs (g)</li>
              <li><span className={style.value}>{info.fiber}</span>fiber (g)</li>
              <li><span className={style.value}>{info.sugars}</span>sugar alcohol (g)</li>
            </ul>        
            
            <div dangerouslySetInnerHTML={{ __html: post.html }} />

            <div className={style.footer}>
              {/* <div className={style.meta}>
                <p>{info.date}</p>
                <p>*Little side note: {info.funFact}</p>
              </div> */}
              <ul className={style.prevNext}>
                {previous && (
                  <li>
                    <Link to={previous.fields.slug} rel="prev">
                      ← {previous.frontmatter.title}
                    </Link>
                  </li>
                )}

                {next && (
                  <li>
                    <Link to={next.fields.slug} rel="next">
                      {next.frontmatter.title} →
                </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>  
      </div>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        funFact
        servings
        netCarbs
        calories
        fat
        carbs
        fiber
        sugars
        prepTime
        cookTime
        readyTime
        image1 {
          childImageSharp {
            resolutions(width: 800) {
              width
              height
              src
              srcSet
            }
          }
        }
        image2 {
          childImageSharp {
            resolutions(width: 800) {
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
`