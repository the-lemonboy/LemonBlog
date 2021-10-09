<template>
  <div class="writerContainer">
    <el-container>
      <el-header>
        <navigation />
      </el-header>
      <el-main>
        <input
          class="title_text"
          type="text"
          placeholder="标题..."
          v-model="title"
        />
        <!-- <input class="cover_photo" type="file" @change="uploadFile" > -->
        <!-- <button @click="onUpload">上传照片</button> -->
        <div class="mavonEditor">
          <no-ssr>
            <mavon-editor
              :toolbars="markdownOption"
              v-model="content"
              @change="getmd"
              ref="md"
              @imgAdd="$imgAdd"
              @imgDel="$imgDel"
            />
          </no-ssr>
          <button class="submit" @click="senddata">发布</button>
        </div>
      </el-main>
      <el-footer>
        <l_footer />
      </el-footer>
    </el-container>
  </div>
</template>
<script>
import { get } from "../utils/postserver";
import { post } from "../utils/postserver";
import navigation from "../components/navigation.vue"
import l_footer from "../components/l-footer.vue";
export default {
  components: {
    navigation,
    l_footer,
    
  },
  data() {
    return {
      markdownOption: {
        bold: true, // 粗体
        italic: true, // 斜体
        header: true, // 标题
        underline: true, // 下划线
        strikethrough: true, // 中划线
        mark: true, // 标记
        superscript: true, // 上角标
        subscript: true, // 下角标
        quote: true, // 引用
        ol: true, // 有序列表
        ul: true, // 无序列表
        link: true, // 链接
        imagelink: true, // 图片链接
        code: true, // code
        table: true, // 表格
        fullscreen: true, // 全屏编辑
        readmodel: true, // 沉浸式阅读
        htmlcode: true, // 展示html源码
        help: true, // 帮助
        /* 1.3.5 */
        undo: true, // 上一步
        redo: true, // 下一步
        trash: true, // 清空
        save: true, // 保存（触发events中的save事件）
        /* 1.4.2 */
        navigation: true, // 导航目录
        /* 2.1.8 */
        alignleft: true, // 左对齐
        aligncenter: true, // 居中
        alignright: true, // 右对齐
        /* 2.2.1 */
        subfield: true, // 单双栏模式
        preview: true, // 预览
      },
      title: "",
      postTime: "",
      content: "",
      selectedFile: null,
      img_file: {},
    };
  },
  methods: {
    $imgAdd(pos, $file) {
      // 缓存图片信息
      this.img_file[pos] = $file;
    },
    $imgDel(pos) {
      delete this.img_file[pos];
    },

    getmd(value, render) {
      this.render = render;
    },
    //  onFileSelected(event){
    //     this.selectedFile = event.target.files[0]
    //     console.log(this.selectedFile)
    //   },
    //    uploadFile (event) {
    //         this.files = event.target.files
    //         },
    senddata($e) {
      let date, y, m, d, h, mm;
      date = new Date();
      y = date.getFullYear();
      m = date.getMonth() + 1;
      d = date.getDate();
      h = date.getHours();
      mm = date.getMinutes();
      this.postTime = y + "-" + m + "-" + d + "-" + h + "-" + mm;

      //上传图片
      // const formData = new FormData();
      // for (const i of Object.keys(this.files)) {
      //   formData.append('files', this.files[i])
      // }
      var formdata = new FormData();
      for (var _img in this.img_file) {
        formdata.append('_img', this.img_file[_img]);
      }

      post("api/add", {
        title: this.title,
        postTime: this.postTime,
        content: this.render,
      })
        .then((res) => {
           this.$message.success("发布成功！")
           this.$router.push('/')
        })
        .catch((err) => {
          console.log(err)
          this.$message.error("发布异常！")
        });
      // post("api/file-upload", formdata)
      //   .then((res) => {
      //     console.log(res);
      //     // for (var img in res) {
      //     //   // $vm.$img2Url 详情见本页末尾
      //     //   $vm.$img2Url(img[0], img[1]);
      //     // }
      //   })
      //   .catch((err) => console.log(err));
    },
  },
};
</script>

<style lang="scss" scoped>
.title_text {
  border: none;
   background-color: #f1f1f1;
  border-bottom: 2px solid black;
  margin: 20px;
  height: 30px;
  &:focus {
    outline: none;
  }
}
.cover_photo {
  //background-color:rgb(38,38,38) ;
  // color:white;
  font-weight: 300px;
  width: 300px;
  height: 35px;
  //  border-radius: 1em;
  border: none;
}
.mavonEditor {
  margin-top: 20px;
  width: 100%;
  height: 100%;
  border: 0px;
}
.submit {

  font-weight: 300;
  width: 80px;
  height: 35px;
  border-radius: 1em;
  border: none;
  display: block;
  margin: 20px auto;
}
</style>

