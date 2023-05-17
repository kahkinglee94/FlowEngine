<script setup lang="ts">
  import { ref } from 'vue'
  import menuItemList from '@/module/mockdata/SideBarData.js'

  const showItem = ref(false);

  function toggleItem(test : any) {
    console.log(test)
    showItem.value = !showItem.value
  }
</script>

<template>
  <div class="sidebar">
    <div v-for="menuItem in menuItemList">
      <button class="menu" @click.prevent="toggleItem(this)">{{ menuItem.label }}</button>
      <div class="item" v-show="showItem">
        <ul>
          <li v-for="item in menuItem.children">{{ item.label }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* The side navigation menu */
.sidebar {
  height: 100%; /* 100% Full-height */
  width: 250px; /* 0 width - change this with JavaScript */
  position: fixed; /* Stay in place */
  z-index: 1; /* Stay on top */
  left: 0;
  background-color: #F2FAFF; /* Black*/
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 10px; /* Place content 10px from the top */
}

/* Style the buttons that are used to open and close the accordion panel */
.menu {
  background-color: #eee;
  color: #444;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  text-align: left;
  border: none;
  outline: none;
  transition: 0.4s;
}

/* Add a background color to the button if it is clicked on (add the .active class with JS), and when you move the mouse over it (hover) */
.active, .menu:hover {
  background-color: #ccc;
}

/* Style the accordion panel. Note: hidden by default */
.item {
  padding: 0 18px;
  background-color: white;
  overflow: hidden;
}

/* When you mouse over the navigation links, change their color */
.sidebar a:hover {
  color: #f1f1f1;
}

/* On smaller screens, where height is less than 450px, change the style of the sidebar (less padding and a smaller font size) */
@media screen and (max-height: 450px) {
  .sidebar {padding-top: 15px;}
  .sidebar a {font-size: 18px;}
}
</style>
