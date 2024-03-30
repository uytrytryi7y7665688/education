<template>
  <div>
    <el-container style="height: 900px; border: 1px solid #eee">
      <el-aside width="200px" style="background: rgba(106,101,214,0.65)">

      </el-aside>


      <el-container>
        <el-header style="text-align: right; font-size: 14px; background: wheat">
          <el-page-header @back="goBack" content="交流大厅">
          </el-page-header>

        </el-header>

        <el-main>
          <div class="text item" v-for="item in this.lutanQueryVo" :key="item.id">

            <el-card class="box-card">

              <span style="font-weight: lighter; font-variation-settings: inherit">{{ getNickname(item.uid) }}</span>
              <span class="text">{{ item.msg }}</span>
              <el-button size="small" style="background: #dc3545; color: #bbd3dc" @click="Mdelete(item.introid)">删除
              </el-button>

            </el-card>
            <div>


            </div>
          </div>
          <el-pagination :current-page="currentPage" :page-size="limit" :total="total"
                         style="padding: 30px 0; text-align: center;" layout="total, prev, pager, next, jumper"
                         @current-change="getList"/>


          <el-input
              style="font-weight: bold"
              placeholder="请输入"
              v-model="input"
              clearable>
          </el-input>
          <el-button @click="fason">发送</el-button>
        </el-main>
        <el-footer></el-footer>
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

      currentPage: 1,
      limit: 5,
      lutanQueryVo: [],
      input: '',
      total: null,
      name: ''


    }
  }
  ,
  created() {
    this.getList()
  },
  mounted() {


  },
  methods: {
    getNickname(uid) {
      axios({
        url: 'http://localhost:8111/introaction/getNickname/',
        method: 'post',
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',

        },
        data: {
          uid
        }
      })



  },

  fason() {
    axios.post(`http://localhost:8111/introaction/send/${this.input}`,).then(() => {
      alert("发送成功")
      this.getList()
      this.input = null
    })
  },
  Mdelete(id) {

    axios({
      method: 'post',
      url: 'http://localhost:8111/introaction/delete',
      headers: {
        'Content-Type': 'application/json',

      },
      data: {
        id
      }

    })
    this.getList();
  },


  goBack() {
    router.push({path: '/MyPersonal'})
  },
  getList(page = 1) {
    this.currentPage = page
    axios.post(`http://localhost:8111/introaction/getPage/${this.currentPage}/${this.limit}`,).then(Response => {

      this.lutanQueryVo = Response.data.data.page.records
      this.total = Response.data.data.total
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
