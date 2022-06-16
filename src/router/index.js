import Vue from 'vue'
import VueRouter from 'vue-router'
import auth from './auth'
import dashboard from './dashboard.js'
import { client } from '@/api'
import _ from 'lodash'

Vue.use(VueRouter)

const routes = [
  ...auth,
  ...dashboard,
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  const session_alive = client.getCookies('auth_session')
  if (!_.isNil(to.meta)) {
    if (!_.isNil(to.meta.requireAuth) && to.meta.requireAuth == true) {
      if (!_.isNil(session_alive)) {
        next()
      } else {
        next({ name: 'login' })
      }
    } else {
      next()
    }
  } else{
    next()
  }
  
  // if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
  // else next()
})




export default router
