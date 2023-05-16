<script setup lang="ts">
</script>

<template>
  <div class="sidebar">
    <button class="menu">簽核元件</button>
    <div class="item">
      <ul>
        <li>串簽</li>
        <li>會簽</li>
        <li>多人擇一簽</li>
      </ul>
    </div>
    <button class="menu">PLM開案管理</button>
    <div class="item">
      <ul>
        <li>一般開案單</li>
        <li>業務開案單</li>
        <li>RD治具</li>
      </ul>
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
  display: none;
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
