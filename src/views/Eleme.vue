<template>
  <div>
    <h3>ElemeFE 的示例</h3>
    <span class="btn" @click='eleAlrt'>vue-msgbox</span>
  </div>
</template>

<script>
import MessageBox from 'vue-msgbox'
// debugger
require('vue-msgbox/lib/vue-msgbox.css')

console.log('Eleme.vue')

export default {
  methods: {
    eleAlrt () {
      MessageBox('Good job!', 'You clicked the button!', 'success')
    }
  }
}

// window.alert('ok')
</script>

<style>
.button{

}

</style>
