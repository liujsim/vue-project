<template>
<div>
  <div v-if="confirm.show">
    <div class="ui_confirm">
        <div class="ui_dialog_bd">
          <div class="ui_dialog_content">
            <p style="text-align:center;">{{confirm.text}}</p>
          </div>
        </div>
        <div class="ui_dialog_ft ">
          <button class="ui_dialog_btn dialog_cancel" @click="cancelEvent">{{confirm.cancelButtonText}}</button>
          <button class="ui_dialog_btn" @click="confirmEvent">{{confirm.confirmButtonText}}</button>
        </div>
    </div>
    <div class="ui_mask"></div>
  </div>
</div>
</template>
<script>
  export default {
    // replace: true,
    props: {
      confirm: {
        type: Object,
        default () {
          return {
            show: false,
            text: '',
            cancelButtonText: 'No',
            confirmButtonText: 'Yes',
            confirm () {},
            cancel () {}
          }
        }
      }
    },
    data () {
      return {
        show: false,
        text: ''
      }
    },
    ready () {
      // document.addEventListener('click', this.maskClose)
    },
    destroy () {
      // document.removeEventListener('click', this.maskClose)
    },
    methods: {
      maskClose () {
        // 关闭弹出窗和遮罩层
        this.confirm.show = false
        // this.$parent.mask = false
      },
      cancelEvent () {
        this.confirm.show = false
        if (this.confirm.cancel) this.confirm.cancel()
      },
      // 关闭弹出窗
      confirmEvent () {
        this.confirm.show = false
        // this.$parent.mask = false
        if (this.confirm.confirm) this.confirm.confirm()
      }
    }
  }

</script>

<style>
    /* reset button */
    button {
     cursor: pointer;
     /* border: 1px solid #2c97e8; */
     padding: 5px 10px;
     border-radius: 5px;
     background-color: transparent;
     background-repeat:no-repeat;
     border: none;
     overflow: hidden;
     outline:none;
    }
    .ui_mask,
    .ui_mask_transition,
    .ui_mask_transparent {
        position: fixed;
        z-index: 1;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
    }

    .ui_mask {
        background: rgba(0, 0, 0, .6);
    }

    .ui_confirm {
        position: fixed;
        width: 80%;
        height: 130px;
        background: white;
        z-index: 10;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
    .ui_dialog_bd{
      height: 70%;
      border-bottom: 1px solid #d5d5d6;
    }
    .ui_dialog_content{
      position: relative;
      top: 50%;
      transform: translateY(-50%);
    }
    .ui_dialog_ft{
      display: flex;
      height: 30%;
      background: white;
    }
    .ui_dialog_btn{
      flex: 1;

      /* border-right: 1px solid #ddd; */
/*       align-items: center;
      justify-content: center; */
    }
    .dialog_cancel {
      border-right: 1px solid #ddd;
    }
</style>
