<template>
  <div>
    <van-row>
      <van-col :span="12" class="border">保利达·江南湾花园</van-col>
    </van-row>
    <div id="content" v-html="content"></div>
    <van-row>
      <van-col :span="12">
        专栏：
        <span class="primary"> {{ JW(this.categoryId) }}</span>
      </van-col>
      <van-col :span="12">
        作者:
        <span class="primary"> {{ this.author }}</span>
      </van-col>
    </van-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      articleId: '',
      content: '',
      categoryId: '',
      author: ''
    }
  },
  created() {
    this.articleId = this.$route.query.articleId
  },

  watch: {
    articleId(val) {
      if (val) {
        this.getDetail(this.articleId)
      }
    }
  },
  methods: {
    getDetail(articleId) {
      this.$http({
        method: 'post',
        url: '/framework/all/article/detail',
        data: {
          articleId: articleId
        }
      }).then(res => {
        this.content = res.data.content
        this.categoryId = res.data.categoryId
        this.author = res.data.author
      })
    },
    JW(id) {
      switch (id) {
        case '10':
          return '工程案例'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.border {
  padding-bottom: 6px;
  border-bottom: 1px solid #000;
}
#content {
  margin-top: 20px;
  margin-bottom: 20px;
  /deep/ img {
    max-width: 100% !important;
  }
}
.primary {
  color: rgb(170, 165, 165);
}
</style>
