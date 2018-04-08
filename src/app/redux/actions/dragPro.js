import { DRAG_PRO } from '.'

export default function dragPro (dragIndex, hoverIndex) {
  return {
    type: DRAG_PRO,
    dragIndex,
    hoverIndex
  }
}
