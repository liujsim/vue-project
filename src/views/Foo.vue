<template>
  <router-view></router-view>
</template>
<script>
export default {
  route: {
    deactivate: (trasition) => {
      console.log('ok')
      trasition.next()
      // window.alert('ok')
    }
  }
}
</script>
<style >

</style>
