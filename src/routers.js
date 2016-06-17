export default function (router) {
  router.map({
    '/': {
      component: require('./views/Index.vue')
    },
    '/about': {
      component: require('./views/About.vue')
    }
  })
  router.beforeEach(function (transition) {
    transition.next()
  })
}
