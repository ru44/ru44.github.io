<template>
  <transition-group name="fall" tag="div">
    <div
      v-for="sakura in sakuras"
      :key="sakura.id"
      class="sakura"
      :style="{ left: `${sakura.left}px`, animationDuration: `${sakura.duration}s` }"
    ></div>
  </transition-group>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

let sakuras = ref([])
let intervalId

onMounted(() => {
  intervalId = setInterval(() => {
    sakuras.value.push({
      id: Date.now(),
      left: Math.random() * window.innerWidth,
      duration: Math.random() * 5 + 5
    })

    if (sakuras.value.length > 50) {
      sakuras.value.shift()
    }
  }, 300)
})

onUnmounted(() => {
  clearInterval(intervalId)
})
</script>

<style>
.sakura {
  position: absolute;
  top: 0;
  width: 10px;
  height: 10px;
  background: pink;
  border-radius: 50%;
  animation-name: fall;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

@keyframes fall {
  to {
    transform: translateY(100vh);
  }
}
</style>
