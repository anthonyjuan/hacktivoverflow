<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <app-nav></app-nav>

    <router-view></router-view>

    <!-- <manage-products></manage-products> -->
  </div>
</template>

<script>
// import ProductList from './components/ProductList';
import AppNav from './components/AppNav';
// import ManageProducts from './components/ManageProducts';

export default {
  components: {
    AppNav
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>
