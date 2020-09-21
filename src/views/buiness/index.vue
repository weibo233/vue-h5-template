<template>
  <div>
    <van-nav-bar
      :title="title"
      left-text=""
      right-text=""
      left-arrow
      class="app-content"
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <template #left>
        <svg-icon icon-class="left" class="svg" :size="leftSize"></svg-icon>
      </template>
      <template #right>
        <svg-icon icon-class="left" class="svg" :size="leftSize"></svg-icon>
      </template>
    </van-nav-bar>
    <van-tabs v-model="active" @click="onClick" class="app-content">
      <van-tab title="首页" />
      <van-tab title="企业荣誉" />
      <van-tab title="新闻中心" />
      <van-tab title="招标信息" />
      <van-tab title="收费标准" />
      <van-tab title="招聘信息" />
      <van-tab title="政策文件" />
    </van-tabs>
    <buiness-swiper></buiness-swiper>
    <div class="app-content">
      <p class="title">公司简介</p>
      <div id="content" v-html="info"></div>
    </div>
    <router-view class="app-content" />
  </div>
</template>
<script>
import buinessSwiper from './swiper'
import { infoApi } from '@/api/home'
export default {
  components: {
    buinessSwiper
  },
  data() {
    return {
      leftSize: {
        width: '1em',
        height: '1em'
      },
      active: '',
      title: '',
      info: '' //公司简介
    }
  },
  created() {
    let active = this.$route.query
    this.active = active.active
    let title = this.$route.meta.title
    this.title = title
  },
  mounted() {
    this.getInfo()
  },
  watch: {
    $route(to, from) {
      this.title = to.meta.title
    },
    active(val) {
      switch (val) {
        case 0:
          this.$router.push('/')
          break
        case 1:
          this.$router.push('honor')
          break
        case 2:
          this.$router.push('news')
          break
        case 3:
          this.$router.push('bidding')
          break
        case 4:
          this.$router.push('charge')
          break
        case 5:
          this.$router.push('recruit')
          break;
        case 6  :
          this.$router.push('policy')
      }
    }
  },
  methods: {
    //获取公司简介
    getInfo() {
      infoApi().then(res => {
        this.info = res.data.introduce
      })
    },
    onClickLeft() {
      this.active -= 1
      if (this.active < 0) {
        this.active = 6
      }
    },
    onClickRight() {
      this.active += 1
      if (this.active > 6) {
        this.active = 0
      }
    },
    onClick(name, title) {
      switch (name) {
        case 0:
          this.$router.push('/')
          break
        case 1:
          this.$router.push('honor')
          break
        case 2:
          this.$router.push('news')
          break
        case 3:
          this.$router.push('bidding')
          break
        case 4:
          this.$router.push('charge')
          break
        case 5:
          this.$router.push('recruit')
          break;
        case 6  :
          this.$router.push('policy')
      }
    }
  }
}
</script>
<style lang="scss" scoped>
#content {
  width: 200%;
  height: 20em;
  margin-top: -5em;
  font-size: 20px;
  transform: scale(0.5);
  -webkit-transform-origin-x: 0;
  margin-bottom: 4em;
}
</style>
