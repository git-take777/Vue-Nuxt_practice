<script setup>
import { ref } from 'vue'
const name = ref('')
const textarea = ref('')
const check = ref(false)
const fruits = ref(false)
const gender = ref('')
const selected = ref([])
</script>

<template>
  <h1>V-model</h1>

  <h2>input</h2>
  <input id="name" type="text" v-model="name" />
  <label for="name">name:{{ name }}</label>

  <h2>textarea</h2>
  <textarea v-model="textarea">
   <p style="white spacde : pre">
     {{ textarea }}
   </p>
  </textarea>
  <label for="textarea"></label>
  <h2>Checkbox</h2>
  <input id="check" type="checkbox" v-model="check" />
  <label for="check">check:{{ check }}</label>
  <!-- true-valur/false-valueのディレクティブも使える。任意の値を表記できる -->
  <input type="checkbox" v-model="check2" true-value="yes" false-value="no" />

  <p>Fruits</p>
  <input type="checkbox" v-model="fruits" value="apple" />Apple
  <input type="checkbox" v-model="fruits" value="banana" />Banana
  <input type="checkbox" v-model="fruits" value="cherry" />Cherry
  <p>{{ fruits }}</p>
  <h2>Radio</h2>
  <input type="radio" id="male" v-model="gender" value="male" />
  <label for="male">male</label>
  <input type="radio" v-model="gender" value="female" />
  <label for="female">Female</label>
  <p>{{ gender }}</p>
  <h2>Select</h2>
  <select v-model="selected" multiple>
    <option value="" disabled>Select one</option>
    <option v-for="option in ['A', 'B', 'C']" :key="option">
      {{ option }}
    </option>
  </select>
  <p>select: {{ selected }}</p>
</template>
