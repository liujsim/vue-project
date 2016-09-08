<template>
  <div>
    <a href="#" v-link="{path:'demo'}">demo</a> <br>
    <a href="#" v-link="{path:'vuex'}">vuex</a> <br>
    <a href="#" v-link="{path:'eleme'}">eleme</a> <br>
    <h3>嵌套路由</h3>
    <a href="#" v-link="{path:'foo'}">foo</a> <br>
    <a href="#" v-link="{path:'/foo/bar'}">foo/bar</a> <br>
    <a href="#" v-link="{path:'/foo/baz'}">foo/baz</a> <br>
    <h3>404</h3>
    <a href="#" v-link="{path:'404error'}">404</a> <br>
    <h3>hybird (必须在 codorva 环境打开)</h3>
    <a href="#" v-link="{path:'/hybird'}">hybird</a> <br>
    <Hello></Hello>
  </div>
</template>
<script>
import Hello from 'components/Hello'

console.log('Index.vue')

export default {
  components: {
    Hello
  }
}
</script>
