<template>
   <div class="navigation-box">
       <router-link v-bind:class="{'homeLink-pc':pc, 'homeLink-mobile':mobile}" to="/"><span class="title-info">LemonBlog</span></router-link>
       <dark_light />
    <div id="mainNav"  v-show="pc">
      <ul>
        <router-link class="link" to="/"><span>主页</span></router-link>
        <router-link class="link" to="/editorArticle"><span>写文章</span></router-link>
      </ul>
    </div>
    <div class="mobileMulu" @click="toggleMobileNav" v-show="mobile"> <svg class="icon" aria-hidden="true">
  <use xlink:href="#icon-RectangleCopy
"></use>
</svg></div>
    <div id="mobileNav" v-show="mobileNav">
 <ul>
<router-link class="link" to="/"><span>主页</span></router-link>
        <router-link class="link" to="/editorArticle"><span>写文章</span></router-link>
      </ul>
    </div>
   </div>
</template>

<script>
import dark_light from './dark_light.vue'
export default {
    components:{
        dark_light
    },
    data() {
        return {
            mobile: null,
            mobileNav: null,
            windowWidth: null,
            pc: null,
        };
    },
    created() {
       window.addEventListener("resize", this.checkScreen);
       this.checkScreen();
    },
    methods: {
        checkScreen() {
            this.windowWidth = window.innerWidth;
            if(this.windowWidth <=750){
                this.mobile = true;
                this.pc = false;
                return;
            }else{
                this.pc = true;
            this.mobile = false;
            this.mobileNav = false;
            return;
            }
             
        },
        toggleMobileNav(){
            this.mobileNav =! this.mobileNav;
        }
    },


}
</script>

<style lang="scss" scoped>
.navigation-box{
    height: 300px;
    .homeLink-pc{
        cursor: pointer;
     span{
         font-size: 1.5rem;
      font-weight:bold;
      margin-left:50px ;
      line-height: 50px;
      display: inline-block;
     text-decoration: none;
     }
     .title-info{
        display: inline-block;
     }
    }
      .homeLink-mobile{
      display: none;
  }
    #mainNav{
        position: absolute;
        right:20px;
        top:10px;
        display: inline-block;
      .link{
          text-decoration: none;
          margin-right:32px ;
          font-weight:bold;
          font-size:1.3em;
      }
    }
    // 移动端
    .mobileMulu{
        margin-right:10px ;
     line-height: 70px;
     position: absolute;
     right:32px;
     top:10px;
    }
    .icon {
  width: 2em;
  height: 2em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
#mobileNav{
    height: 100%;
    width: 70%;
    max-width: 200px;
    z-index: 99;
    position:fixed;
    display: flex;
    flex-flow: column;
    text-align: center;
    top:0;
    left:0;
    .link{
        display: block;
        font-size: 1.2em;
        text-decoration: none;
        margin-top:20px;
    }
}
#mobileNav-enter-active,
#mobileNav-leave-active{
    transform: all 1s ease;
}
#mobileNav-enter{
    transform: translateX(-200px);
}
#mobileNav-enter-to{
    transform: translateX(0);
}
#mobileNav-leave-to{
    transform: translateX(-200px);
}
  }
</style> 