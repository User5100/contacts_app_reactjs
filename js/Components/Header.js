import React from 'react'
import { Link } from 'react-router-dom'
const { func, bool, string } = React.PropTypes

const Header = React.createClass({
  propTypes: {
    handleSearchTermChange: func,
    showSearch: bool,
    searchTerm: string
  },
  handleSubmit (event) {
    event.preventDefault()
  },
  render () {
    let utilSpace
    if (this.props.showSearch) {
      utilSpace =
        (<div>
          <ul className='nav navbar-nav hidden-xs'>
            <li>
              <Link to='/' >Home
              </Link>
            </li>
          </ul>
          <form onSubmit={this.handleSubmit}
            className='navbar-form navbar-right app-search'>
            <div className='form-group'>
              <input className='form-control'
                onChange={this.props.handleSearchTermChange}
                value={this.props.searchTerm} type='text' placeholder='Search for contact' />
            </div>
          </form>
        </div>)
    } else {
      utilSpace =
        (<div>
          <ul className='nav navbar-nav hidden-xs'>
            <li>
              <Link to='/contacts' >My Contacts</Link>
            </li>
          </ul>
        </div>)
    }
    return (
      <nav className='navbar navbar-inverse navbar-fixed-top app-navbar'>
        <div className='container'>
          {utilSpace}
        </div>
      </nav>
    )
  }
})

export default Header
