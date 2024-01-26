<script setup lang='ts'>
import { onMounted, onUnmounted } from 'vue'
import playerImg from '../../assets/player.png'
import { usePlayerStore } from '../../store/player'
import { usePosition } from '../../composables/usePosition'

const { player } = usePlayerStore()
const { position } = usePosition(player)

const useMove = () => {
  const { movePlayerToTop, movePlayerToBottom, movePlayerToLeft, movePlayerToRight } = usePlayerStore()
  
  const handleKeyup = (e: KeyboardEvent) => {
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
  z-index: 99;
  img {
    width: 60px;
    height: 60px;
  }
}
</style>
