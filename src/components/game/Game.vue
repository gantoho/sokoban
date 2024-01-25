<script setup lang='ts'>
import Map from './Map.vue'
import Player from './Player.vue'
import { usePlayerStore } from '../../store/player'

const playerStore = usePlayerStore()
</script>

<template>
  <div class="game">
    <Map></Map>
    <Player></Player>
    {{ playerStore.player }}
  </div>
</template>

<style lang='scss' scoped>
.game {
  position: relative;
}
</style>
