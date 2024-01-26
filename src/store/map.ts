import { defineStore } from 'pinia'
import { Position } from '../composables/usePosition'

export enum MapTile {
  EMPTY = 0,
  WALL = 1,
  FLOOR = 2,
}

type Map = MapTile[][]

export const useMapStore = defineStore('map', () => {
  let map = [
    [1, 1, 1, 1, 1, 1, 1],
    [1, 2, 2, 2, 2, 2, 1],
    [1, 1, 2, 1, 2, 1, 1],
    [1, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 1, 2, 1],
    [1, 2, 1, 2, 2, 2, 1],
    [1, 1, 1, 1, 1, 1, 1],
  ]

  const setupMap = (newMap: Map) => {
    map.splice(0, map.length, ...newMap)
  }

  const isWall = (position: Position) => {
    return map[position.y][position.x] === MapTile.WALL
  }

  return {
    map,
    setupMap,
    isWall
  }
})
