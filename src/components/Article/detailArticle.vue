<template>
  <div>
    <main>
      <div v-bind:class="{'detailBox-pc':pc, 'detailBox-mobile':mobile}">
        <div class="title">{{ title }}</div>
        <div class="postTime">{{ postTime }}</div>
        <div class="content" v-html="content"></div>
      </div>
      <!-- 目录 -->
      <div v-bind:class="{'menuBox-pc':pc, 'menuBox-mobile':mobile}"></div>
    </main>
  </div>
</template>

<script>
import { get } from "../../utils/postserver";
export default {
  data() {
    return {
      title: "",
      postTime: "",
      content: "",
      pc:null,
      mobile:null,
    };
  },
 methods:{
        checkScreen() {
            this.windowWidth = window.innerWidth;
            if(this.windowWidth <=750){
                this.pc = false;
                this.mobile = true;
                return;
            }else{
                this.pc = true;
            this.mobile = false;
            return;
            }
        }
 },
  created: function getContent() {
     get("api/add/" + this.$route.params.id, {}).then((res) => {
        this.title = res.data.title;
        this.postTime = res.data.postTime;
        this.content = res.data.content;
      });
        window.addEventListener("resize", this.checkScreen);
       this.checkScreen();
  },
  updated() {
    const content = document.querySelector('.content')
    let imgs = content.querySelectorAll('img')
    for(let i=0; i<imgs.length; i++){
      imgs[i].style.width = "100%"
      imgs[i].style.display = "block"
      imgs[i].style.position = "absolute"
      imgs[i].style.left ="50%"
      imgs[i].style.transform = "translateX(-50%)"
    }
 },
};
</script>

<style lang="scss"  scoped>
// pc
.detailBox-pc {
  width: 800px;
  padding: 20px;
  min-height: 100vh;
  margin: 50px 50px 20px 150px;
  border-radius: 8px;
  box-sizing: border-box;
  position: relative;
  .title {
    font-size: 2em;
    font-weight: 7000;
    margin-top: 20px;
    text-align: center;
  }
  .postTime {
    text-align: center;
    font-weight: 500;
    margin-top: 10px;
    padding: 10px;
  }
}
.detailBox-mobile{
  width: 90%;
}
.menuBox-pc {
  position: absolute;
  top: 110px;
  right: 150px;
  width: 300px;
  height: 400px;
  border-radius: 30px;
}

// .menuBox-mobile{
//   display: none;
// }
img{
  width: 100%;
}
</style>