import React from 'react'
const { func, string } = React.PropTypes

const AddContactForm = React.createClass({
  propTypes: {
    handleSubmit: func,
    name: string,
    errorMessage: string,
    handleNewContactChange: func,
    handleEmptySubmit: func
  },
  render () {
    var submitHandler = this.props.name ? this.props.handleSubmit : this.props.handleEmptySubmit
    return (
      <div className='panel panel-default add-contact-form'>
        <div className='panel-body'>
          <h5 className='m-t-0'><span className='text-muted icon icon-user m-r' />Add Contact</h5>
          <form onSubmit={submitHandler}>
            {this.props.errorMessage && <span>{this.props.errorMessage}</span>}
            <div className='input-group'>
              <input className='form-control my-input'
                type='text' value={this.props.name}
                placeholder='Name'
                onChange={this.props.handleNewContactChange} />
            </div>
          </form>
        </div>
      </div>
    )
  }
})

export default AddContactForm
