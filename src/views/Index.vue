<template>
  <div>
    <a href="#" v-link="{path:'demo'}">demo</a> <br>
    <a href="#" v-link="{path:'eleme'}">eleme</a> <br>
    <a href="#" v-link="{path:'404error'}">404</a> <br>
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
