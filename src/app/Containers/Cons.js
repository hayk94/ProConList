import { Container } from 'unstated'

import {
  editItemMethod,
  dragItemMethod
} from './methods'

class Cons extends Container {
  state = {
    items: [
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
  }

  editItem = editItemMethod.bind(this)

  dragItem = dragItemMethod.bind(this)
}

export default Cons
