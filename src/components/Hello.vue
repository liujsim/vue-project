<template>
  <div class="hello">
    <form>
      <input  type="text" name="" id="" v-model="msg">
    </form>
     <h1 v-input="msg">{{ msg }}</h1>
    <!-- {{}} 是 v-text 语法糖 -->
    <!-- <h1 v-text="msg"></h1> -->
  </div>
</template>

<script>
// import Vue from 'vue'
console.log('Hello.vue loading')

export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!'
    }
  },
  props: ['message'],
  ready () {

  },
  methods: {

  },
  components: {

  },
  directives: {
    /**
     * 当只需要 update 函数时，可以传入一个函数代替定义对象
     * @type {Object}
     */
    input: function () {
      console.log('update')
    }
    // input: {
    //   bind: function () {

    //   },
    //   update: function () {
    //     console.log('update ')
    //   }
    // }
  },
  filters: {

  },
  watch: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
