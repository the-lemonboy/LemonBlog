<template>
  <div>
   <el-backtop :visibility-height="60">
      <i class="el-icon-arrow-up"></i>
</el-backtop>
    <el-container>
      <el-header>
        <navigation />
      </el-header>
      <el-main>
        <contents />
        <resume_cart />
        <pagination />
      </el-main>
      <el-footer>
        <l_footer />
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import navigation from "../components/navigation.vue";
import contents from "../components/main/content.vue";
import resume_cart from "../components/main/resumeCart.vue"
import l_footer from "../components/l-footer.vue";
import pagination from "../components/main/pagination.vue";
export default {
  components: {
    navigation,
    contents,
    resume_cart,
    l_footer,
    pagination
  },
};
</script>

<style lang="scss"  scoped>
*{
  padding: 0;
  margin:0;
  box-sizing: none;
}

</style>