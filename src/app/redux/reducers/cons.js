import { EDIT_CON } from '../actions'

import { editItemInList } from '../helpers'

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
  const { type, _id, text } = action
  switch (type) {
    case EDIT_CON:
      return editItemInList(state, _id, text)
  }

  return state
}
