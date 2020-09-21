// 兼容 IE
// https://github.com/zloirock/core-js/blob/master/docs/2019-03-19-core-js-3-babel-and-a-look-into-the-future.md#babelpolyfill
import 'core-js/stable'
import 'regenerator-runtime/runtime'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './icon'

//vant组件
import { Swipe, SwipeItem,Cell, CellGroup,Col, Row,Icon,Popup ,NavBar,Tab, Tabs,Image as VanImage    } from 'vant';
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Cell)
Vue.use(CellGroup)
Vue.use(Col)
Vue.use(Row)
Vue.use(Icon)
Vue.use(Popup)
Vue.use(NavBar)
Vue.use(Tab)
Vue.use(Tabs)
Vue.use(VanImage)

import { articleApi } from '@/api/home'
Vue.prototype.$Api = articleApi


//插件
import preview from "vue-photo-preview";
import "vue-photo-preview/dist/skin.css";
Vue.use(preview);

// 设置 js中可以访问 $cdn
import { $cdn } from '@/config'
Vue.prototype.$cdn = $cdn

// 全局引入按需引入UI库 vant
import '@/plugins/vant'
// 引入全局样式
import '@/assets/css/index.scss'
// 移动端适配
import 'lib-flexible/flexible.js'

// filters
import './filters'
Vue.config.productionTip = false

import service from '@/utils/request'
Vue.prototype.$http = service

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
