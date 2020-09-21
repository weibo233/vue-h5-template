<template>
  <div id="logo">
      <img src="@/assets/logo.png" alt="">
  </div>
</template>
<script>
export default {
  data() {
    return{
      size:{
        width:"180px",
        height:"24px"
      }
    }
  }
}
</script>
<style lang="scss" scoped>
#logo {
  height: 25px;
  width: 180px;
  margin-top: 20px;
  margin-bottom: 10px;
  img{
    width: 100%;
    height: 100%;
  }
}
</style>
