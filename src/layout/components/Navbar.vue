<template>
  <header :class="{ 'show': direction === 'up' }">
    navbar
  </header>
</template>

<script setup>
import { useWindowScroll } from '@vueuse/core'
import { onMounted } from 'vue'

const lastScrollTop = ref(0)
const { y } = useWindowScroll()

const direction = ref(null)

onMounted(() => {
  direction.value = 'up'
})

watch(y, () => {
  const delta = y.value - lastScrollTop.value
  lastScrollTop.value = y.value
  direction.value = delta > 0 ? 'down' : 'up'
})

</script>

<style lang="less" scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80px;
  background: rgba(255, 255, 255, .3);
  transform: translateY(-80px);
  transition: all ease .3s;

  &.show {
    transform: translateY(0px);
  }
}
</style>
