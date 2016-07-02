<template>
  <div>
    <div v-if="$loadingRouteData" class="modal-backdrop white"><div class="loading"></div></div>
    <div v-if="!$loadingRouteData">
      <span>hello world</span>
      <button @click='toggleComment($event)' @touchstart='calcTime'>toggle comment</button>
      <comment :show="comment"></comment>
    </div>
  </div>
</template>
<script>
import Comment from '../components/Comment'

export default {
  components: {
    Comment
  },
  route: {
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
        self.defTime2()
      ]).then(function (results) {
        console.log(results)
      })
    }
  },
  data () {
    return {
      comment: false,
      clickTime: '',
      touchTime: ''
    }
  },
  methods: {
    toggleComment (event) {
      // this.clickTime = new Date().getTime()
      // console.log(event.target)
      // console.log('click', this.clickTime)
      // console.log('time diff', this.clickTime - this.touchTime)
      this.$data.comment = !(this.$data.comment)
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
    }
  }
}
</script>
<style >
button{
  border: 1px solid green;
}
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
        -ms-transform: rotate(0);
        -webkit-transform: rotate(0);
        transform: rotate(0)
    }
    to {
        -ms-transform: rotate(360deg);
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg)
    }
}
</style>
