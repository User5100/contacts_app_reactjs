import React from 'react'
import { Link } from 'react-router-dom'
const { string, number } = React.PropTypes

const ContactCard = (props) => {
  return (
    <li className='list-group-item'>
      <div className='media col-12'>
        <a className='media-left' />
        {props.id &&
            (<div className='media-body'>
              <Link className='pull-right'
                to={`/contact/${props.id}/`}><button className='btn btn-default-outline'><span className='icon icon-v-card'> Info</span></button>
              </Link>
              <strong>{props.name}</strong>
            </div>
            )
          }
      </div>
    </li>
  )
}

ContactCard.propTypes = {
  name: string,
  id: number
}

export default ContactCard
