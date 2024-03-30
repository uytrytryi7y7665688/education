<template>
  <div>


    <el-container>
      <el-header height="500px" style="text-align: center; font-size: 50px">中小学生劳动教育平台

      </el-header>
      <el-container>
        <el-aside width="200px" >身似山河挺脊梁</el-aside>
        <el-input
            style="font-weight: bold"
            placeholder="请输入手机号"
            v-model="phone"
            clearable>
        </el-input>
        <el-input
            style="color: sienna"
            placeholder="请输入验证码"
            v-model=yan
            clearable>
        </el-input>
        <el-button class="postlogin" @click="postlogin">登录/注册</el-button>
        <el-button style="background-color: wheat" @click="postyan">获取验证码</el-button>



      </el-container>
      <el-footer height="500px" >

      </el-footer>
    </el-container>

<!--    <el-container>-->
<!--      <el-header>Header</el-header>-->
<!--      <el-container>-->
<!--        <el-aside width="200px">Aside</el-aside>-->
<!--        <el-container>-->
<!--          <el-main>Main</el-main>-->
<!--          <el-footer>Footer</el-footer>-->
<!--        </el-container>-->
<!--      </el-container>-->
<!--    </el-container>-->

  </div>


</template>
<script>

import Axios from "axios";
import router from "@/router";




export default {


  data() {
    return {
      imageUrl: '',
       phone:'',
      yan: '',

    }
  },
  methods:{

    postyan(){
      Axios.post('http://localhost:8204/user/msm/send',this.phone)
          .then(() => {
            alert("发送成功，请输入验证码（第一个）")
          })
    },


    postlogin(){
      Axios.post(`http://localhost:8150/user/login/${this.phone}/${this.yan}`,[this.phone,this.yan])
          .then( Response=> {
            localStorage.setItem('token',JSON.stringify(Response.data.data))
            if(Response.data.code===200){router.push({ path: '/MyPersonal' })}
              else {alert("验证码错误，请重新登录")}
                }
          )
    },

    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    }



  }
}
</script>



<style>
.postlogin{
  background-color: wheat;
  top: 80px;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>

