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

require('vue-msgbox/lib/vue-msgbox.css') // require node_modules 中的 css
require('vue-toast-mobile/lib/index.css')

console.log('Eleme.vue')

export default {
  route: {
    data: function (transition) {
      console.log('route 切换')
    },
    deactivate (transition) {
      console.log('Demo deactivated!')
      // debugger
      if (transition.from.path === '/eleme') {
        MessageBox.confirm('退出当前页面', {'cancelButtonText': '退出', 'confirmButtonText': '退出'}).then(function (action) {
          transition.next()
        }, function (action) {
          transition.next()
        })
      }
      // transition.next()
    }
  },
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
