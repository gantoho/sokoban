import { it, expect, beforeEach } from 'vitest'
import { useMove } from '../player'
import { createPinia, setActivePinia } from 'pinia'
import { usePlayerStore } from '../../../store/player'

beforeEach(() => {
  setActivePinia(createPinia())
})

it("shold move to left when press ArrowLeft", () => {
  const { player } = usePlayerStore()
  player.x = 1
  player.y = 1

  useMove()

  window.dispatchEvent(new KeyboardEvent('keyup', { code: 'ArrowLeft' }))
  console.log(player.x, "xxxxxx")
  expect(player.x).toBe(0)
})
