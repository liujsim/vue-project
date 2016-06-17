import Index from 'views/Index.vue'
import About from 'views/About.vue'

export default function (router) {
  router.map({
    '/': {
      component: Index
    },
    '/about': {
      component: About
    }
  })
  router.beforeEach(function (transition) {
    transition.next()
  })
}
