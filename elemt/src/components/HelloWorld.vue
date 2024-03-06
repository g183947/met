<template>
  <div>
    <el-container>
      <el-aside>
        <el-col :span="24" height="100vh">
          <el-menu default-active="2" class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff"
            active-text-color="#ffd04b" router>
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>管理</span>
              </template>
              <el-menu-item-group>

                <template slot="title">分组一</template>
                <el-menu-item index="about">表单</el-menu-item>
                <el-menu-item index="table">表格</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">

                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
              <i class="el-icon-document"></i>
              <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">导航四</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-aside>
      <el-container>
        <el-header>
          <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect"
            background-color="#545c64" height="100vw" text-color="#fff" active-text-color="#ffd04b">
            <el-menu-item index="1">处理中心</el-menu-item>
            <el-submenu index="2">

              <template slot="title">我的工作台</template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
              <el-menu-item index="2-3">选项3</el-menu-item>
              <el-submenu index="2-4">

                <template slot="title">选项4</template>
                <el-menu-item index="2-4-1">选项1</el-menu-item>
                <el-menu-item index="2-4-2">选项2</el-menu-item>
                <el-menu-item index="2-4-3">选项3</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="3" disabled>消息中心</el-menu-item>
            <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
          </el-menu>
        </el-header>
        <el-main>
          <router-view><el-footer></el-footer></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>
.el-header,
.el-footer {
  background-color: rgb(84, 92, 100);
  color: #333;
  width: 100vw;
  text-align: center;
  overflow: hidden;
}

.el-aside {
  background-color: rgb(84, 92, 100);
  color: #333;
  text-align: center;
}



.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  height: 100vh !important;
}

body>.el-container {
  margin-bottom: 40px;
}
</style>
