<script setup>
import { ref } from 'vue'
import ShowCount from './ShowCount.vue'
const count = ref(0)
function onReset(value) {
  count.value = value
}
</script>

<template>
  <h1>PropsLesson</h1>
  <ShowCount :foo="count" bar="test" @reset="count = $event" />
  <button @click="count++">+1</button>
  <button @click="count--">-1</button>
</template>
