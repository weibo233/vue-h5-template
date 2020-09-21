<template>
  <div>
    <div class="project">
      <p class="title">工程案例</p>
      <div ref="honorRef">
        <van-row v-for="item in tableData" :key="item.articleId" class="project-item">
          <van-col :span="8">
            <van-image width="95" height="60" :src="item.cover" class="img" />
          </van-col>
          <van-col :span="16"  @click.native="goDetail(item)">
            <p class="project-title">
              <span>{{ item.title }}</span>
            </p>
            <p class="project-info">
              <span>{{ item.builtUp }}</span>
            </p>
            <p class="project-info">
              <span>{{ item.covered }}</span>
            </p>
          </van-col>
        </van-row>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: []
    }
  },
  mounted() {
    this.getProject()
  },
  methods: {
    getProject() {
      this.$Api({
        pageCount: 1,
        pageSize: 100,
        categoryId: 10, //工程案例10
        targetPage: 1
      }).then(res => {
        this.tableData = res.data.resultList.map(item => {
          let builtUp = item.introduce.split('\n')[0]
          let covered = item.introduce.split('\n')[1]
          return {
            ...item,
            builtUp,
            covered
          }
        })
        setTimeout(() => {
          const imgs = this.$refs.honorRef.getElementsByTagName('img')
          for (let i = 0; i < imgs.length; i++) {
            const img = imgs[i]
            img.setAttribute('preview', i)
            img.setAttribute('preview-text', img.getAttribute('alt'))
            this.$previewRefresh()
          }
        }, 500)
      })
    },
    goDetail(item) {
      const {articleId} = item
      this.$router.push({
        path:'/detail/honor-detail',
        query:{
          articleId:articleId
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.project {
  .project-item {
    max-height: 100%;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-around;
    .project-title {
      margin: 0;
      span {
        display: inline-block;
        box-sizing: border-box;
        padding-bottom: 5px;
        border-bottom: 1px solid #000;
        max-width: 100%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }
}

.project-info {
  span {
    font-size: 10px;
    color: rgb(94, 89, 89);
  }
}
</style>
