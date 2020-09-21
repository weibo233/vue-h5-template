<template>
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item>
      <img src="@/assets/banner1.jpg" alt="">
    </van-swipe-item>
  </van-swipe>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.my-swipe {
  height: 140px;
  margin-bottom: 16px;
  .van-swipe-item {
    img{
      width: 100%;
      height: 140px;
    }
  }
}
</style>