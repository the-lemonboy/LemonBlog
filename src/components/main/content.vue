<template>
  <div>
    <div class="blog_card_wrap">
      <div class="blog_cards">
        <div v-bind:class="{'content-box':pc, 'content-mobileBox':mobile}" v-for="post in sampleBlogCards" :key="post.index"
         :data="sampleBlogCards.slice((currentPage-1)*pagesize,currentPage*pagesize)">
          <div class="content-info">
            <p>{{ post.files }}</p>
            <div class="title">{{ post.title }}</div>
            <div class="post_time">{{ post.postTime }}</div>
            <div class="content" v-html="post.content"></div>
            <div @click="enterDetailArticle(post._id)" class="detail"><p>文章详细</p></div>
            <div class="bottoms"></div>
            <div class="deleteBtn" :class="{'deleteBox':display}"  @click="deleteContent(post._id)">
              <svg class="deleteIcon" aria-hidden="true">
                   <use xlink:href="#icon-a-shanchu1"></use>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { get } from "../../utils/postserver";
import { del } from "../../utils/postserver";
export default {
  components: {},
  data() {
    return {
      sampleBlogCards: [],
      pc:null,
      mobile: null,
      img:null,
      display:null
    };
  },
  methods: {
    enterDetailArticle: function (id) {
      this.$router.push("/showArticle/" + id);
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
      
        deleteContent(id) {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
         del('api/delete/'+ id, {})
       .then((res) => {
        this.$message.success("删除成功！")
         this.$router.go(0)
       })
       .catch((err) => {
         this.$message.error("有错误！")
       }); 
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      }
  },
  created: function getContents() {
    get("api/add", {})
      .then((res) => {
        this.sampleBlogCards = res.data.reverse();
      })
      .catch((err) => console.log(err));
     window.addEventListener("resize", this.checkScreen);
       this.checkScreen();
          const tokenStr = window.sessionStorage.getItem('token')
       if(!tokenStr){
       this.display = true
       }else{
         this.display = false
        }
  },
  updated() {
    const content = document.querySelector('.content')
    let imgs = content.querySelectorAll('img')
    for(let i=0; i<imgs.length; i++){
      imgs[i].style.width = "100%"
      imgs[i].style.display = "block"
      imgs[i].style.padding = "50px"
    }
 },
};
</script>
  
<style lang="scss" scoped>
.blog_card_wrap {
  min-height: 100vh;
  .content-box {
    width: 800px;
    min-height: 300px;
    margin: 50px 50px 20px 150px;
    border-radius: 8px;
    box-sizing: border-box;
    position: relative;
    transition: all 0.5s ease;
    &:hover {
      transform: rotate(-1deg) scale(1.01);
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
        0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }
      .detail {
        position: absolute;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        width: 90px;
        height: 35px;
        border-radius: 20px;
        border: none;
        p {
          text-align: center;
          line-height: 35px;
        }
      }
  }

  // 手机模式
.content-mobileBox {
    width: 90%;
    min-height: 400px;
    margin: 20px 20px 20px 20px;
    border-radius: 8px;
    box-sizing: border-box;
    position: relative;
    margin: auto;
}
  .detail {
        position: absolute;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        width: 90px;
        height: 35px;
        border-radius: 20px;
        border: none;
        p {
          text-align: center;
          line-height: 35px;
        }
      }
}

 

  // 文章样式
    .content-info {
      margin: 10px;
      .title {
        font-size: 2em;
        font-weight: 7000;
        margin-top: 20px;
        text-align: center;
      }
      .post_time {
        text-align: center;
        font-weight: 300;
        margin-top: 10px;
        padding: 10px;
        border-bottom: 1px solid black;
      }
      
      .bottoms{
        width: 100%;
        height: 100px;
      }
      .content {
        font-weight: 500;
        margin: 10px;
      }
    }
.aa{
  display: none;
}
.deleteBtn{
  position: absolute;
  top:5%;
  right: 2%;
  cursor: pointer;
.deleteIcon{
  width: 50px;
  height: 50px;
}
}
</style>