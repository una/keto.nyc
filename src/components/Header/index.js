import React from 'react'
import Link from 'gatsby-link'
import style from './style.module.css'

class Header extends React.Component {
  render() {
    return (
      <header className={style.header}>
        <Link to={'/'} >
          <figure>
            <img src='/logo.svg' />
          </figure>
        </Link>
      </header>
    )
  }
}

export default Header