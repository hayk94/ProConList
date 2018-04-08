import React from 'react'
import PropTypes from 'prop-types'

import Item from './Item'

import { RIEInput } from 'riek'

const List = props => <ol id={`${props.elemId || ''}`} className={`list ${props.className || ''}`}>
  {[...props.data, {_id: 'newItem', text: ''}].map(item => <Item key={item._id}>
    <RIEInput
      className='RIEInput'
      change={({text}) => props.editItem({ _id: item._id, text })}
      value={item.text}
      propName='text' />
  </Item>)}
</ol>

export default List

List.propTypes = {
  elemId: PropTypes.string,
  className: PropTypes.string,
  data: PropTypes.array,
  editItem: PropTypes.func
}
