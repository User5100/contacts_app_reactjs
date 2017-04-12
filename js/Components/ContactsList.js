import React from 'react'
import ContactCard from './ContactCard'
const { arrayOf, shape, number, string } = React.PropTypes

const ContactsList = React.createClass({
  propTypes: {
    contacts: arrayOf(shape({
      id: number,
      name: string
    })),
    searchTerm: string
  },
  render () {
    var _contacts = this.props.contacts
      .filter(contact => {
        return `${contact.name}`.toUpperCase().indexOf(this.props.searchTerm.toUpperCase()) >= 0
      })

    return (
      <ul className='media-list media-list-users list-group'>
        <li className='list-group-item'>
          <div className='media col-12'>
            <a className='media-left' />
            <div className='media-body'>
              <strong>My Contacts</strong>
            </div>
          </div>
        </li>
        { _contacts.length === 0 &&
          <li className='list-group-item'>
            <div className='media col-12'>
              <a className='media-left' />
              <div className='media-body'>
                <strong>No contacts found</strong>
              </div>
            </div>
          </li>
              }
        { _contacts.map(contact => {
          return <ContactCard key={parseInt(contact.id)} {...contact} />
        })
              }
      </ul>
    )
  }
})

export default ContactsList
