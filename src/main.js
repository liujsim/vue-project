import Vue from 'vue'
import Router from 'vue-router'
import App from './App'
import routerMap from './routers'

// install router
Vue.use(Router)

let router = new Router({
  hashbang: true,
  history: false
  // transitionOnLoad: true
})
routerMap(router)
router.start(App, '#app')

router.beforeEach(function (transition) {
  if (transition.to.path === '/forbidden') {
    transition.abort()
  } else {
    transition.next()
  }
  // if (transition.from.path === '/foo') {
  //   transition.abort()
  // } else {
  //   transition.next()
  // }
})
