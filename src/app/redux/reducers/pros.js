import { EDIT_PRO } from '../actions'

import { editItemInList } from '../helpers'

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
  const { type, _id, text } = action
  switch (type) {
    case EDIT_PRO:
      return editItemInList(state, _id, text)
  }

  return state
}
