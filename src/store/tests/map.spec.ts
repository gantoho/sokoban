import { it, test, expect, describe, beforeEach } from 'vitest'
import { useMapStore } from '../map'
import { setActivePinia, createPinia } from 'pinia'

describe('map', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })
  it('should first', () => {
    expect(true).toBe(true)
  })
  test('should setup map', () => {
    const { map, setupMap } = useMapStore()
    const newMap = [
      [1, 2, 1, 1, 1],
      [2, 2, 2, 1, 1],
      [1, 2, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
    ]
    setupMap(newMap)
    expect(map).toEqual(newMap)
  })
})
