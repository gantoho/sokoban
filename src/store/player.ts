import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const usePlayerStore = defineStore('player', () => {
  const player = reactive({
    x: 1,
    y: 1
  })

  const movePlayerToTop = (y: number = 1) => {
    player.y -= y
  }

  const movePlayerToBottom = (y: number = 1) => {
    player.y += y
  }

  const movePlayerToLeft = (x: number = 1) => {
    player.x -= x
  }

  const movePlayerToRight = (x: number = 1) => {
    player.x += x
  }

  return {
    player,
    movePlayerToTop,
    movePlayerToBottom,
    movePlayerToLeft,
    movePlayerToRight,
  }
})
