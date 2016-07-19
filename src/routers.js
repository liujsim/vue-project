import Index from 'views/Index.vue'
// import Async from 'views/Async.vue'
import About from 'views/About.vue'
import Vux from 'views/Vux.vue'
import Vuex from 'views/Vuex.vue'
import Demo from 'views/Demo.vue'
import Eleme from 'views/Eleme.vue'
import Foo from 'views/Foo.vue'
import FooDefault from 'views/FooDefault.vue'
import Bar from 'views/Bar.vue'
import Baz from 'views/Baz.vue'

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
    '/foo': {
      name: 'foo', // vux
      component: Foo,
      subRoutes: {
        '/': {
          component: FooDefault
        },
        '/bar': {
          component: Bar
        },
        '/baz': {
          component: Baz
        }
      }
    },
    '/vuex': {
      name: 'vuex', // vux
      component: Vuex
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
    '/hybird': {
      name: 'hybird',
      // component: require(Hybird)
      component: (resolve) => require(['./views/Hybird'], resolve)
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
