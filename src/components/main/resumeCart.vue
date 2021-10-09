<template>
  <div v-bind:class="{'contentCartBox-pc':pc, 'contentCartBox-mobile':mobile}" >
      <div class="demo-basic--circle">
        <div class="block"><el-avatar :size="80" :src="circleUrl"></el-avatar></div>
                    <span>Lemon</span>
      </div>
<div class="outlink">
     <a class="link" href="https://www.zhihu.com/"><svg class="icon" aria-hidden="true">
  <use xlink:href="#icon-shejiaotubiao-46-copy-copy-copy"></use>
</svg>
</a>
      <a class="link" href="https://leetcode-cn.com/">
          <svg class="icon" aria-hidden="true">
  <use xlink:href="#icon-leetcode-copy"></use>
</svg>
      </a>
      <a class="link" href="https://github.com/the-lemonboy">
          <svg class="icon" aria-hidden="true">
  <use xlink:href="#icon-github-copy"></use>
</svg>
      </a>
      <a class="link" href="https://www.csdn.net/">
          <svg class="icon" aria-hidden="true">
  <use xlink:href="#icon-csdn-copy"></use>
</svg>
      </a>
</div>
  </div>
</template>

<script>
export default {
    data(){
return{
    pc:null,
    mobile:null, 
     circleUrl: "../../assets/images/dlam.jpg",
}
    },
     created() {
       window.addEventListener("resize", this.checkScreen);
       this.checkScreen();
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
             
        },
}
}
</script>

<style lang="scss" scoped>
.contentCartBox-pc{
     box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    position: absolute;
    top:110px;
    right: 150px;
    width: 300px;
    height: 400px;
    border-radius: 30px;
    .block{
    position: absolute;
	left: 50%;
	top: 25%;
	transform: translate(-50%,-50%);
    cursor: pointer;
    }
    span{
    position: absolute;
	left: 50%;
	top: 40%;
	transform: translate(-50%,-50%);
    font-weight: 800;
    font-size: 1.2em;
    cursor: pointer;
    }
    .outlink{
        margin: 0 30px 0 30px;
        display: flex;
        justify-content: space-around;
        position: relative;
        top:270px;
        .icon{
            width: 45px;
        }
    }
}
.contentCartBox-mobile{
    display: none;
}
</style>
