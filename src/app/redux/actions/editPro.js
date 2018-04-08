import { EDIT_PRO } from '.'

export default function editPro ({_id, text}) {
  return {
    type: EDIT_PRO,
    _id,
    text
  }
}
