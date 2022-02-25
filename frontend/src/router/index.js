import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Questions from '../views/Questions.vue'
import Result from '../views/Result.vue'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/questions',
    name: 'questions',
    component: Questions
  },
  {
    path: '/result',
    name: 'result',
    component: Result
  }
]

const router = new VueRouter({
  routes
})

export default router