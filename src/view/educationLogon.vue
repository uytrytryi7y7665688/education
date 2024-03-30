<template>

  <el-container style="height: 1000px; border: 1px solid rgba(55,216,35,0.65)">
    <el-aside width="200px" style="background-color: rgba(55,216,35,0.65)">
      <el-menu :default-openeds="['1', '3']">

        <el-submenu index="1">
          <template slot="title"><i class="el-icon-message"></i>日常生活劳动常识</template>

          <el-submenu index="1-1" @click="get11">

            <template slot="title" >清洁与卫生</template>
            <el-menu-item-group>
              <el-menu-item index="1-1-1" @click="get111">清洁用品选择与使用</el-menu-item>
              <el-menu-item index="1-1-2" @click="get112">环境清洁与消毒</el-menu-item>
              <el-menu-item index="1-1-3" @click="get113">个人卫生习惯养成</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="1-2">
            <template slot="title">整理与收纳</template>
            <el-menu-item-group>

              <el-menu-item index="1-2-1" @click="get121">物品整理与管理</el-menu-item>
              <el-menu-item index="1-2-2" @click="get122">储物空间合理利用</el-menu-item>
              <el-menu-item index="1-2-3" @click="get123">环境整洁与整齐</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="1-3">
            <template slot="title">烹饪与营养</template>
            <el-menu-item-group>
              <el-menu-item index="1-3-1" @click="get131">食物选择与准备</el-menu-item>
              <el-menu-item index="1-3-2" @click="get132">食物搭配与营养均衡</el-menu-item>
              <el-menu-item index="1-3-3" @click="get133">食物的质与量</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="1-4">
            <template slot="title">家用器具的维护与使用</template>
            <el-menu-item-group>
<!--              <el-menu-item index="1-4-1" @click="get141"></el-menu-item>-->
              <el-menu-item index="1-4-1" @click="get141">家用器具正确使用</el-menu-item>
              <el-menu-item index="1-4-2" @click="get142">家用器具的维护</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-submenu>

        <el-submenu index="2">
          <template slot="title"><i class="el-icon-menu"></i>日常生活劳动常识</template>

          <el-submenu index="2-1">

            <template slot="title">农业生产劳动</template>
            <el-menu-item-group>
            <el-menu-item index="2-1-1" @click="get211">农田管理</el-menu-item>
            <el-menu-item index="2-1-2" @click="get212">耕种和种植</el-menu-item>
            <el-menu-item index="2-1-3" @click="get213">养殖和畜牧</el-menu-item>
            <el-menu-item index="2-1-4" @click="get214">收割和采摘</el-menu-item>
            <el-menu-item index="2-1-5" @click="get215">农产品加工</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="2-2">
            <template slot="title">传统工艺制作</template>
            <el-menu-item-group>
            <el-menu-item index="2-2-1" @click="get221">陶瓷制作</el-menu-item>
            <el-menu-item index="2-2-2" @click="get222">木雕</el-menu-item>
            <el-menu-item index="2-2-3" @click="get223">刺绣</el-menu-item>
            <el-menu-item index="2-2-4" @click="get224">剪纸</el-menu-item>
            <el-menu-item index="2-2-5" @click="get225">手工编织</el-menu-item>
            <el-menu-item index="2-2-6" @click="get226">瓷器绘制</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="2-3">
            <template slot="title">工业生产劳动</template>
            <el-menu-item-group>
            <el-menu-item index="2-3-1" @click="get231">生产线操作</el-menu-item>
            <el-menu-item index="2-3-2" @click="get232">机械操作</el-menu-item>
            <el-menu-item index="2-3-3" @click="get233">质量控制</el-menu-item>
            <el-menu-item index="2-3-4" @click="get234">维护和修理</el-menu-item>
            <el-menu-item index="2-3-5" @click="get235">生产计划和调度</el-menu-item>
            <el-menu-item index="2-3-6" @click="get236">安全管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="2-4">
            <template slot="title">新技术体验与应用</template>
            <el-menu-item-group>
            <el-menu-item index="2-4-1" @click="get241">新技术体验与应用</el-menu-item>
<!--            <el-menu-item index="2-4-2">家用器具正确使用</el-menu-item>-->
<!--            <el-menu-item index="2-4-3">家用器具的维护</el-menu-item>-->
            </el-menu-item-group>
          </el-submenu>
        </el-submenu>

        <el-submenu index="3">
          <template slot="title"><i class="el-icon-message"></i>服务性劳动</template>

          <el-submenu index="3-1">

            <template slot="title">现代服务业劳动</template>
            <el-menu-item-group>
            <el-menu-item index="3-1-1" @click="get311">社区服务</el-menu-item>
            <el-menu-item index="3-1-2" @click="get312">教育支持</el-menu-item>
            <el-menu-item index="3-1-3" @click="get313">邻里互助和关爱</el-menu-item>
            </el-menu-item-group>
<!--            <el-menu-item index="3-1-4">个人卫生习惯养成</el-menu-item>-->
          </el-submenu>

          <el-submenu index="3-2">
            <template slot="title">公益劳动与志愿服务</template>
            <el-menu-item-group>
            <el-menu-item index="3-2-1" @click="get321">慈善活动</el-menu-item>
            <el-menu-item index="3-2-2" @click="get322">环境保护</el-menu-item>
            <el-menu-item index="3-2-3" @click="get323">社会福利</el-menu-item>
            <el-menu-item index="3-2-4" @click="get324">灾害救援</el-menu-item>
            </el-menu-item-group>
          </el-submenu>



        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-button @click="getskip">登录</el-button>
      </el-header>

      <el-main>
        <template>
          <el-table
              :data="tabledata"
              border
              style="width: 100%">
            <el-table-column
                prop="id"
                label="id"
                width="180">
            </el-table-column>
            <el-table-column
                prop="who"
                label="做什么"
                width="180">
            </el-table-column>
            <el-table-column
                prop="how"
                label="怎么做">
            </el-table-column>
          </el-table>
        </template>
      </el-main>
    </el-container>
  </el-container>

</template>

<script>
import axois from 'axios'
import router from "@/router";



// import buju from './buju.vue'
export default {
  data() {
    return {
      tabledata: [],

    }
  },
  comments: {

  },
  methods: {
    get11() {
      axois.get('http://localhost:10000/user/knowledge/getMoudle11Knowledge')
          .then(Response => {
            this.tabledata = Response.data.data
          })
    },
    get111() {
      axois.get('http://localhost:10000/user/knowledge/getMoudle111Knowledge')
          .then(Response => {
            this.tabledata = Response.data.data
          })
    },

    get112() {
      axois.get('http://localhost:10000/user/knowledge/getMoudle112Knowledge')
          .then(Response => {
            this.tabledata = Response.data.data
          })
    }
    ,
    get113() {
      axois.get('http://localhost:10000/user/knowledge/getMoudle113Knowledge')
          .then(Response => {
            this.tabledata = Response.data.data
          })
    }
    ,
    get121() {
      axois.get('http://localhost:10000/user/knowledge/getMoudle121Knowledge')
          .then(Response => {
            this.tabledata = Response.data.data
          })
    }
    ,    get122() {
      axois.get('http://localhost:10000/user/knowledge/getMoudle122Knowledge')
          .then(Response => {
            this.tabledata = Response.data.data
          })
    }
    ,
    get123() {
      axois.get('http://localhost:10000/user/knowledge/getMoudle123Knowledge')
          .then(Response => {
            this.tabledata = Response.data.data
          })
    }
    ,
    get131() {
      axois.get('http://localhost:10000/user/knowledge/getMoudle131Knowledge')
          .then(Response => {
            this.tabledata = Response.data.data
          })
    }
    ,
    get132() {
      axois.get('http://localhost:10000/user/knowledge/getMoudle132Knowledge')
          .then(Response => {
            this.tabledata = Response.data.data
          })
    }
    ,
    get133() {
      axois.get('http://localhost:10000/user/knowledge/getMoudle133Knowledge')
          .then(Response => {
            this.tabledata = Response.data.data
          })
    }
    ,
    get141() {
      axois.get('http://localhost:10000/user/knowledge/getMoudle141Knowledge')
          .then(Response => {
            this.tabledata = Response.data.data
          })
    }
    ,
    get142() {
      axois.get('http://localhost:10000/user/knowledge/getMoudle142Knowledge')
          .then(Response => {
            this.tabledata = Response.data.data
          })
    }

    ,    get211() {
      axois.get('http://localhost:10000/user/knowledge/getMoudle211Knowledge')
          .then(Response => {
            this.tabledata = Response.data.data
          })
    }
    ,    get212() {
      axois.get('http://localhost:10000/user/knowledge/getMoudle212Knowledge')
          .then(Response => {
            this.tabledata = Response.data.data
          })
    }
    ,    get213() {
      axois.get('http://localhost:10000/user/knowledge/getMoudle213Knowledge')
          .then(Response => {
            this.tabledata = Response.data.data
          })
    }

    ,    get214() {
      axois.get('http://localhost:10000/user/knowledge/getMoudle214Knowledge')
          .then(Response => {
            this.tabledata = Response.data.data
          })
    }

    ,    get215() {
      axois.get('http://localhost:10000/user/knowledge/getMoudle215Knowledge')
          .then(Response => {
            this.tabledata = Response.data.data
          })
    }
    ,
    get221() {
      axois.get('http://localhost:10000/user/knowledge/getMoudle221Knowledge')
          .then(Response => {
            this.tabledata = Response.data.data
          })
    }
    ,
    get222() {
      axois.get('http://localhost:10000/user/knowledge/getMoudle222Knowledge')
          .then(Response => {
            this.tabledata = Response.data.data
          })
    }
    ,
    get223() {
      axois.get('http://localhost:10000/user/knowledge/getMoudle223Knowledge')
          .then(Response => {
            this.tabledata = Response.data.data
          })
    }
    ,
    get224() {
      axois.get('http://localhost:10000/user/knowledge/getMoudle224Knowledge')
          .then(Response => {
            this.tabledata = Response.data.data
          })
    }
    ,
    get225() {
      axois.get('http://localhost:10000/user/knowledge/getMoudle225Knowledge')
          .then(Response => {
            this.tabledata = Response.data.data
          })
    }
    ,
    get226() {
      axois.get('http://localhost:10000/user/knowledge/getMoudle226Knowledge')
          .then(Response => {
            this.tabledata = Response.data.data
          })
    }
    ,
    get231() {
      axois.get('http://localhost:10000/user/knowledge/getMoudle231Knowledge')
          .then(Response => {
            this.tabledata = Response.data.data
          })
    }
    ,
    get232() {
      axois.get('http://localhost:10000/user/knowledge/getMoudle232Knowledge')
          .then(Response => {
            this.tabledata = Response.data.data
          })
    }
    ,
    get233() {
      axois.get('http://localhost:10000/user/knowledge/getMoudle233Knowledge')
          .then(Response => {
            this.tabledata = Response.data.data
          })
    }
    ,
    get234() {
      axois.get('http://localhost:10000/user/knowledge/getMoudle234Knowledge')
          .then(Response => {
            this.tabledata = Response.data.data
          })
    }
    ,
    get235() {
      axois.get('http://localhost:10000/user/knowledge/getMoudle235Knowledge')
          .then(Response => {
            this.tabledata = Response.data.data
          })
    }
    ,
    get236() {
      axois.get('http://localhost:10000/user/knowledge/getMoudle236Knowledge')
          .then(Response => {
            this.tabledata = Response.data.data
          })
    }
    ,
    get241() {
      axois.get('http://localhost:10000/user/knowledge/getMoudle241Knowledge')
          .then(Response => {
            this.tabledata = Response.data.data
          })
    }
    ,
    get311() {
      axois.get('http://localhost:10000/user/knowledge/getMoudle311Knowledge')
          .then(Response => {
            this.tabledata = Response.data.data
          })
    }
    ,
    get312() {
      axois.get('http://localhost:10000/user/knowledge/getMoudle312Knowledge')
          .then(Response => {
            this.tabledata = Response.data.data
          })
    }
    ,
    get313() {
      axois.get('http://localhost:10000/user/knowledge/getMoudle313Knowledge')
          .then(Response => {
            this.tabledata = Response.data.data
          })
    }
    ,
    get321() {
      axois.get('http://localhost:10000/user/knowledge/getMoudle321Knowledge')
          .then(Response => {
            this.tabledata = Response.data.data
          })
    }
    ,
    get322() {
      axois.get('http://localhost:10000/user/knowledge/getMoudle322Knowledge')
          .then(Response => {
            this.tabledata = Response.data.data
          })
    }
    ,
    get323() {
      axois.get('http://localhost:10000/user/knowledge/getMoudle323Knowledge')
          .then(Response => {
            this.tabledata = Response.data.data
          })
    }
    ,
    get324() {
      axois.get('http://localhost:10000/user/knowledge/getMoudle324Knowledge')
          .then(Response => {
            this.tabledata = Response.data.data
          })
    }
    ,
    getskip(){
      router.push({ path: '/personalSenter' })
    }






  },
  created() {

    axois.get('http://localhost:10000/user/knowledge/getMoudlenowledge')
        .then(Response => {
          this.tabledata = Response.data.data
        })

  }
}
</script>

<style>
.el-header {
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}

.el-dropdown {
  vertical-align: top;
}

.el-dropdown + .el-dropdown {
  margin-left: 15px;
}

.el-icon-arrow-down {
  font-size: 12px;
}


</style>