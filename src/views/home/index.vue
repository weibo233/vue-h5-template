<!-- home -->
<template>
  <div class="index-container">
    <van-row class="home-box app-content">
      <van-col :span="6">
        <span>
          <span class="home">首页</span>
          <span class="home-home">Home</span>
        </span>
      </van-col>
      <van-col :span="3" :offset="15" style="height:20px;margin-top:-12px;">
        <p @click="show = true">
          <svg-icon icon-class="more" :size="size" style="float:right;"></svg-icon>
        </p>
      </van-col>
    </van-row>
    <van-swipe class="my-swipe app-content" :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <img src="@/assets/home1.jpg" alt="" />
      </van-swipe-item>
      <van-swipe-item>
        <img src="@/assets/home2.jpg" alt="" />
      </van-swipe-item>
      <van-swipe-item>
        <img src="@/assets/home3.jpg" alt="" />
      </van-swipe-item>
    </van-swipe>
    <van-row class="navigter app-content">
      <van-col :span="4" class="naviger-item" @click.native="goHonor">
        <svg-icon icon-class="resources" class="svg"></svg-icon>
        <span>企业资源 </span>
      </van-col>
      <van-col :span="4" class="naviger-item" @click.native="goCenter">
        <svg-icon icon-class="new-center" class="svg"></svg-icon>
        <span>新闻中心</span>
      </van-col>
      <van-col :span="4" class="naviger-item" @click.native="goBidding">
        <svg-icon icon-class="bidding" class="svg"></svg-icon>
        <span>招标信息</span>
      </van-col>
      <van-col :span="4" class="naviger-item" @click.native="goCharge">
        <svg-icon icon-class="charge" class="svg"></svg-icon>
        <span>收费标准</span>
      </van-col>
      <van-col :span="4" class="naviger-item" @click.native="goRecruit">
        <svg-icon icon-class="recruit" class="svg"></svg-icon>
        <span>招聘信息</span>
      </van-col>
      <van-col :span="4" class="naviger-item" @click.native="goMap">
        <svg-icon icon-class="enterprise" class="svg"></svg-icon>
        <span>企业信息</span>
      </van-col>
    </van-row>
    <!-- 工程案例 -->
    <div class="app-content" style="margin-bottom:16px;">
      <van-row class="swipe-title">工程案例</van-row>
      <div class="swipe-box" ref="engineeringRef">
        <van-swipe
          class="cx-swipe"
          :autoplay="3000"
          indicator-color="white"
          :width="180"
          :loop="false"
          :show-indicators="false"
        >
          <van-swipe-item v-for="item in engineering" :key="item.articleId">
            <img :src="item.cover" alt="" class="img" />
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>
    <!-- 荣誉证书 -->
    <div class="app-content">
      <van-row class="swipe-title">荣誉证书</van-row>
      <div class="swipe-box" ref="honorRef">
        <van-swipe
          class="cx-swipe"
          :autoplay="3000"
          indicator-color="white"
          :width="180"
          :loop="false"
          :show-indicators="false"
        >
          <van-swipe-item v-for="item in honorData" :key="item.articleId">
            <img :src="item.cover" alt="" class="img"/>
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>
    <van-popup v-model="show" position="right" :style="{ width: '50%' }">
      <div class="popup">
        <van-cell-group>
          <van-cell title="首页" @click="goHome" />
          <van-cell title="新闻中心" @click="goCenter" />
          <van-cell title="政策文件" @click="goPolicy" />
          <van-cell title="招标信息" @click="goBidding" />
          <van-cell title="收费标准" @click="goCharge"/>
          <van-cell title="联系我们" @click="goContact "/>
        </van-cell-group>
      </div>
    </van-popup>
  </div>
</template>

<script>
import Pswipe from './swipe'
export default {
  components: {
    Pswipe
  },
  data() {
    return {
      size: {
        width: '1em',
        height: '1em'
      },
      engineering: [], //工程案例数据
      honorData: [], //荣誉证书
      show: false
    }
  },

  computed: {},

  mounted() {
    this.getEngineering()
    this.getHonor()
  },

  methods: {
    // 获取工程案例图示
    getEngineering() {
      this.$Api({
        pageCount: 1,
        pageSize: 10,
        categoryId: 10, //工程案例10
        targetPage: 1
      }).then(res => {
        this.engineering = res.data.resultList
        setTimeout(() => {
          const imgs = this.$refs.engineeringRef.getElementsByTagName('img')
          for (let i = 0; i < imgs.length; i++) {
            const img = imgs[i]
            img.setAttribute('preview', i)
            img.setAttribute('preview-text', img.getAttribute('alt'))
            this.$previewRefresh()
          }
        },500)
      })
    },
    // 荣誉证书
    getHonor() {
      this.$Api({
        pageCount: 1,
        pageSize: 10,
        categoryId: 9, //荣誉证书9
        targetPage: 1
      }).then(res => {
        this.honorData = res.data.resultList
        setTimeout(() => {
          const imgs = this.$refs.honorRef.getElementsByTagName('img')
          for (let i = 0; i < imgs.length; i++) {
            const img = imgs[i]
            img.setAttribute('preview', i)
            img.setAttribute('preview-text', img.getAttribute('alt'))
            this.$previewRefresh()
          }
        })
      })
    },
    // 首页
    goHome() {
      this.show = false
    },
    // 新闻中心
    goCenter() {
      this.$router.push({
        path: '/buiness/news',
        query: {
          active: 2
        }
      })
    },
    // 招标信息
    goBidding() {
      this.$router.push({
        path: '/buiness/bidding',
        query: {
          active: 3
        }
      })
    },
    //企业资源
    goHonor() {
      this.$router.push({
        path: '/buiness/honor',
        query: {
          active: 1
        }
      })
    },
    // 收费标准
    goCharge() {
      this.$router.push({
        path: '/buiness/charge',
        query: {
          active: 4
        }
      })
    },
    //招聘信息
    goRecruit() {
      this.$router.push({
        path: '/buiness/recruit',
        query: {
          active: 5
        }
      })
    },
    // 政策文件
    goPolicy() {
      this.$router.push({
        path: '/buiness/policy',
        query: {
          active: 6
        }
      })
    },
    //联系我们
    goContact() {
      this.$router.push({
        path:'/about'
      })
    },
    goCharge() {
      this.$router.push({
        path:'/buiness/charge',
        query:{
          active:5
        }
      })
    },
    //企业信息
  goMap() {
      this.$router.push({
        path:'detail/map'
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.home-box {
  margin-bottom: 16px;
  .home {
    display: inline-block;
    font-size: 14px;
    padding-right: 4px;
  }
  .home-home {
    border-left: 1px solid #000;
    display: inline-block;
    padding-left: 4px;
    font-size: 8px;
    line-height: 8px;
  }
}
.my-swipe {
  height: 200px;
  margin-bottom: 16px;
  .van-swipe-item {
    img {
      width: 100%;
      height: 200px;
    }
  }
}

.navigter {
  height: 60px;
  margin-bottom: 16px;
  .naviger-item {
    height: 40px;
    text-align: center;
    .svg {
      margin-bottom: 5px;
    }
    span {
      color: #10284e;
      font-size: 12px;
      display: block;
      -webkit-transform: scale(0.833);
      transform: scale(0.7);
      font-weight: 700;
    }
  }
}
.van-popup--right {
  height: 100%;
  background: rgba(51, 51, 51, 1);
  .popup {
    .van-cell-group {
      .van-cell {
        background: rgba(51, 51, 51, 1);
        &::after {
          left: 1px;
        }
        &:hover {
          background: rgba(51, 51, 51, 0.8);
        }
        .van-cell__title {
          color: #fff;
          font-size: 14px;
        }
      }
    }
  }
}

.cx-swipe {
  height: 80px;
  .van-swipe-item {
    box-sizing: border-box;
    padding: 0 10px;
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
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
