import React from 'react'
import PropTypes from 'prop-types'

const Item = props => <li id={`${props.elemId || ''}`} className={`list__item ${props.className || ''}`}>
  {props.children}
</li>

export default Item

Item.propTypes = {
  _id: PropTypes.string,
  text: PropTypes.string,
  elemId: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node
}
