<template>
  <div>
    <span>hello world</span>
    <button @click='toggleComment'>toggle comment</button>
    <comment :show="comment"></comment>
  </div>

</template>
<script>
import Comment from '../components/Comment'

export default {
  components: {
    Comment
  },
  data () {
    return {
      comment: false
    }
  },
  methods: {
    toggleComment () {
      this.$data.comment = !(this.$data.comment)
    }
  }
}
</script>
<style >
button{
  border: 1px solid green;
}
</style>
