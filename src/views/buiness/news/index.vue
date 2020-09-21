<template>
  <div>
    <p class="title" style="margin-bottom:10px;">新闻中心</p>
    <div>
      <van-row class="centent-font" v-for="item in newsData" :key="item.articleId" @click="goDetail(item)">
        <van-col :span="14" class="hiding">{{ item.title }}</van-col>
        <van-col :span="5" offset="5" class="hiding">{{ replaceStr(item.releaseTime) }}</van-col>
      </van-row>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      newsData:[]
    }
  },
  mounted() {
    this.getNews()
  },
  methods:{
    getNews() {
        this.$Api({
        pageCount: 1,
        pageSize: 100,
        categoryId: 19, //行业新闻19
        targetPage: 1
      }).then(res=>{
        this.newsData = res.data.resultList.map(item=>{
          item.releaseTime = item.releaseTime.split(' ')[0]
           return {
             ...item
           }
        })
      })
    },
     replaceStr(str) {
      return str.replace(/-/g,'/')
    },
    goDetail(item) {
      const {articleId} = item
        this.$router.push({
        path:'/detail/detail',
        query:{
          articleId:articleId
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.centent-font {
  margin-bottom: 10px;
  * {
    font-size: 12px;
  }
}
</style>
