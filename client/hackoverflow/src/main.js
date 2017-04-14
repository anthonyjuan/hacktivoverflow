// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
// import {Table, TableColumn} from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import router from './router'

// Vue.use(Table)
// Vue.use(TableColumn)

Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
