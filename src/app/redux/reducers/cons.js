import { EDIT_CON, DRAG_CON } from '../actions'

import { editItemInList, dragItem } from '../helpers'

const fixture = [
  {
    _id: 'dgf',
    text: 'I am a con1'
  },
  {
    _id: 'dgfdf',
    text: 'I am a con2'
  },
  {
    _id: 'dggdhfghf',
    text: 'I am a con3'
  }
]

export default function pros (state = fixture, action) {
  switch (action.type) {
    case EDIT_CON:
      const { _id, text } = action
      return editItemInList(state, _id, text)
    case DRAG_CON:
      const { dragIndex, hoverIndex } = action
      return dragItem(state, dragIndex, hoverIndex)
  }

  return state
}
