// import { SET_TEST_REDUCER } from '../actions'

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

export default function cons (state = fixture, action) {
  // switch (action.type) {
  //   case SET_TEST_REDUCER:
  //     return action.payload
  // }

  return state
}
