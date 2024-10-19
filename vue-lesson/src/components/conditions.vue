<script setup>
import { ref } from 'vue'
const ok = ref(false)
const fruits = ref(['App', 'Banana', 'Cherry'])
const foods = ref(['gumi', 'ramen', 'gumi'])
function handleArray() {
  foods.value.shift()
}
</script>

<template>
  <button @click="ok = !ok">toggle</button>
  <p v-if="ok">OK</p>
  <p v-else="maybe">maybe OK</p>
  <p v-show="!ok">v-Show 表示</p>

  <button @click="handleArray">ボタン</button>
  <p v-for="fruit in fruits" :key="fruit">{{ fruit }}</p>
  <li v-for="(food, index) in foods" :key="food">
    <input type="text" />{{ food }}({{ index }})
  </li>
</template>
