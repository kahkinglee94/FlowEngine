<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Element {
    name: string,
    posX: number,
    posY: number,
  } 

const canvas = ref<HTMLDivElement | null>(null)
const elementList = ref<Element[]>([])

onMounted(() => {
    //console.log(canvas.value)
})

function onDrop (event : any) {
    const itemName = event.dataTransfer.getData('itemName')
    const elementObj = {name: itemName, posX: event.clientX, posY: event.clientY}
    elementList.value.push(elementObj)
  }

// function onWheel (event : any) {
//     console.log(event)
//     if (event.ctrlKey) {
//         zoom(event)
//     }
// }

// function zoom (event : any) {
//     let scale = 1
//     if(canvas.value) {
//         scale += event.deltaY * -0.001;
//         // Restrict scale
//         scale = Math.min(Math.max(0.125, scale), 4);
//         // Apply scale transform
//         canvas.value.style.transform = `scale(${scale})`;
//         console.log('height: ' + canvas.value.style.height + '; width: ' + canvas.value.style.width)
//     }
// }

</script>

<template>
  <div 
    class="canvas" 
    ref="canvas"
    @drop="onDrop($event)"
    @dragenter.prevent
    @dragover.prevent>
    <div v-for="element in elementList"
    class="element"
    :style="{top: element.posY + 'px', left: element.posX + 'px'}">{{ element.name }}</div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/_base.scss";
@import "@/assets/scss/_mixin.scss";
.canvas {
    min-height: 100%;
    min-width: 100%;
    position: fixed;
    height: 100%;
    width: 100%;
    overflow: hidden;
}

.element {
  position: fixed;
  padding: 10px 20px 10px 20px;
  border: 2px solid #000;
}
</style>