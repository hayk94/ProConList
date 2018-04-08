import { EDIT_PRO, DRAG_PRO } from '../actions'

import { editItemInList, dragItem } from '../helpers'

const fixture = [
  {
    _id: 'dgf',
    text: 'I am a pro1'
  },
  {
    _id: 'dgfdf',
    text: 'I am a pro2'
  },
  {
    _id: 'dggdhfghf',
    text: 'I am a pro3'
  }
]

export default function pros (state = fixture, action) {
  switch (action.type) {
    case EDIT_PRO:
      const { _id, text } = action
      return editItemInList(state, _id, text)
    case DRAG_PRO:
      const { dragIndex, hoverIndex } = action
      return dragItem(state, dragIndex, hoverIndex)
  }

  return state
}
