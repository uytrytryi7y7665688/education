<template>
  <div>
    <el-container style="height: 900px; border: 1px solid #eee">
      <el-aside width="200px" style="background: rgba(106,101,214,0.65)">
        <span>能打败你自己的只有你自己的自律</span>
      </el-aside>


      <el-container>
        <el-header style="text-align: right; font-size: 14px; background: wheat">

          <el-page-header @back="goBack" content="任务获取">

          </el-page-header>

        </el-header>

        <el-main>
          <div class="text item" v-for="(key,value) in this.dati" :key="value">

            <el-card class="box-card">
              <span class="text">{{key}}</span>
              <el-input></el-input>
            </el-card>

          </div>
          <el-button @click="fason">提交</el-button>
        </el-main>
        <el-footer>

        </el-footer>
      </el-container>
    </el-container>


  </div>
</template>

<script>


import router from "@/router";
import axios from "axios";

export default {
  data() {
    return {

      dati:[]

    }
  }
  ,
  created() {

  },
  mounted() {


  },
  methods: {
    goBack() {
      router.push({path: '/MyPersonal'})
    },
    getData(){
      axios.get('http://localhost:8311/dati/random').then(R=>{
        this.dati=R.data.data

      })

    }


  }
}

</script>

<style>

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}

.box-card {
  line-height: 200px;
  height: 200px;
  border: 3px solid green;
  background: yellowgreen;
}

</style>
