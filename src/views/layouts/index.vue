<template>
  <div class="app-container">
    <div class="layout-header app-content">
      <logo/>
    </div>
    <div class="layout-content">
      <keep-alive v-if="$route.meta.keepAlive">
        <router-view></router-view>
      </keep-alive>
      <router-view v-else></router-view>
    </div>
    <div class="layout-footer app-content">
      <TabBar :data="tabbars" @change="handleChange" />
    </div>
  </div>
</template>

<script>
import TabBar from '@/components/TabBar';
import logo from "@/components/logo";
export default {
  name: 'AppLayout',
  data() {
    return {
      tabbars: [
        {
          title: '首页',
          to: {
            name: 'Home'
          },
          icon: 'wap-home-o'
        },
        {
          title: '资质证书',
          to:{
            path:'message'
          },
          icon:'certificate'
        },
        {
          title: '关于成效',
          to: {
            name: 'About'
          },
          icon: 'search'
        }
      ]
    }
  },
  components: {
    TabBar,
    logo
  },
  methods: {
    handleChange(v) {
      console.log('tab value:', v)
    }
  }
}
</script>
