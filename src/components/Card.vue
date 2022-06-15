<template>
  <div>
    <div class="item van-hairline--bottom">
      <div>
        <img :src="img" />
      </div>
      <div>
        <div class="van-ellipsis">{{name}} <span>{{type}}</span></div>
        <div>观众评分 <span style="color:#ffb232">{{grade}}</span></div>
        <div class="van-ellipsis">主演: {{actors}}</div>
        <div>{{nation}} | {{runtime}}分钟</div>
      </div>
      <div>
        <van-tag
          plain
          color="#ff5f16"
          size="large"
        >购票</van-tag>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Tag } from 'vant'
Vue.use(Tag)
export default {
  props: {
    img: {
      type: String
    },
    name: {
      type: String
    },
    type: {
      type: String
    },
    grade: {
      type: String,
      default:'暂无评分'
    },
    actors: {
      type: String,
      default:'未知演员'
    },
    nation: {
      type: String
    },
    runtime: {
      type: Number
    }
  }
}
</script>

<style lang="scss" scoped>
.item {
  margin-top: 4px;
  padding: 10px;
  display: flex;
  justify-content: space-evenly;
  > div:nth-child(1) {
    width: 20%;
    img {
      width: 66px;
      height: 99px;
      border-radius: 2px;
    }
  }
  > div:nth-child(2) {
    width: 65%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 13px;
    color: #797d82;
    > div {
      margin-top: 5px;
    }
    > div:nth-child(1) {
      font-size: 16px;
      font-weight: 500;
      color: black;
      span {
        padding: 2px;
        color: #fff;
        background-color: #d2d6dc;
        border-radius: 2px;
        font-size: 9px;
      }
    }
  }
  > div:nth-child(3) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
