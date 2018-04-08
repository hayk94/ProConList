import { editItemInList, dragItem } from '../helpers'

function editItemMethod (_id, text) {
  return this.setState({items: editItemInList(this.state.items, _id, text)})
}

function dragItemMethod (startIndex, endIndex) {
  return this.setState({items: dragItem(this.state.items, startIndex, endIndex)})
}

export {
  editItemMethod,
  dragItemMethod
}
