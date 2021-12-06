<template>
  <div
    :class="{ 'contentCartBox-pc': pc, 'contentCartBox-mobile': mobile }"
  >
      <div class="avatar-zone">
        <img class="avatar" src="../../assets/avatar/lemonboy.jpg" padding="0">
        <p>Lemon</p>
      </div>
    <div class="outlink">
      <a class="link" href="https://www.zhihu.com/"
        ><svg class="icon" aria-hidden="true">
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
  data() {
    return {
      pc: null,
      mobile: null,
    };
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
  methods: {
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 750) {
        this.pc = false;
        this.mobile = true;
        return;
      } else {
        this.pc = true;
        this.mobile = false;
        return;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.contentCartBox-pc {
  margin: 40px 20px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  width: 300px;
  height: 400px;
  border-radius: 30px;
  .avatar-zone {
    margin: auto;
    cursor: pointer;
    width: 150px;
    height: 200px;
   .avatar{
     border-radius: 50%;
     width: 80px;
   }
    p {
    font-weight: 800;
    font-size: 1.2em;
    cursor: pointer;
    text-align: center;
  }
  }
 
  .outlink {
    margin: 0 30px 0 30px;
    display: flex;
    justify-content: space-around;
    position: relative;
    top: 80px;
    .icon {
      width: 45px;
    }
  }
}
.contentCartBox-mobile {
  display: none;
}
</style>
