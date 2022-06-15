<template>
  <div>
    <van-tabbar v-model="active" active-color="#fb763a" inactive-color="#000">
      <van-tabbar-item to="/film" name="/film">
        <span
          class="iconfont icon-dianyingzhiye-dianyingbang"
          slot="icon"
        ></span>
        <span>电影</span>
      </van-tabbar-item>
      <van-tabbar-item to="/cinema" name="/cinema">
        <span class="iconfont icon-yingyuan" slot="icon"></span>
        <span>影院</span>
      </van-tabbar-item>
      <van-tabbar-item to="/info" name="/info">
        <span class="iconfont icon-zixun" slot="icon"></span>
        <span>资讯</span>
      </van-tabbar-item>
      <van-tabbar-item to="/ucenter" name="/ucenter">
        <span class="iconfont icon-wodewo" slot="icon"></span>
        <span>我的</span>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import "@/assets/font/iconfont.css";
import Vue from "vue";
import { Tabbar, TabbarItem } from "vant";

Vue.use(Tabbar);
Vue.use(TabbarItem);

export default {
  data() {
    return {
      active:this.pathHanlder()
    };
  },
  methods:{
    pathHanlder(){
      let path = window.location.pathname
      if (path ==='/film/NowPlaying' || path==='/film/comingSoon') {
        path = '/film'
      }
      return path
    }
  }
};
</script>

<style lang="scss" scoped>
.van-tabbar-item__icon {
  span:nth-child(1) {
    font-size: 20px;
  }
}
</style>