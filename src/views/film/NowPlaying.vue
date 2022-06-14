<template>
  <div>
    <div v-for="item in result" :key="item.path" class="news">
      <div>
        <a :href="item.path"><img :src="item.image" alt="" /></a>
      </div>
      <div>
        <div class="title">{{ item.title }}</div>
        <div class="passtime">{{ item.passtime }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      result: [],
      image: "",
      page: 1,
      pageCount: 0,
      path: "",
    };
  },
  methods: {
    load(page = 1) {
      const url = "https://api.jiasiyuan.cn/news";
      axios.get(url, { params: { page } }).then((res) => {
        this.result = res.data.result;
        this.image = res.data.result.image;
        this.page = res.data.page;
        this.pageCount = res.data.pageCount;
        this.path = res.data.result.path;
      });
    },
  },
  created() {
    this.load();
  },
};
</script>

<style lang="scss" scoped>
.news {
  display: flex;
}
</style>