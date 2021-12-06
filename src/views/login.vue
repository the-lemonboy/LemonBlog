<template>
 <div class="loginBox">
   <div class="loginout">
     <router-link class="link" to="/">  
     <svg class="icon" aria-hidden="true">
  <use xlink:href="#icon-Lemon"></use>
</svg>
</router-link>
   </div>
    <div class="login-form_wrap">
      <div class="login">
           <el-form  :model="ruleForm" :rules="rules" ref="ruleForm">
                <p>管理员登录</p>
      <div class="inputs">
         <el-form-item prop="userName" >
              <el-input v-model="ruleForm.userName" class="input" type ="text" placeholder="username" prefix-icon="iconfont icon-xiaoren" />
         </el-form-item>
       <el-form-item prop="password">
              <el-input v-model="ruleForm.password" class="input"  show-password placeholder="password"  prefix-icon="iconfont icon-xiaoren" />
         </el-form-item>
      </div>
      <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"><span>登入</span></el-button>
      </el-form-item>
           </el-form>
      </div>
  </div>
 </div>
</template>

<script>
import {post} from '../utils/postserver'
export default {
data() {
return{
    ruleForm:{
        userName: '',
        password: '',
    },
  rules:{
       userName: [
            { required: true, message:'请输入用户名', trigger: 'blur' }
          ],
       password: [
           { required: true, message:'请输入密码', trigger:'blur' },
       ]

}
  }
},
methods:{
    submitForm(){
  this.$refs.ruleForm.validate(valid =>{
    if(!valid) return;
    post('api/login', {username:this.ruleForm.userName, password:this.ruleForm.password})
    .then(res =>{
        this.$message.success("登入成功")
  window.sessionStorage.setItem('token',  res.data.token)
this.$router.push('/editorArticle')
    }) .catch( error =>{
    return this.$message.error("登入失败")
    })
  })
    }
},
}
</script>

<style lang="scss" scoped>
*{
  padding: 0;
  margin: 0;
}
.login{
    width: 300px;
    height: 400px;
    border-radius: 4px;
    position: absolute;
    left: 50%;
    top:50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    p{
        text-align: center;
        font-weight: 500;
        font-size: 1.3em;
        position: relative;
        top:100px;
    }
    .inputs{
        position: absolute;
    top:50%;
    left: 50%;
    transform: translate(-50%,-50%);
    .input{
      width: 250px;
      margin:20px;
    }
    }
    .el-button{
      width: 80px;
      height: 40px;
    position: absolute;
    top:50%;
    left: 50%;
    transform: translate(-50%,700%);
    border: none;
    }   
}
.loginout{
  margin: 10px;
  .icon{
    width: 60px;
    height: 60px;
  }
}
</style>