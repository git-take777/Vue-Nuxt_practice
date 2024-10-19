import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

import Conditions from '../src/components/conditions.vue'
export default {
  name: 'App',
  components: {
    Conditions,
  },
}
