import { defineStore } from 'pinia'
import { reactive } from 'vue'
import { useMapStore } from './map'

export const usePlayerStore = defineStore('player', () => {
  const player = reactive({
    x: 1,
    y: 1
  })

  const { isWall } = useMapStore()

  const deduce = (row: number = 0, col: number = 0) => {
    let x = player.x + row
    let y = player.y + col
    if (isWall({x: y, y: x})) {
      return false
    }
    return true
  }

  const movePlayerToTop = (y: number = 1) => {
    if (deduce(0, -1)) {
      player.y -= y
    }
  }

  const movePlayerToBottom = (y: number = 1) => {
    if (deduce(0, 1)) {
      player.y += y
    }
  }

  const movePlayerToLeft = (x: number = 1) => {
    if (deduce(-1)) {
      player.x -= x
    }
  }

  const movePlayerToRight = (x: number = 1) => {
    if (deduce(1)) {
      player.x += x
    }
  }

  return {
    player,
    movePlayerToTop,
    movePlayerToBottom,
    movePlayerToLeft,
    movePlayerToRight,
  }
})
