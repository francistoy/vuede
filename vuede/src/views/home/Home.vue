<template>
  <el-container class="main-container">
    <el-header class="el-header clearfix">
      <div class="admin-title">
        bjergsen
      </div>
      <div class="admin-info clearfix">
        <el-dropdown>
          <div class="el-dropdown-link">
            <span class="admin-name"> Super Man </span>
            <img src="../../assets/img/admin-img.jpg">
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>设置</el-dropdown-item>
            <el-dropdown-item v-loading.fullscreen.lock="fullscreenLoading" element-loading-text="正在退出..." @click.native.prevent="handleLoginout()" divided>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-header>
    <el-container class="main">
      <el-aside class="left-nav-container" width="200px">
        <el-menu default-active="$route.path" class="left-nav" :collapse="isCollapse">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item-group title="分组1">
              <el-menu-item index="1-1">
                <router-link to="/fruit" class="router-link">水果</router-link>
              </el-menu-item>
              <el-menu-item index="1-2">
                <router-link to="/tableList" class="router-link">列表</router-link>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-main class="right-table-container">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </el-container>

</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {
        fullscreenLoading: false,
        isCollapse: false
      }
    },
    //挂载完成的钩子函数，监听，注册事件写在这里
    mounted: function () {
      window.onresize = () => {
        let screenWidth = $(window).width();
        this.isCollapse = screenWidth < "768" ? true : false;
        $('left-nav').attr('width', "64px");
      }
    },
    methods: {
       handleLoginout: function ()  {
         this.fullscreenLoading = true;
         setTimeout(() => {
           this.fullscreenLoading = false;
           this.$router.push({path: '/login'})
         }, 2000);
       }
    }
  }

</script>

<style lang="scss" scoped>
  $common-border-color: #e6e6e6;
  .admin-title {
    float: left;
    color: #ffffff;
    font-weight: bold;
  }

  .admin-info {
    float: right;
    height: 100%;
    .el-dropdown {
      height: 100%;
      .el-dropdown-link {
        height: 100%;
        cursor: pointer;
        .admin-name {
          display: inline-block;
          margin-right: 5px;
          color: #ffffff;
          vertical-align: middle;
        }
        img {
          width: 50px;
          height: 50px;
          border-radius: 50px;
          vertical-align: middle;
          margin-bottom: 5px;
        }
      }
    }
  }

  .main-container {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
  }

  .router-link {
    display: inline-block;
    color: #000;
    text-decoration: none;
    width: 100%;
  }

  .el-header {
    text-align: right;
  }

  .main {
    position: absolute;
    top: 60px;
    bottom: 0;
    width: 100%;
    overflow: hidden;
    .left-nav-container {
      height: 100%;
      border-right: 1px solid $common-border-color;
    }
  }

  .el-header,
  .el-footer {
    height: 60px;
    background-color: #4093ff;
    line-height: 60px;
    color: #303133
  }

  .el-menu {
    border: 0px;
  }

  .right-table-container {
    min-width: 700px;
  }

  @media only screen and (max-width: 768px) {
    .left-nav-container {
      width: 64px !important;
    }
  }

</style>
