import Index from 'views/Index.vue'
// import Async from 'views/Async.vue'
import About from 'views/About.vue'
import Vux from 'views/Vux.vue'
import Demo from 'views/Demo.vue'
import Eleme from 'views/Eleme.vue'

export default function (router) {
  router.map({
    '/': {
      name: 'index', // 首页
      component: Index
    },
    '/index': {
      name: 'index', // 首页
      component: Index
    },
    '/async': {
      name: 'async',
      component: (resolve) => require(['./views/async'], resolve)
      // component: require('./views/async') // 同步加载
    },
    '/vux': {
      name: 'vux', // vux
      component: Vux
    },
    '/about': {
      name: 'about',
      component: About
    },
    '/demo': {
      name: 'demo',
      component: Demo
    },
    '/eleme': {
      name: 'eleme',
      component: Eleme
    },
    '*': {
      name: '404error',
      component: require('./views/404.vue')
    }
  })
  // 默认List主页
  router.redirect({
    '/': '/index'
  })
  // router.beforeEach(function (transition) {
  //   transition.next()
  // })
}
