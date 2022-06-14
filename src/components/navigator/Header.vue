<template>
  <div style="backgroundColor:white">
    <van-nav-bar
      title="电影"
      :border="false"
      v-show="topStatus"
    >
    <template #left>
      <span>太原</span>
      <van-icon name="arrow-down" color="black" :size="5" style="margin-left:5px" />
    </template>
    </van-nav-bar>
    <van-tabs
      title-active-color="#ff5f16"
      line-width="80"
      line-height="2"
    >
      <van-tab
        title="正在热映"
        to="/film/nowPlaying"
      ></van-tab>
      <van-tab
        title="即将上映"
        to="/film/comingSoon"
      ></van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Vue from 'vue'
import { Tab, Tabs, NavBar,Icon } from 'vant'

Vue.use(Tab)
Vue.use(Tabs)
Vue.use(NavBar)
Vue.use(Icon)
export default {
  props:{
    topStatus:{
      type:Boolean,
      default:false
    }
  },
  data() {
    return {
      
    }
  },
}
</script>

<style lang="scss" scoped>
::v-deep .van-tab__text--ellipsis {
  font-size: 16px;
}
::v-deep .van-tabs__line {
  background-color: #ff5f16;
}
</style>