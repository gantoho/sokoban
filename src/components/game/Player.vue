<script setup lang='ts'>
import { computed, onMounted, onUnmounted } from 'vue'
import playerImg from '../../assets/player.png'
import { useMapStore } from '../../store/map'
import { usePlayerStore } from '../../store/player'

const usePosition = () => {
  const { player } = usePlayerStore()
  const STEP = 60
  const position = computed(() => {
    return {
      top: STEP * player.y + "px",
      left: STEP * player.x + "px"
    }
  })
  return {
    position
  }
}
const { position } = usePosition()

const useMove = () => {
  const { movePlayerToTop, movePlayerToBottom, movePlayerToLeft, movePlayerToRight } = usePlayerStore()

  const deduce = (row: number = 0, col: number = 0) => {
    const { player } = usePlayerStore()
    const { map } = useMapStore()
    let x = player.x + row
    let y = player.y + col
    if (map[y][x] === 1) {
      return false
    }
    return true
  }

  const handleKeyup = (e: KeyboardEvent) => {
    switch (e.code) {
      case "ArrowUp": {
        if (deduce(0, -1)) {
          movePlayerToTop()
        }
        break
      }
      case "ArrowDown": {
        if (deduce(0, 1)) {
          movePlayerToBottom()
        }
        break
      }
      case "ArrowLeft": {
        if (deduce(-1)) {
          movePlayerToLeft()
        }
        break
      }
      case "ArrowRight": {
        if (deduce(1)) {
          movePlayerToRight()
        }
        break
      }
    }
  }

  onMounted(() => {
    window.addEventListener("keyup", handleKeyup)
  })

  onUnmounted(() => {
    window.removeEventListener("keyup", handleKeyup)
  })
}
useMove()
</script>

<template>
  <div class="player" :style="position">
    <img :src="playerImg" alt="">
  </div>
</template>

<style lang='scss' scoped>
.player {
  position: absolute;
  img {
    width: 60px;
    height: 60px;
  }
}
</style>


<!-- <script setup lang='ts'>
import playerImg from '../../assets/player.png'
import { useMove, usePosition } from './player'

useMove()
const {position} = usePosition()
</script>

<template>
  <div class="player" :style="position">
    <img :src="playerImg" alt="">
  </div>
</template>

<style lang='scss' scoped>
.player {
  position: absolute;
  img {
    width: 60px;
    height: 60px;
  }
}
</style> -->
