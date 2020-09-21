<template>
  <div>
    <buiness-swiper></buiness-swiper>
    <div class="app-content">
      <van-row class="content-title">深圳市成效项目管理有限公司</van-row>
      <div v-for="item in company" :key="item.companyId" class="company-item">
        <van-row>
          公司名称：
          <span>{{ item.name }}</span>
        </van-row>
        <van-row>
          公司地址：
          <span>{{ item.address }}</span>
        </van-row>
        <van-row>
          公司邮箱：
          <span>{{ item.email }}</span>
        </van-row>
        <van-row>
          公司传真:
          <span>{{ item.fax }}</span>
        </van-row>
        <van-row v-if="item.phone">
          电话号码
          <span>{{ item.phone }}</span>
        </van-row>
        <van-row>
          手机号码：
          <span>{{ item.telephone }}</span>
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
      company: []
    }
  },
  mounted() {
    this.getCompanyData()
  },
  methods: {
    getCompanyData() {
      this.$http({
        method: 'post',
        url: '/framework/all/company/list',
        data: {}
      }).then(res => {
        this.company = res.data
      })
    }
  }
}
</script>
<style lang="scss" scoped>
* {
  color: $design-title-color;
  line-height: 24px;
}
.content-title {
  font-size: 14px;
  line-height: 34px;
  font-weight: 700;
}
.company-item {
  padding-bottom: 20px;
  border-bottom: 1px solid #ccc;
  margin-bottom: 10px;
}
</style>
