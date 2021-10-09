<template>

     <div>
           <!-- 分页 -->
      <div v-bind:class="{'pagination':pc, 'mobilePagination':mobile}" >
        <el-pagination 
        @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            :current-page="currentPage"
                            :page-size="pagesize"
                            layout="total, sizes, prev, pager, next, jumper"
                            :total="sampleBlogCards.length">
        </el-pagination>
      </div>
     </div>
</template>

<script>
import { get } from "../../utils/postserver";
export default {
    data(){
        return {
              currentPage:1, //初始页
                pagesize:5,    //    每页的数据
                 sampleBlogCards: [],
                 pc:null,
                 mobile: null,
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
    },
     created: function getContents() {
    get("api/add", {})
      .then((res) => {
        this.sampleBlogCards = res.data.reverse();
      })
      .catch((err) => console.log(err));
     window.addEventListener("resize", this.checkScreen);
       this.checkScreen();
  },

}
</script>

<style lang="scss" scoped>
// 分页
      .pagination {
    width: 800px;
    height: 50px;
    background-color: rgba(0, 0, 0, 0.06);
    margin: 20px 50px 10px 150px;
    position: relative;
    .el-pagination {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

   .mobilePagination {
    margin: 20px 0 20px 0;
    position: relative;
    .el-pagination {
      position: absolute;
      top: 50%;
      left: 50%;
      margin: 0;
      padding: 0;
      transform: translate(-50%, -50%);
    }
  }
</style>
