import { DRAG_CON } from '.'

export default function dragCon ({dragIndex, hoverIndex}) {
  return {
    type: DRAG_CON,
    dragIndex,
    hoverIndex
  }
}
