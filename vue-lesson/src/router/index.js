import { createRouter, createWebHistory } from 'vue-router'
import TheWelcome from '@/components/TheWelcome.vue'
import Conditions from '../components/conditions.vue'
import Components_lesson from '../components/components_lesson/ComponentsLesson.vue'
import PropsLesson from '@/components/props_lesson/PropsLesson.vue'
import InternalStructureLesson from '../components/internal_structure_lesson/InternalStructure.vue'
import ComponentHighLevel from '@/components/component-highlevel_lesson/ComponentHighLevel.vue'
const routes = [
  { path: '/', component: TheWelcome },
  { path: '/conditions', component: Conditions },
  { path: '/components_lesson', component: Components_lesson },
  {
    path: '/props_lesson',
    component: PropsLesson,
  },
  {
    path: '/internal_structure_lesson',
    component: InternalStructureLesson,
  },
  {
    path: '/components_highlevel_lesson',
    component: ComponentHighLevel,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
