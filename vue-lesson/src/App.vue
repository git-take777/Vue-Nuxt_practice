<script>
import { ref } from 'vue'

export default {
  setup() {
    const title = 'Vue.js Course'
    const price1 = ref(9.99)
    const count = ref(1)
    const count2 = ref(2)
    const message = ref('hello')
    const baseURL = ref('https://vuejs.org')
    const id = ref('vue-link')
    const VueId = ref('vue-id')
    function increment() {
      price1.value = price1.value - 1
    }

    // ここで変数を返す
    return {
      title,
      price1,
      count,
      count2,
      message,
      increment,
      id,
      baseURL,
      VueId,
    }
  },
}
</script>

<template>
  <div>
    <p>title: {{ title }}</p>
    <p>price: ${{ price1 - 1 }}</p>
    <div>{{ count + count2 }}</div>
    <div v-html="message"></div>
    <!-- v-bindは省略可能→属性値と設定値が同じ文字なら省略可能 -->
    <a :id="id" v-bind:href="baseURL">Vue.js</a>
    <a v-bind="{ id: VueId, href: baseURL }">Vue.js</a>
    <!-- 参考サイト(v-onの種類)https://vuejs.org/api/built-in-directives.html#v-on -->
    <button @click="count = $event.clientX">incrementBtn</button>
    <button @click="increment">incrementBtn</button>
  </div>
</template>
