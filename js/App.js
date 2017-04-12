import React from 'react'
import '../css/application.css'
import '../css/toolkit.css'
import { Route } from 'react-router-dom'
import AsyncRoute from './AsyncRoute'
import { addContactToState, updateContact, removeContact } from './Helpers/contactHelpers'
import { loadContacts, addNewContact, updateExistingContact,
         deleteContact } from './Services/contactsService'

if (global) {
  global.System = { import () {} }
}

var App = React.createClass({
  getInitialState () {
    return {
      contacts: [],
      deleteConfirmationMessage: '',
      tempMessage: ''
    }
  },
  handleAddContactSubmit (newContact) {
    let updatedContacts = addContactToState(this.state.contacts, newContact)
    this.setState({ contacts: updatedContacts })
    addNewContact(newContact).then(() => {
      this.showTempMessage('New contact added')
    })
  },
  showTempMessage (msg) {
    this.setState({ tempMessage: msg })
    setTimeout(() => this.setState({ tempMessage: '' }), 800)
  },
  handleUpdateSubmit (...update) {
    let [ id, name ] = update
    let contact = { id, name }
    let updatedContacts = updateContact(this.state.contacts, id, { name })
    this.setState({ contacts: updatedContacts })
    updateExistingContact(id, contact)
  },
  handleDeleteContact (id) {
    let updatedContacts = removeContact(this.state.contacts, id)
    this.setState({ contacts: updatedContacts })
    deleteContact(id)
      .then(() => this.showTempMessage('Contact has been deleted'))
  },
  componentDidMount () {
    loadContacts().then(response => {
      this.setState({ contacts: response.data })
    })
    .catch(error => console.error('Error: ', error))
  },
  render () {
    return (
      <div>
        <Route exact path='/' component={(props) => <AsyncRoute props={props} loadingPromise={System.import('./Components/Landing')} />} />
        <Route path='/contacts' component={(props) =>
          <AsyncRoute props={Object.assign({ contacts: this.state.contacts, tempMessage: this.state.tempMessage, handleAddContactSubmit: this.handleAddContactSubmit }, props)}
            loadingPromise={System.import('./Components/Contacts')} />}
        />
        <Route path='/contact/:id' component={(props) => {
          const contact = this.state.contacts.filter(_contact => {
            return parseInt(props.match.params.id) === _contact.id
          })
          return <AsyncRoute props={Object.assign({ contact: contact[0], handleUpdateSubmit: this.handleUpdateSubmit, handleDeleteContact: this.handleDeleteContact, tempMessage: this.state.tempMessage }, props)} loadingPromise={System.import('./Components/ContactDetails')} />
        }} />
      </div>
    )
  }
})

export default App
