<template>
  <div>
    <van-row class="swipe-title">
      {{title}}
    </van-row>
    <div class="swipe-box">
      <van-swipe
        class="engineering-swipe"
        :autoplay="3000"
        indicator-color="white"
        :width="180"
        :loop="false"
        :show-indicators="false"
      >
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>
<script>
export default {
    name:'Pswipe',
    props:{
        title:{
            type:String,
            default:""
        },
        mesData:{
          type:Array,
          default() {
            return []
          }
        }
    },
    mounted(){
      console.log(this.mesData)
    }
}
</script>
<style lang="scss" scoped>
.engineering-swipe {
  height: 80px;
  .van-swipe-item {
    box-sizing: border-box;
    padding: 0 10px;
    background: saddlebrown;
    &:nth-child(odd) {
      background: #58bc58;
    }
  }
}

.swipe-title {
  font-size: 14px;
  margin-bottom: 16px;
}
.swipe-box {
  box-sizing: border-box;
  height: 108px;
  padding: 10px 0;
  border: 1px solid #000;
}
</style>
