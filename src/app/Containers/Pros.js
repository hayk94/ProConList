import { Container } from 'unstated'

import {
  editItemMethod,
  dragItemMethod
} from './methods'

class Pros extends Container {
  state = {
    items: [
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
  }

  editItem = editItemMethod.bind(this)

  dragItem = dragItemMethod.bind(this)
}

export default Pros
