<script setup lang='ts'>
import cargoImg from '../../assets/box.png'
import { usePosition } from '../../composables/usePosition'

interface Props {
  x: number
  y: number
}
const props = defineProps<Props>()

const { position } = usePosition(props)
</script>

<template>
  <div class="cargo" :style="position">
    <img :src="cargoImg" alt="">
  </div>
</template>

<style lang='scss' scoped>
.cargo {
  position: absolute;
  img {
    width: 60px;
    height: 60px;
  }
}
</style>
