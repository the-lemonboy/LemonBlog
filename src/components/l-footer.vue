<template>
  <div class="lfooter-container">
      <div class="homeTitle">LemonBlog</div>
  <ul class="icon_links">
      <a class="link" href="https://www.zhihu.com/"><svg class="icon" aria-hidden="true">
  <use xlink:href="#icon-shejiaotubiao-46"></use>
</svg>
</a>
      <a class="link" href="https://leetcode-cn.com/">
          <svg class="icon" aria-hidden="true">
  <use xlink:href="#icon-leetcode"></use>
</svg>
      </a>
      <a class="link" href="https://github.com/the-lemonboy">
          <svg class="icon" aria-hidden="true">
  <use xlink:href="#icon-github"></use>
</svg>
      </a>
      <a class="link" href="https://www.csdn.net/">
          <svg class="icon" aria-hidden="true">
  <use xlink:href="#icon-csdn"></use>
</svg>
      </a>
  </ul>
  <span id="id">Copyright 2021 All Rights LemonBlog</span>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.lfooter-container{
    .homeTitle{
        font-size: 1.3em;
        margin:0 40px;
        position: relative;
        top:60px;
        @media(max-width:750px) {
            text-align: center;
        }
    }
    .icon_links{
        position: relative;
        top:80px;
        margin:0 20px ;
          @media(max-width:750px) {
            text-align: center;
        }
        .link{
            margin-right: 10px;
        }
       .icon {
  width: 2em;
  height: 2em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
} 
    }
    span{
    display: flex;
    justify-content: flex-end;
    position: relative;
    top:90px;
    margin: 0 20px;
    @media(max-width:750px) {
        display:block;
         text-align: center;   
        }
    }
}
#id{
    color: white;
}
</style>