<script setup lang="ts">
defineProps<{ userName: string }>()
</script>

<template>
  <div class="topnav">
    <a class="active" href="#home">Home</a>
    <a href="#news">News</a>
    <a href="#contact">Contact</a>
    <a href="#about">About</a>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/_mixin.scss";
/* Add a black background color to the top navigation */
.topnav {
  background-color: $primary;
  overflow: hidden;
  top: 0px;
  left: 0px;
  min-height: 30px;
}

/* Style the links inside the navigation bar */
.topnav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

/* Change the color of links on hover */
.topnav a:hover {
  background-color: #ddd;
  color: black;
}

/* Add a color to the active/current link */
.topnav a.active {
  background-color: #04AA6D;
  color: white;
}
</style>
