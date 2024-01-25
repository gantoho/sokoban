<script setup lang="ts">
import Game from './components/game/Game.vue'
</script>

<template>
  <div class="app">
    <Game></Game>
  </div>
</template>

<style lang="scss" scoped>
.app {
  min-height: 100vh;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
