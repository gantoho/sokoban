import { it, expect, describe, beforeEach } from 'vitest'
import { usePlayerStore } from '../player'
import { setActivePinia, createPinia } from 'pinia'

describe('player', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })
  it('should move to top', () => {
    const { player, movePlayerToTop } = usePlayerStore()
    player.x = 1
    player.y = 1
    movePlayerToTop()
    expect(player.y).toBe(1)
  })

  it('should move to bottom', () => {
    const { player, movePlayerToBottom } = usePlayerStore()
    player.x = 1
    player.y = 1
    movePlayerToBottom()
    expect(player.y).toBe(1)
  })

  it('should move to left', () => {
    const { player, movePlayerToLeft } = usePlayerStore()
    player.x = 1
    player.y = 1
    movePlayerToLeft()
    expect(player.x).toBe(1)
  })

  it('should move to right', () => {
    const { player, movePlayerToRight } = usePlayerStore()
    player.x = 1
    player.y = 1
    movePlayerToRight()
    expect(player.x).toBe(2)
  })

  it('should not move to left when collision a wall', () => {
    const { player, movePlayerToLeft } = usePlayerStore()
    player.x = 1
    player.y = 1
    movePlayerToLeft()
    expect(player.x).toBe(1)
  })
})
