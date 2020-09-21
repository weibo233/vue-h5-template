<template>
  <div>
    <van-row>
      <van-col :span="24" class="border">
          发布日期：{{this.releaseTime}}
      </van-col>
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
      author: '',
      releaseTime:''
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
        this.releaseTime = res.data.releaseTime
      })
    },
    JW(id) {
      switch (id) {
        case '6':
          return '招标公告'
          break;
        case '7':
          return '资料下载'
          break;
        case '8':
          return '资质证书'
          break;
        case '9':
          return '荣誉证书'
          break;
        case '10':
          return '工程案例'
          break;
        case '12':
          return '行政法规'
          break;
        case '13':
          return '建设法律'
          break;
        case '14':
          return '国务院文件'
          break;
        case '15':
          return '部门规章'
          break;
        case '16':
          return '地方法规'
          break;
        case '17':
          return '企业新闻'
          break;
        case '18':
          return '收费标准'
          break;
        case '19' :
          return '行业新闻'
          break;
        case '21' :
          return '人才招聘'
          break;
      }
    
      // if (id ==  "8") {
      //   return "资质证书";
      // }
      // if (id ==  "9") {
      //   return "荣誉证书";
      // }
      // if (id ==  "10") {
      //   return "工程案例";
      // }
      // if (id ==  "12") {
      //   return "行政法规";
      // }
      // if (id ==  "13") {
      //   return "建设法律";
      // }
      // if (id ==  "14") {
      //   return "国务院文件";
      // }
      // if (id ==  "15") {
      //   return "部门规章";
      // }
      // if (id ==  "16") {
      //   return "地方法规";
      // }
      // if (id ==  "17") {
      //   return "企业新闻";
      // }
      // if (id ==  "18") {
      //   return "收费标准";
      // }
      // if (id ==  "19") {
      //   return "行业新闻";
      // }
      // if (id ==  "21") {
      //   return "人才招聘";
      // }
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
  /deep/ img{
       max-width: 100% !important;
  }
}
.primary{
    color: rgb(170, 165, 165);
}
</style>
