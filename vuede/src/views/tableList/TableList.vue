<template>
  <div style="width:100%;height:100%">
    <el-table :data="initTableData" style="width:100%">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="date" label="日期"></el-table-column>
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
      <el-table-column fixed="right" label="操作">
        <template slot-scope="scope">
          <el-button size="small" @click.native.prevent="isDelRow(scope.$index)">删除</el-button>
          <el-button size="small" @click="{isShowDialog = true,tableRow = scope.$index}">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <dialog-form :dialogFormVisible="isShowDialog" :userName="tableData[tableRow].name" :userAddress="tableData[tableRow].address"
      @closeDialog="handleDialog()"></dialog-form>
    <el-pagination layout="prev,pager,next" :page-size="listQuery.pageSize" :total="listQuery.total" class="clearfix" :current-page.sync="listQuery.page"
      @current-change="handlePagination()" ></el-pagination>
  </div>
</template>


<script>
  import DialogForm from '../../components/DialogForm'
  export default {
    name: 'TableList',
    data() {
      return {
        //初始化table列表的数据,created时获取并添加
        initTableData: [],
        //是否显示对话框
        isShowDialog: false,
        //列表行数
        tableRow: 0,
        tableData: [{
          date: '2018-4-24',
          name: 'LiLiLi1',
          address: "美国"
        }, {
          date: '2018-4-24',
          name: 'DiDiDi',
          address: "英国"
        }, {
          date: '2018-4-24',
          name: 'MiMiMi',
          address: "巴西",
        }, {
          date: '2018-4-24',
          name: 'HiHiHi',
          address: "迪拜",
        },{
          date: '2018-4-24',
          name: 'LiLiLi2',
          address: "美国"
        }, {
          date: '2018-4-24',
          name: 'DiDiDi',
          address: "英国"
        }, {
          date: '2018-4-24',
          name: 'MiMiMi',
          address: "巴西",
        }, {
          date: '2018-4-24',
          name: 'HiHiHi',
          address: "迪拜",
        },{
          date: '2018-4-24',
          name: 'LiLiLi3',
          address: "美国"
        }, {
          date: '2018-4-24',
          name: 'DiDiDi',
          address: "英国"
        }, {
          date: '2018-4-24',
          name: 'MiMiMi',
          address: "巴西",
        }, {
          date: '2018-4-24',
          name: 'HiHiHi',
          address: "迪拜",
        },{
          date: '2018-4-24',
          name: 'LiLiLi4',
          address: "美国"
        }, {
          date: '2018-4-24',
          name: 'DiDiDi',
          address: "英国"
        }, {
          date: '2018-4-24',
          name: 'MiMiMi',
          address: "巴西",
        }, {
          date: '2018-4-24',
          name: 'HiHiHi',
          address: "迪拜",
        },{
          date: '2018-4-24',
          name: 'LiLiLi5',
          address: "美国"
        }, {
          date: '2018-4-24',
          name: 'DiDiDi',
          address: "英国"
        }, {
          date: '2018-4-24',
          name: 'MiMiMi',
          address: "巴西",
        }, {
          date: '2018-4-24',
          name: 'HiHiHi',
          address: "迪拜",
        }],
        listQuery: {
          page: 1,
          pageSize: 4,
          total: 20,
        },
      }
    },
    components: {
      DialogForm: DialogForm
    },
    created: function () {
      console.log("i am created");
      this.initTableData = this.tableData.slice(0,4)
    },
    methods: {
      delSelectRow: function (row) {
        this.tableData.splice(row, 1);
      },
      isDelRow: function (row) {
        this.tableRow = row;
        console.info(row)
        this.$confirm('是否确定删除', '提示', {
          confirmButtonText: '确定',
          canelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.delSelectRow(this.tableRow),
            this.$message({
              type: "success",
              message: "删除成功",
              center: true
            });
        }).catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
            center: true
          })
        })
      },
      handleDialog: function () {
        this.isShowDialog = false;
      },
      handlePagination: function () {
           let selectPage = this.listQuery.page;
           let dataStart = (this.listQuery.page-1)*this.listQuery.pageSize;
           let dataEnd = (this.listQuery.page)*this.listQuery.pageSize;
           this.initTableData = this.tableData.slice(dataStart,dataEnd);
      }
    }
  }

</script>

<style lang="scss" scoped>
  .el-pagination {
    margin-top: 20px;
    float: right;
  }

</style>
