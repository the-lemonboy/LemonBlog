<template>
  
</template>

<script>
export default {
 data(){
     return {
         pc: null,
         mobile: null
     }
 },
     methods: {
         //  分页
      handleSizeChange: function (size) {
                this.pagesize = size;
                console.log(this.pagesize)  //每页下拉显示数据
        },
        handleCurrentChange: function(currentPage){
                this.currentPage = currentPage;
                console.log(this.currentPage)  //点击第几页
        },
    },
    created(){
         window.addEventListener("resize", this.checkScreen);
       this.checkScreen();
    }
}
</script>

<style>

</style>