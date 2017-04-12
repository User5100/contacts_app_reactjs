import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'
const { shape, number, string, func } = React.PropTypes

const ContactDetails = React.createClass({
  propTypes: {
    contact: shape({
      id: number,
      name: string
    }),
    handleUpdateSubmit: func,
    handleDeleteContact: func,
    tempMessage: string
  },
  getInitialState () {
    return {
      editContactEnabled: false,
      editName: ''
    }
  },
  handleUpdateSubmit (event) {
    event.preventDefault()
    this.props.handleUpdateSubmit(this.props.contact.id, this.state.editName)
    this.setState({ editName: '' })
  },
  handleUpdateFormChanges (event) {
    this.setState({ editName: event.target.value })
  },
  handleEditForm () {
    this.setState({ editContactEnabled: true })
  },
  handleCancelForm () {
    this.setState({ editContactEnabled: false })
  },
  handleDeleteContact () {
    this.setState({ editContactEnabled: false })
    this.props.handleDeleteContact(this.props.contact.id)
  },
  componentDidMount () {
    if (this.props.contact !== undefined) {
      this.setState({ editName: this.props.contact.name })
    }
  },
  render () {
    return (
      <div>
        <Header
          showSearch={false}
         />
        <div className='container'>
          <div className='m-t'>
            <div className='row'>
              <div className='col-10'>
                <div className='panel panel-default panel-profile'>
                  <div className='panel-heading' style='background-image: url(https://igcdn-photos-h-a.akamaihd.net/hphotos-ak-xfa1/t51.2885-15/11312291_348657648678007_1202941362_n.jpg)' />
                  <div className='panel-body text-center'>
                    <h5 className='panel-title'>{this.props.contact ? this.props.contact.name : 'User has been deleted'}</h5>
                    <p className='m-b-md' />
                    { (!this.state.editContactEnabled && this.props.contact) &&
                    <button className='btn btn-primary btn-sm btn-space'
                      onClick={this.handleEditForm}>
                      <span className='icon icon-pencil' /> Edit
                        </button>
                    }
                    {this.props.contact ? <button className='btn btn-lg btn-danger btn-sm btn-space'
                      onClick={this.handleDeleteContact} >
                      <span className='icon icon-erase' /> Remove
                    </button> : <Link to='/contacts' className='btn-space'><button className='btn btn-primary btn-sm'><span className='icon icon-users' /> Back to Contacts
                        </button></Link>}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {this.props.tempMessage &&
          <div className='growl growl-static'>
            <div className='alert alert-success alert-dismissable'>
              <strong>{this.props.tempMessage}</strong>
            </div>
          </div>
          }
          { this.state.editContactEnabled &&
            <div className='m-t'>
              <div className='row'>
                <div className='col-10'>
                  <div className='panel panel-default panel-profile'>
                    <div className='panel-body text-center' >
                      <p className='m-b-md'><span className='icon icon-pencil' /> Update Details</p>
                      <form onSubmit={this.handleUpdateSubmit}>
                        <input className='form-control'
                          type='text' placeholder='Name' value={this.state.editName}
                          onChange={this.handleUpdateFormChanges} />
                        <button className='btn btn-lg btn-primary btn-sm btn-space'
                          type='submit'>Save</button>
                        <button className='btn btn-lg btn-warning btn-sm btn-space'
                          onClick={this.handleCancelForm}>Cancel</button>
                      </form>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    )
  }
})

export default ContactDetails
