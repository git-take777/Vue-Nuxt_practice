<script setup>
defineProps({
  foo: {
    type: String,
    required: true,
    default: 100,
  },
  bar: {},
})
</script>
<template>
  <p>count:{{ foo }}</p>
  <p>test:{{ bar }}</p>
  <button @click="$emit('reset', 100)">リセット</button>
</template>
