import { EDIT_CON } from '.'

export default function editCon ({_id, text}) {
  return {
    type: EDIT_CON,
    _id,
    text
  }
}
