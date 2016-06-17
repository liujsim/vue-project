import Vue from 'vue'
import Router from 'vue-router'
import App from './App'
import routerMap from './routers'

// install router
Vue.use(Router)

let router = new Router({
  hashbang: true,
  history: false,
  saveScrollPosition: true,
  transitionOnLoad: true
})
routerMap(router)
router.start(App, '#app')
