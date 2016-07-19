<template>
  <p><button type="button" @click="connect()">连接服务器</button></p>
  <p><button type="button" @click="login()">登录服务器</button></p>
  <p><button type="button" @click="enter()">进入房间</button></p>
  <p><button type="button" @click="leave()">退出房间</button></p>
</template>
<script>
import {cordova} from '../assets/js/cordova.js'
// window.alert(exec)
export default {
  methods: {
    connect () {
      let self = this
      let params = {}
      params['action'] = 'connectOnAnyChat'
      params['address'] = '218.17.227.197'
      params['port'] = '9381'
      cordova.exec(self.connectFinish, null, 'SWVideo', 'connectOnAnyChat', [params])
    },
    login () {
      window.alert('login')
    },
    enter () {
      window.alert('enter')
    },
    leave () {
      window.alert('leave')
    },
    connectFinish (result) {
      window.alert(result['errorMessage'] + '\r\n' + result['errorCode'])
    }
  }
}
</script>
<style >

</style>
