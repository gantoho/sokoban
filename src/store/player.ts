import { defineStore } from 'pinia'
import { reactive } from 'vue'
import { useMapStore, MapTile } from './map'

export const usePlayerStore = defineStore('player', () => {
  const player = reactive({
    x: 1,
    y: 1
  })

  const { map } = useMapStore()

  const deduce = (row: number = 0, col: number = 0) => {
    let x = player.x + row
    let y = player.y + col
    if (map[y][x] === MapTile.WALL) {
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
