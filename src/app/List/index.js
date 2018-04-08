import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

import Item from './Item'
import DragItem from './DragItem'

import { RIEInput } from 'riek'

class List extends Component {
  render () {
    return <ol id={`${this.props.elemId || ''}`} className={`list ${this.props.className || ''}`}>
      {[...this.props.data, {_id: 'newItem', text: ''}].map((item, index) => <DragItem
        key={item._id}
        _id={item._id}
        index={index}
        text={item.text}
        dragItem={this.props.dragItem} >
        <RIEInput
          className='RIEInput'
          change={({text}) => this.props.editItem(item._id, text)}
          value={item.text}
          propName='text' />
      </DragItem>)}
    </ol>
  }
}

export default DragDropContext(HTML5Backend)(List)

List.propTypes = {
  elemId: PropTypes.string,
  className: PropTypes.string,
  data: PropTypes.array,
  editItem: PropTypes.func,
  dragItem: PropTypes.func
}
