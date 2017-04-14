<template lang="html">

  <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <el-menu-item index="1">Testing Vue</el-menu-item>
    <router-link to="catalog"><el-menu-item index="3">Home</el-menu-item></router-link>
    <router-link to="manage-products"><el-menu-item index="3">Manage Products</el-menu-item></router-link>
  </el-menu>

</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
