import { it, expect, beforeEach } from 'vitest'
import { useMove } from '../player'
import { createPinia, setActivePinia } from 'pinia'
import { usePlayerStore } from '../../../store/player'
import { useMapStore } from '../../../store/map'

beforeEach(() => {
  setActivePinia(createPinia())
})

it("shold move to left when press ArrowLeft", () => {
  const { player } = usePlayerStore()
  const { setupMap } = useMapStore()
  const newMap = [
    [1, 2, 1],
    [2, 2, 2],
    [1, 2, 1],
  ]
  setupMap(newMap)
  player.x = 1
  player.y = 1
  useMove()
  window.dispatchEvent(new KeyboardEvent('keyup', { code: 'ArrowLeft' }))
  expect(player.x).toBe(0)
})
