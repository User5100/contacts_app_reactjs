import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'

const Landing = React.createClass({
  getInitialState () {
    return {
      searchTerm: 'Initial searchTerm'
    }
  },
  handleSearchTermChange (event) {
    this.setState({ searchTerm: event.target.value })
  },
  render () {
    return (
      <div>
        <Header showSearch={false}
          handleSearchTermChange={this.handleSearchTermChange}
          searchTerm={this.state.searchTerm} />
        <div className='docs-header'>
          <div className='container'>
            <h1>Welcome to Connect</h1>
            <p>A place to organise your business contacts....</p>
          </div>
        </div>
        <div className='container docs-content'>
          <h1>The larger your network, the larger networth</h1>
          <p>Individuals who have a larger network of acquaintances on average earn higher incomes then than those that don't. But building and maintaining large network of contacts is tricky. It's hard to keep track of all the people you meet. That's where Connect comes in. Connect helps you build, organise and find people in your network. Start today.</p>
          <Link to='/contacts' ><button className='btn btn-lg call-action'>Start Now!</button></Link>
        </div>
      </div>)
  }})

export default Landing
