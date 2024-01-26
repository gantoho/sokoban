import { defineStore } from 'pinia'

interface Cargo {
  x: number,
  y: number,
  id?: number,
}

export const useCargoStore = defineStore('cargo', () => {
  const cargos: Cargo[] = [
    {
      id: 0,
      x: 4,
      y: 2,
    },
    {
      id: 1,
      x: 2,
      y: 2,
    },
    {
      id: 2,
      x: 4,
      y: 3,
    },
  ]

  return {
    cargos
  }
})
