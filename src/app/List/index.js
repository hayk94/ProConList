import React from 'react'
import PropTypes from 'prop-types'
import Item from './Item'

const List = props => <ol id={`${props.elemId || ''}`} className={`list ${props.className || ''}`}>
  {props.data.map(item => <Item key={item._id}>{item.text}</Item>)}
</ol>

export default List

List.propTypes = {
  elemId: PropTypes.string,
  className: PropTypes.string,
  data: PropTypes.array
}
