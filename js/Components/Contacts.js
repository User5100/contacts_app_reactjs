import React from 'react'
import ContactsList from './ContactsList'
import AddContactForm from './AddContactForm'
import Header from './Header'
import { generateId } from '../Helpers/contactHelpers'
const { arrayOf, shape, number, string, func } = React.PropTypes

const Contacts = React.createClass({
  propTypes: {
    contacts: arrayOf(shape({
      id: number,
      name: string
    })),
    handleAddContactSubmit: func,
    tempMessage: string
  },
  getInitialState () {
    return {
      name: '',
      errorMessage: '',
      searchTerm: ''
    }
  },
  handleNewContactChange (event) {
    this.setState({ name: event.target.value })
  },
  handleEmptySubmit (event) {
    event.preventDefault()
    this.setState({
      errorMessage: 'Please supply a contact name'
    })
  },
  handleSubmit (event) {
    var newContact = { id: generateId(), name: this.state.name }
    event.preventDefault()
    this.props.handleAddContactSubmit(newContact)
    this.setState({ name: '' })
  },
  handleSearchTermChange (event) {
    this.setState({ searchTerm: event.target.value })
  },
  render () {
    return (
      <div>
        <Header
          showSearch
          searchTerm={this.state.searchTerm}
          handleSearchTermChange={this.handleSearchTermChange} />
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <AddContactForm
                handleSubmit={this.handleSubmit}
                name={this.state.name}
                errorMessage={this.state.errorMessage}
                handleNewContactChange={this.handleNewContactChange}
                handleEmptySubmit={this.handleEmptySubmit}
              />
              {this.props.tempMessage &&
                <div className='growl growl-static'>
                  <div className='alert alert-success alert-dismissable'>
                    <strong>{this.props.tempMessage}</strong>
                  </div>
                </div>
              }
              <ContactsList
                contacts={this.props.contacts}
                searchTerm={this.state.searchTerm}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
})

export default Contacts
