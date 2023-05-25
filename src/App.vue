<script setup lang="ts">
import NavigationBar from './components/common/NavigationBar.vue'
import SideBar from './components/workspace/SideBar.vue'
import Canvas from './components/workspace/Canvas.vue'
</script>

<template>
  <NavigationBar user-name="Joelle" />
  <SideBar />
  <Canvas />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
