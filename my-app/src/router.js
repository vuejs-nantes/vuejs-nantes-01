import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import CssScoped from './views/CssScoped.vue'
import Reactivity from './views/Reactivity.vue'
import Transition from './views/Transition.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/css-scoped',
      name: 'css-scoped',
      component: CssScoped
    },
    {
      path: '/reactivity',
      name: 'reactivity',
      component: Reactivity
    },
    {
      path: '/transition',
      name: 'transition',
      component: Transition
    }
  ]
})
