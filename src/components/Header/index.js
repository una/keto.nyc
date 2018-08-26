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
            <li><Link to={'/'}>Snacks</Link></li>
            <li><Link to={'/'}>Meals</Link></li>
            <li><Link to={'/'}>Desserts</Link></li>
            <li><Link to={'/'}>About</Link></li>
          </ul>
      </header>
    )
  }
}

export default Header