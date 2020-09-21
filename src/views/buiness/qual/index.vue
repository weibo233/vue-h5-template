<template>
  <div class="app-content">
    <p class="title" style="margin-bottom:10px;">资质证书</p>
    <van-row v-for="item in 5" :key="item">
      <van-col :span="12" class="img-box">
        <van-image width="90%" height="60" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        <p class="certificate-title">成效资质证书</p>
      </van-col>
      <van-col :span="12" class="img-box">
        <van-image width="90%" height="60" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        <p class="certificate-title">成效资质证书</p>
      </van-col>
    </van-row>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped></style>
