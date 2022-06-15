<template>
  <div>
    <van-pull-refresh
      v-model="refreshing"
      @refresh="onRefresh"
    >
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="别滑拉了"
        @load="onLoad"
      >
        <CardTwo
          v-for="item in films"
          :key="item.filmId"
          :img="item.poster"
          :name="item.name"
          :type="item.filmType.name"
          :actors="item.actors|parseActors"
          :premiereAt="item.premiereAt|parseTime"
        />
      </van-list>
      <div style="height:60px"></div>
    </van-pull-refresh>

  </div>
</template>

<script>
import url from '@/config/url'
import Vue from 'vue'
import { Tag, List, PullRefresh } from 'vant'
Vue.use(Tag)
Vue.use(List)
Vue.use(PullRefresh)
import CardTwo from '@/components/CardTwo.vue'
export default {
  components: { CardTwo },
  data() {
    return {
      films: [],
      loading: false,
      finished: false,
      pageNum: 1,
      total: 0,
      refreshing: false,
      premiereAt:'',
    }
  },
  methods: {
    
    onRefresh() {
      this.pageNum = 1
      this.onLoad()
    },
    onLoad() {
      if (this.pageNum > 1 && this.pageNum > Math.ceil(this.total / 10)) {
        this.loading = true
        this.finished = true
        return
      }
      this.$http
        .get(url.comingSoon + '?pageNum=' + this.pageNum)
        .then((res) => {
          this.films = [...this.films, ...res.data.films]
          this.pageNum = this.pageNum + 1
          this.total = res.data.total
          this.premiereAt =res.data.films.premiereAt
          this.loading = false
          this.refreshing = false
        })
    }
  },
  created() {

  },
  filters: {
    parseActors(arr) {
      if (arr) {
        let tmp = ''
        arr.forEach((item) => {
          tmp += item.name + ' '
        })
        return tmp
      } else {
        return '暂无'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
