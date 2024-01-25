import { setActivePinia, createPinia } from 'pinia'
import { usePlayerStore } from '../../store/player'

setActivePinia(createPinia())

export const useMove = () => {
  const { movePlayerToTop, movePlayerToBottom, movePlayerToLeft, movePlayerToRight } = usePlayerStore()

  window.addEventListener("keyup", (e: KeyboardEvent) => {
    switch (e.code) {
      case "ArrowUp": {
        movePlayerToTop()
        break
      }
      case "ArrowDown": {
        movePlayerToBottom()
        break
      }
      case "ArrowLeft": {
        movePlayerToLeft()
        break
      }
      case "ArrowRight": {
        movePlayerToRight()
        break
      }
    }
  })
}
