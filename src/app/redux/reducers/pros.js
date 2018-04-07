// import { SET_TEST_REDUCER } from '../actions'

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
  // switch (action.type) {
  //   case SET_TEST_REDUCER:
  //     return action.payload
  // }

  return state
}
