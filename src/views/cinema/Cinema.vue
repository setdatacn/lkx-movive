<template>
  <div>
    <div v-for="item in cinemas" :key="item.cityId">
      <div>
        <div>{{ item.name }}</div>
        <div>{{ item.address }}</div>
      </div>
      <div>
        <div>{{}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import url from "@/config/url";
export default {
  data() {
    return {
      cinemas: [],
    };
  },
  created() {
    this.$http.get(url.cinema).then((res) => {
      this.cinemas = res.data.cinemas;
      console.log(res.data.cinemas);
    });
  },
};
</script>

<style lang="scss" scoped>
</style>