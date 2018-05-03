<template>
  <el-dialog title="编辑" :visible.sync="dialogFormVisible">
    <el-form :model="form">
      <el-form-item label="姓名">
        <el-input :v-model="userInfo.name" :value="userName"></el-input>
      </el-form-item>
      <el-form-item label="地址">
        <el-input :v-model="userInfo.address" :value="userAddress"></el-input>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
  export default {
    props: ["dialogFormVisible","userName","userAddress"],
    data() {
      return {
        dialogFormVisible: false,  
        userInfo: {
          name: '',
          address: ""
        }
      }
    },
    watch: {
     dialogFormVisible: function () {
         if(this.dialogFormVisible){
         }
         else {
             this.$emit("closeDialog");
         }
     }
    }
  }

</script>

<style lang="scss" scoped>


</style>
