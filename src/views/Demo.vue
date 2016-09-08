<template>
  <div>
    <div v-if="$loadingRouteData" class="modal-backdrop white"><div class="loading"></div></div>
    <div v-if="!$loadingRouteData">
      <button class="primary" @click='toggleComment()' @touchstart='calcTime'>toggle comment</button>
      <ul>
        <li v-for="item in homeData">
          <h4>{{ item.title}}</h4>
        </li>
      </ul>
      <comment :show="comment"></comment>
      <confirm :confirm="confirm"></confirm>
    </div>
  </div>
</template>
<script>
import Comment from '../components/Comment'
import Confirm from '../components/Confirm'
// import $ from 'jquery'
import fetch from 'isomorphic-fetch'
import fetchJsonp from 'fetch-jsonp'
import MessageBox from 'vue-msgbox'

export default {
  components: {
    Comment,
    Confirm
  },
  ready: function () {
    // console.log($)
  },
  route: {
    // activate勾子-检查权限 > data勾子发送 ajax 获取 data 的请求 > 渲染页面（通过$loadingRouteData实现loading）
    activate (transition) {
      console.log('Demo activated!')
      transition.next()
    },
    deactivate (transition) {
      console.log('Demo deactivated!')
      // debugger
      console.log(MessageBox)
      // if (transition.from.path === '/demo') {
      //   MessageBox.confirm('退出当前页面', {'cancelButtonText': '退出', 'confirmButtonText': '退出'}).then(function (action) {
      //     transition.next()
      //   }, function (action) {
      //     transition.next()
      //   })
      // }
      // transition.next()
    },
    data: function (transition) {
      let self = this
      // pure js
      // var xhr = new window.XMLHttpRequest()
      // xhr.addEventListener('readystatechange', function () {
      //   if (this.readyState === 4) {
      //     console.log(this.responseText)
      //   }
      // })
      // xhr.open('GET', 'https://cnodejs.org/api/v1/topics?page=1&limit=20&tab=all')
      // xhr.setRequestHeader('cache-control', 'no-cache')
      // xhr.send('')
      return Promise.all([
        self.defTime1(),
        self.defTime2(),
        self.getHomepage()
      ]).then(function (results) {
        console.log(results)
      })
    }
  },
  data () {
    return {
      comment: false,
      homeData: '',
      clickTime: '',
      touchTime: '',
      confirm: {
        show: false,
        text: '',
        cancelButtonText: '',
        confirmButtonText: '',
        confirm () {},
        cancel () {}
      }
    }
  },
  methods: {
    createConfirm (text, confirm, cancel, cancelButtonText = '不保留', confirmButtonText = '保留') {
      this.confirm.show = true
      this.confirm.text = text
      this.confirm.cancelButtonText = cancelButtonText
      this.confirm.confirmButtonText = confirmButtonText
      this.confirm.confirm = confirm
      this.confirm.cancel = cancel
    },
    closeConfirm () {
      this.confirm.show = false
      this.confirm.text = ''
      this.confirm.cancelButtonText = ''
      this.confirm.confirmButtonText = ''
      this.confirm.confirm = () => {}
      this.confirm.cancel = () => {}
    },
    toggleComment (event) {
      // this.clickTime = new Date().getTime()
      // console.log(event.target)
      // console.log('click', this.clickTime)
      // console.log('time diff', this.clickTime - this.touchTime)
      this.$data.comment = !(this.$data.comment)
      // console.log(this.confirm)
      // this.confirm.show = true
      this.createConfirm('确定要删除吗？', () => {
        console.log('confirm')
      }, () => {
        console.log('cancel')
      })
      // this.evalute()
    },
    evalute () {
      fetchJsonp('http://www.flickr.com/services/feeds/photos_public.gne?format=json', {
        jsonpCallback: 'jsoncallback',
        timeout: 3000
      }).then(function (response) {
        return response.json()
      }).then(function (json) {
        document.body.innerHTML = JSON.stringify(json)
      })['catch'](function (ex) {
        document.body.innerHTML = 'failed:' + ex
      })
    },
    acceptVideo () {
      fetchJsonp('http://172.16.41.36:8081/wsp/videocm?seatId=1001&custId=123456&opCode=221&serialId=359', {
        jsonpCallback: 'jsoncallback', // 指定服务端的 jsonp 参数
        timeout: 3000
      }).then(function (response) {
        return response.json()
      }).then(function (json) {
        document.body.innerHTML = JSON.stringify(json)
      })['catch'](function (ex) {
        document.body.innerHTML = 'failed:' + ex
      })
    },
    calcTime () {
      // this.touchTime = new Date().getTime()
      // console.log('touch', this.touchTime)
    },
    defTime1 () {
      let p = new Promise(function (resolve, reject) {
        setTimeout(function () {
          console.log('defTime1')
          resolve('随便什么数据1')
        }, 1000)
      })
      return p
    },
    defTime2 () {
      let p = new Promise(function (resolve, reject) {
        setTimeout(function () {
          console.log('defTime2')
          resolve('随便什么数据2')
        }, 3000)
      })
      return p
    },
    getHomepage () {
      let self = this
      fetch('https://cnodejs.org/api/v1/topics?page=1&limit=20&tab=all').then(function (response) {
        return response.json() // 返回 promise 对象
      }).then(function (data) {
        console.log(data)
        self.homeData = data.data
      })
    }
  }
}
</script>
<style src="../assets/styles/variable.scss"></style>
<style >
.modal-backdrop {
    background: transparent;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 500;
    overflow-y: auto;
}
.modal-backdrop.white {
    /* background: #f5f5f5; */
}
  .loading {
        display: inline-block;
        position: absolute;
        left: 50%;
        top:50%;
        transform: translate(-50%, -50%);
        height: 30px;
        width: 30px;
        border-radius: 50%;
        border: 5px solid rgb(93, 197, 150);
        border-top-color: transparent;
        animation: 1s rotate linear infinite ; /* linear 匀速 */
        /* margin: 0 auto; */
    }
    .gb-spinner {
        display: inline-block;
        border-radius: 100%;
        border: 5px solid #f5f5f5;
        border-bottom-color: #428bca;
        animation: rotate 1.5s 0s linear infinite;
        width: 30px;
        height: 30px;
        border-width: 3px;
    }
    @keyframes rotate {
    from {
        transform: rotate(0);
    }
    to {
        transform: rotate(360deg);
    }
}
</style>
