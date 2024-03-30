<template>
  <div>
    <el-container style="height: 1000px; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">

      </el-aside>

      <el-container>
        <el-header style="text-align: right; font-size: 14px">
          <i class="el-icon-user"></i>
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>

            <el-dropdown-menu slot="dropdown">

            </el-dropdown-menu>
          </el-dropdown>

        </el-header>

        <el-main>
          <el-upload
              class="avatar-uploader"
              action="http://localhost:8205/file/fileUpload"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
          <el-container>
            <el-input
                style="color: sienna"
                placeholder="请输入姓名"
                v-model=name
                clearable>
            </el-input>
            <el-input
                style="color: sienna"
                placeholder="请输入邮箱"
                v-model=uemil
                clearable>
            </el-input>
            <el-input
                style="color: sienna"
                placeholder="请输入验地址"
                v-model=address
                clearable>
            </el-input>
            <!--          <el-input v-model="this.name" placeholder="请输入名称"></el-input>-->
            <!--          <el-input v-model="this.uemil" placeholder="请输入邮箱"></el-input>-->
            <!--          <el-input v-model="this.address" placeholder="请输入地址"></el-input>-->

          </el-container>
          <el-button @click="tijiao">提交</el-button>
        </el-main>
      </el-container>
    </el-container>
    <!--      <el-col :span="6"><div class="grid-content bg-purple">-->

    <!--      </div></el-col>-->
    <!--      <el-col :span="6"><div class="grid-content bg-purple">-->

    <!--      </div></el-col>-->

  </div>
</template>

<script>


import Axios from "axios";
import router from "@/router";



export default {


  data() {
    return {
      name: '',
      uemil: '',
      address: '',
      imageUrl: ''
    }
  },
  created() {

  },
  mounted() {
    this.$bus.$emit("imgurl",this.imageUrl)

  },

  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    },
    tijiao() {
    const x=  this.imageUrl.replaceAll('/','^')
      Axios.post(`http://localhost:8150/user/update/${this.name}/${this.uemil}/${this.address}/${x}`, [this.name, this.uemil, this.address,x])
          .then(() => {

            alert("设置成功")

            router.push({ path: '/MyPersonal',query:{imgurl:this.imageUrl} })
          })
    }
  }


}
</script>

<style>
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

</style>