<script setup lang='ts'>
import Map from './Map.vue'
import Player from './Player.vue'
import Cargo from './Cargo.vue'
import { useCargoStore } from '../../store/cargo';

const { cargos } = useCargoStore()
</script>

<template>
  <div class="game">
    <Map></Map>
    <Player></Player>
    <template v-for="cargo in cargos" :key="cargo.id">
      <Cargo :x="cargo.x" :y="cargo.y"></Cargo>
    </template>
  </div>
</template>

<style lang='scss' scoped>
.game {
  position: relative;
}
</style>
