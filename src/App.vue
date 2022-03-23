<script setup>
import { ref } from 'vue'

let counter = ref(0)

setInterval(() => {
  counter.value++
}, 1000)
</script>

<template>
  <div> 
    <main>
      <router-view />
    </main>
  </div>
</template>
