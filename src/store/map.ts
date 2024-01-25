import { defineStore } from 'pinia'

export enum MapTile {
  EMPTY = 0,
  WALL = 1,
  FLOOR = 2,
}

export const useMapStore = defineStore('map', () => {
  const map = [
    [1, 1, 1, 1, 1, 1, 1],
    [1, 2, 2, 2, 2, 2, 1],
    [1, 1, 2, 1, 2, 1, 1],
    [1, 2, 1, 2, 2, 2, 1],
    [1, 2, 2, 2, 1, 2, 1],
    [1, 2, 1, 2, 2, 2, 1],
    [1, 1, 1, 1, 1, 1, 1],
  ]

  const boundary = () => {
    const arr: number[][] = []
    map.map((row, x) => {
      row.map((col, y) => {
        if (col === 1) {
          arr.push([y, x])
        }
      })
    })
    return arr
  }

  return {
    map,
    boundary
  }
})
