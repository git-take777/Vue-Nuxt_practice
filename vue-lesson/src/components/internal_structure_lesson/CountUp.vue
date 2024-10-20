<script>
import { onUpdated } from 'vue'
import {
  ref,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onUnmounted,
} from 'vue'
const count = ref(0)
onMounted(() => {
  console.log('onMounted')
})
onUnmounted(() => {
  console.log('onUnMounted')
})
// パッチ処理・・・際レンダリングが起こったら、、、、
onUpdated(() => {
  console.log('onUpdated')
})
onBeforeUpdate(() => {
  console.log('onBeforeUpdate')
})
onBeforeUnmount(() => {
  console.log('onBeforeUnmount')
})
function countUp() {
  count.value++
}
</script>

<template>
  <h1>CountUp</h1>
  <p>count: {{ count }}</p>
  <button @click="countUp">+1</button>
</template>
