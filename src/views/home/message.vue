<template>
  <div>
    <buiness-swiper></buiness-swiper>
    <div class="app-content">
      <p class="title" style="margin-bottom:10px;">资质证书</p>
      <div ref="qual">
      <van-row>
        <van-col :span="12" class="img-box" v-for="item in qualData" :key="item.articleId">
          <van-image width="90%" height="90" :src="item.cover" class="img"/>
          <p class="certificate-title">{{ item.title }}</p>
        </van-col>
      </van-row>
      </div>
    </div>
  </div>
</template>
<script>
import buinessSwiper from '@/views/buiness/swiper'
export default {
  components: {
    buinessSwiper
  },
  data() {
    return {
      qualData: []
    }
  },
  mounted() {
    this.getQual()
  },
  methods: {
    getQual() {
      this.$Api({
        pageCount: 1,
        pageSize: 100,
        categoryId: 8, //资质证书
        targetPage: 1
      }).then(res => {
        this.qualData = res.data.resultList
      setTimeout(() => {
          const imgs = this.$refs.qual.getElementsByTagName('img')
          for (let i = 0; i < imgs.length; i++) {
            const img = imgs[i]
            img.setAttribute('preview', i)
            img.setAttribute('preview-text', img.getAttribute('alt'))
            this.$previewRefresh()
          }
        },500)
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.certificate-title {
  display: inline-block;
  width: 100%;
  text-align: center;
}
.img-box {
  margin-bottom: 50px;
}
</style>
