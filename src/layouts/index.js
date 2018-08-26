import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/Header'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    return (
      <div>
        <Header />
        {children()}
      </div>
    )
  }
}

Template.propTypes = {
  children: React.PropTypes.func,
  route: React.PropTypes.object,
}

export default Template
