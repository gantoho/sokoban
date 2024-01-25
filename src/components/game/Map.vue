<script setup lang='ts'>
import { toRefs } from 'vue'
import wallImg from '../../assets/wall.png'
import floorImg from '../../assets/floor.png'
import { useMapStore, MapTile } from '../../store/map'

const mapStore = useMapStore()
const { map } = toRefs(mapStore)
</script>

<template>
  <div class="map">
    <div v-for="(row, i) in map" :key="i" class="flex">
      <div v-for="(col, j) in row" :key="j">
        <template v-if="col === MapTile.WALL">
          <img :src="wallImg" alt="">
        </template>
        <template v-else-if="col === MapTile.FLOOR">
          <img :src="floorImg" alt="">
        </template>
      </div>
    </div>
  </div>
</template>

<style lang='scss' scoped>
.map {
  img {
    width: 60px;
    height: 60px;
  }
}
</style>
