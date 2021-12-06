<template>
  <div>
    <el-container>
      <el-header>
        <navigation />
      </el-header>
      <el-main>
        <detail_article />
      </el-main>
      <el-footer>
        <l_footer />
      </el-footer>
    </el-container>
  </div>
</template>
<script>
import navigation from "../components/navigation.vue";
import detail_article from "../components/Article/detailArticle.vue";
import l_footer from "../components/l-footer.vue";
export default {
  components: {
    navigation,
    detail_article,
    l_footer,
  },
  data(){
    return {

    }
  },
};
</script>
<style lang="scss" scoped>
el-main{
  position: relative;
  min-height: 100%;
  height: auto;
}
</style>