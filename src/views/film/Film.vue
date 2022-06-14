<template>
  <div>
    <van-sticky @scroll="scrollHandler">
      <Header :topStatus="status" />
    </van-sticky>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from '@/components/navigator/Header.vue'
import Vue from 'vue'
import { Sticky } from 'vant'

Vue.use(Sticky)
export default {
  components: { Header },
  data() {
    return {
      status: false
    }
  },
  methods: {
    scrollHandler(event) {
      this.status = event.scrollTop > 100
    }
  }
}
</script>

<style lang="scss" scoped>
</style>