<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <app-nav :statusLogin="statusLogin"></app-nav>

    <router-view :statusLogin="statusLogin" class="tampil-router"></router-view>

    <!-- <manage-products></manage-products> -->
  </div>
</template>

<script>
// import ProductList from './components/ProductList';
import AppNav from './components/AppNav';
// import ManageProducts from './components/ManageProducts';

export default {
  data() {
    return{
      statusLogin: false
    }
  },
  components: {
    AppNav
  },
  mounted() {
    if(window.localStorage.getItem('token')) {
      this.statusLogin = true
    } else {
      this.statusLogin = false
    }
  }
}
</script>

<style>
#app {

  font-family: 'Lato','Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  /*margin-top: 60px;*/
}
a {
  text-decoration: none;
}
.tampil-router {
  margin-top: 20px;
}
</style>
