<template>
  <div>
     <div class="DA-content-box">
        <div v-bind:class="{'detailBox-pc':pc, 'detailBox-mobile':mobile}">
        <div class="title">{{ title }}</div>
        <div class="postTime">{{ postTime }}</div>
        <div class="content" v-html="content" ref="refImg"></div>
      </div>
      </div>
      <!-- 目录 -->
      <!-- <div v-bind:class="{'menuBox-pc':pc, 'menuBox-mobile':mobile}"></div> -->
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
      imgs[i].style.padding = "20px"
    }
 },
};
</script>

<style lang="scss"  scoped>
.DA-content-box{
  display:flex;
   justify-content: center;
}
// pc
.detailBox-pc {
  width: 800px;
  padding: 30px;
  min-height: 300px;
  border-radius: 8px;
  box-sizing: border-box;
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
 width: 800px;
  padding: 30px;
  min-height: 300px;
  border-radius: 8px;
  box-sizing: border-box;
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

</style>