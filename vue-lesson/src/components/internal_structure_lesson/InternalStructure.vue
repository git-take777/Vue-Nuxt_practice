<script setup>
import { ref } from 'vue'
import CountUp from './CountUp.vue'
const isShow = ref(true)
</script>
<template>
  <h1>InternalStructure</h1>
  <button @click="isShow = !isShow">switch</button>
  <CountUp v-if="isShow" />
</template>
