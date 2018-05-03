<template>
<div style="width:100%;height:100%">
  <el-table :data="tableData" style="width:100%">
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
  <dialog-form :dialogFormVisible = "isShowDialog" :userName="tableData[tableRow].name"  :userAddress="tableData[tableRow].address" @closeDialog="handleDialog()" ></dialog-form>
</div>     
</template>


<script>
  import DialogForm from '../../components/DialogForm'
  export default {
    name: 'TableList',
    data() {
      return {
        tableData: [{
          date: '2018-4-24',
          name: 'LiLiLi',
          address: "美国"
        }, {
          date: '2018-4-24',
          name: 'DiDiDi',
          address: "英国"
        }, {
          date: '2018-4-24',
          name: 'MiMiMi',
          address: "巴西"
        }],
        isShowDialog: false,
        tableRow: 0
      }
    },
    components: {
      DialogForm: DialogForm
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
      }
    }
  }

</script>

<style lang="scss" scoped>


</style>
