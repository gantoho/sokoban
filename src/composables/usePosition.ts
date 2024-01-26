import { computed } from "vue"

export interface Position {
  x: number,
  y: number
}

export const usePosition = (pos: Position) => {
  const STEP = 60
  const position = computed(() => {
    return {
      top: STEP * pos.y + "px",
      left: STEP * pos.x + "px"
    }
  })
  return {
    position
  }
}
