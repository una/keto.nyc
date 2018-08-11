import React from 'react'
import style from './style.module.css'
import profilePic from './media/profile-pic.jpg'

class Bio extends React.Component {
  render() {
    return (
      <p>
        <img
          src={profilePic}
          alt={`Kyle Mathews`}
          className={style.profilePic}
        />
        Written by <strong>Kyle Mathews</strong> who lives and works in San
        Francisco building useful things.{' '}
        <a href="https://twitter.com/kylemathews">
          You should follow him on Twitter
        </a>
      </p>
    )
  }
}

export default Bio
