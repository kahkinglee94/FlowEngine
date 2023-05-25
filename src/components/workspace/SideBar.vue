<script setup lang="ts">
  import { ref } from 'vue'
  import menuItemList from '@/module/mockdata/SideBarData.js'

  interface ISideBarData {
    name: string,
    label: string,
    icon: string,
    id: string,
    showChildren: boolean,
    children: ISideBarData[]
  } 

  const menuItemStateTmp = [] as ISideBarData[]
  
  for (let index = 0; index < menuItemList.length; index++) {
    const el = { ...menuItemList[index], showChildren: false };
    menuItemStateTmp.push(el)
  }

  const menuItemState = ref(menuItemStateTmp)

  function toggleShow(index : any) {
    menuItemState.value[index].showChildren = !menuItemState.value[index].showChildren
  }

  function startDrag (event : any, item : any) {
    console.log(item)
    event.dataTransfer.dropEffect = 'move'
    event.dataTransfer.setData('itemName', item.name)
  }

</script>

<template>
  <div class="sidebar">
    <div v-for="(menuItem, index) in menuItemState">
      <button class="menu" @click.prevent="toggleShow(index)">{{ menuItem.label }}</button>
      <div class="item" v-if="menuItem.children && menuItem.children.length" v-show="menuItem.showChildren">
        <ul>
          <li v-for="item in menuItem.children"
            style="padding: 10px 0px 10px 20px; border-bottom: 1px solid #D3D3D3;"
            :key="item.name"
            draggable="true"
            @dragstart="startDrag($event, item)">{{ item.label }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/_base.scss";
/* The side navigation menu */
.sidebar {
  height: 100%; /* 100% Full-height */
  width: 250px; /* 0 width - change this with JavaScript */
  position: fixed; /* Stay in place */
  z-index: 1; /* Stay on top */
  float: left;
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
