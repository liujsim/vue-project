<template>
  <div>
    <h3>ElemeFE vue-msgbox 的示例</h3>
    <span class="btn" @click='eleAlrt'>vue-msgbox</span>
    <h3>ElemeFE vue-toast-mobile 的示例</h3>
    <span class="btn" @click='eleToast'>vue-toast-mobile</span>
  </div>
</template>

<script>
import MessageBox from 'vue-msgbox'
import Toast from 'vue-toast-mobile'

require('vue-msgbox/lib/vue-msgbox.css')
require('vue-toast-mobile/lib/index.css')

console.log('Eleme.vue')

export default {
  methods: {
    eleAlrt () {
      MessageBox('Good job!', 'You clicked the button!', 'success')
    },
    eleToast () {
      // Toast('Upload Completed')
      Toast({
        message: 'Upload Completed',
        position: 'middle',
        duration: 1000
      })
    }
  }
}

// window.alert('ok')
</script>

<style>

</style>
