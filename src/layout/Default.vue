<template>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component v-if="route.meta.keepAlive" :is="Component" :key="route.fullPath" />
    </keep-alive>
    <component v-if="!route.meta.keepAlive" :is="Component" :key="route.fullPath" />
  </router-view>
</template>

<script setup>
const route = useRoute()
</script>
