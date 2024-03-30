<template>
  <div>
    <el-container style="height: 1000px; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
       <el-button @click="goLunTan"  STYLE="background: yellowgreen">信息发布</el-button>
       <el-button @click="goTask" STYLE="background: violet">任务获取</el-button>
       <el-button @click="goDaTi" style="background: yellow">每周答题</el-button>
      </el-aside>

      <el-container>
        <el-header style="text-align: right; font-size: 14px">
          <span>个人中心</span>
          <i class="el-icon-user" ></i>
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>

            <el-dropdown-menu slot="dropdown">
              {{this.user.name}}
            </el-dropdown-menu>
          </el-dropdown>

        </el-header>

        <el-main>
          <el-row class="demo-avatar demo-basic">
            <el-col :span="24">
              <div class="sub-title">用户</div>
              <div class="demo-basic--circle">
                <div class="block" >
                  <el-avatar :size="150" :src="circleUrl"></el-avatar>
                </div>
              </div>
            </el-col>
<!--            <el-col :span="12">-->
<!--              <div class="sub-title">square</div>-->
<!--              <div class="demo-basic&#45;&#45;circle">-->
<!--                <div class="block"><el-avatar shape="square" :size="50" :src="squareUrl"></el-avatar></div>-->
<!--                <div class="block" v-for="size in sizeList" :key="size">-->
<!--                  <el-avatar shape="square" :size="size" :src="squareUrl"></el-avatar>-->
<!--                </div>-->
<!--              </div>-->
<!--            </el-col>-->
          </el-row>
          <el-radio-group v-model="size">
            <el-radio label="">默认</el-radio>
            <el-radio label="medium">中等</el-radio>
            <el-radio label="small">小型</el-radio>
            <el-radio label="mini">超小</el-radio>
          </el-radio-group>

          <el-descriptions class="margin-top" title="具体信息" :column="3" :size="size" border>
            <template slot="extra">
              <el-button type="primary" size="small" @click="getuser">操作</el-button>
            </template>
            <el-descriptions-item>
              <template slot="label">
                <i class="el-icon-user"></i>
                用户名
              </template>
              {{user.name}}
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label">
                <i class="el-icon-mobile-phone"></i>
                手机号
              </template>
              {{user.phone}}
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label">
                <i class="el-icon-location-outline"></i>
                居住地
              </template>
              {{user.address}}
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label">
                <i class="el-icon-tickets"></i>
                备注
              </template>
              <el-tag size="small"></el-tag>
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label">
                <i class="el-icon-office-building"></i>
                邮箱
              </template>
              {{user.uemil}}
            </el-descriptions-item>
          </el-descriptions>
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

import axios from "axios";
import router from "@/router";

export default {



  data() {
    return {
      user:{},
      circleUrl: '',
      size: '',

    }
  },
  created() {
    axios.get("http://localhost:8150/user/getUserDetail").then(Response=>{
      this.user=Response.data.data.user
      this.circleUrl=Response.data.data.user.touxiangurl
      this.circleUrl=this.circleUrl.replaceAll('^','/')

    })
  },
  mounted() {

  },
  methods: {
    goTask(){
      router.push({ path: '/Task' })
    },

    goDaTi(){
      router.push({ path: '/DaTi' })
    },

    goLunTan(){
      router.push({ path: '/LunTan' })
    },
    getuser(){
      router.push({ path: '/HiddenData' })
    }
  },
  beforeDestroy() {
    this.$bus.$off('imgurl')
  }

}
</script>

<style>

.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content1 {
  border-radius: 40px;
  min-height: 1006px;
  width: 1500px;
}
.grid-content2 {
  border-radius: 40px;
  min-height: 1006px;
  width: 100px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.el-header {
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>