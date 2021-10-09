<template>
  <div>
    <div class="blogCart-box">
      <div class="card_img">
      </div>
      <div class="info">
        <div class="title">{{title}}</div>
        <div class="post_time"></div>
        <div class="content" ></div>
        <router-link class="detail" to="/detailArticle"><span>文章---></span></router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {get} from '../../utils/postserver'
export default {
  props: {title: String},
data() {
  return{
    // title: "",
    // postTime: "",
    // content: "",
  }
},
// created: async function getContents() {
// await get('api/add', {}).then(res =>{
//   this.title = res.data.title;
//   this.postTime = res.data.postTime;
//   this.content = res.data.content;
//   console.log(res.data[1])
// })
// }
};

</script>

<style lang="scss" scoped>
.blogCart-box {
  width: 320px;
  min-height: 420px;
  margin: 20px auto;
  border-radius: 8px;
  box-sizing: border-box;
  position: relative;
  transition: all 0.5s ease;
  &:hover {
    transform: rotate(-1deg) scale(1.01);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }
  img {
    display: block;
    width: 100%;
    height: 200px;
    object-fit: fill;
    min-width: 200px;
    border-radius: 8px;
  }
  .info {
    margin: 10px;
    .title {
      font-size: 1.3em;
      font-weight: 500;
      margin-top: 20px;
    }
    .post_time {
      font-weight: 300;
      margin-top: 10px;
    }
    .detail {
      position: absolute;
      bottom: 50px;
      text-decoration: none;
    }
  }
}
</style>