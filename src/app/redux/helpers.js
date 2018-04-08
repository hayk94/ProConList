import randomstring from 'randomstring'

/**
 * editItemInList - edits item in the list and returns a new array
 *
 * @param  {Array} list     array to insert into
 * @param  {string} _id   _id of the item to edit
 * @param  {string} text   text of the item to edit
 * @return {Array}         final array
 */
function editItemInList (list, _id, text) {
  if (!text) {
    return list.filter(item => item._id !== _id)
  }
  let currentItem = list.find(item => item._id === _id)
  if (currentItem) {
    currentItem.text = text
    const index = list.indexOf(currentItem)
    let newList = list.filter(item => item._id !== _id)
    return insertAt(newList, index, currentItem)
  }
  return insertAt(list, list.length - 1, { _id: randomstring.generate(), text })
}

/**
 * insertAt - insert item into the array at specified index and returns the new array
 *
 * @param  {Array} arr     array to insert into
 * @param  {number} index   index to insert at
 * @param  {any} newItem item to insert
 * @return {Array}         final array
 */
function insertAt (arr, index, newItem) {
  if (arr.length - 1 === index) {
    return [...arr, newItem]
  }
  return [
    // part of the array before the specified index
    ...arr.slice(0, index),
    // inserted item
    newItem,
    // part of the array after the specified index
    ...arr.slice(index)
  ]
}

export {
  insertAt,
  editItemInList
}
