<template>
  <div>
    <el-backtop :visibility-height="60">
      <i class="el-icon-arrow-up"></i>
    </el-backtop>
    <el-container>
      <el-header>
        <navigation />
      </el-header>
      <el-container>
        <el-main>
          <contents />
          <resume_cart />
        </el-main>
      </el-container>
      <el-footer>
        <l_footer />
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import navigation from "../components/navigation.vue";
import contents from "../components/main/content.vue";
import resume_cart from "../components/main/resumeCart.vue";
import l_footer from "../components/l-footer.vue";
export default {
  components: {
    navigation,
    contents,
    resume_cart,
    l_footer,
  },
};
</script>

<style lang="scss"  scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: none;
}
.el-main {
 display: flex;
 justify-content: center;
}
.main2 {
  width:300px;
}
</style>