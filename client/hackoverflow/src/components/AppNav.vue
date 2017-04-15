<template lang="html">

  <el-menu theme="dark" class="el-menu-demo" mode="horizontal">
    <router-link to="/"><el-menu-item index="1">hacktivoverflow</el-menu-item></router-link>
    <router-link to="questions"><el-menu-item index="2">Question</el-menu-item></router-link>
    <router-link to="signup"><el-menu-item class="button" style="float: right;" index="4" v-if="statusLogin == false">Sign up</el-menu-item></router-link>
    <router-link to="login"><el-menu-item  style="float: right;" index="3" v-if="statusLogin == false">Login</el-menu-item></router-link>
    <el-menu-item @click="logout()"  style="float: right;" index="3" v-if="statusLogin == true">Logout</el-menu-item>
  </el-menu>

</template>

<script>
export default {
  props:['statusLogin'],
  methods :{
    logout() {
      localStorage.clear();
      window.location.reload();
      location.href="/#/";
    }
  }
}
</script>

<style lang="css" scoped>
</style>
