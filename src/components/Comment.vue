<template>
  <div class="comment" v-show="show">
  </div>
</template>
<script>
  export default {
    props: ['show']
  }
</script>
<style >

.comment {
  position: fixed;
  bottom: 0;
  z-index: 10000;
  background: RGBA(244, 244, 246, 1.00);
  padding: 0 0.46875rem;   /* 30px */
  height: 5.9375rem;
  width: 100%;
  transform: translate3d(0, 0, 0);
  animation: animatebottomquick 0.5s ease;
   /* animation: animatebottomquick 0.3s; */
 }
.m-t-30{
  margin-top: 0.46875rem;
}
span.submit{
  font-size: 20px;
}
@keyframes animatebottomquick {
    from {transform: translateY(100%); opacity:0};
    to {transform: translateY(0); opacity:1};
}

</style>
