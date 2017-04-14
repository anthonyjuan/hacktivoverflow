import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import ProductCatalog from '@/components/ProductCatalog'
import ManageProducts from '@/components/ManageProducts'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/catalog',
      component: ProductCatalog
    },
    {
      path: '/manage-products',
      component: ManageProducts
    }
  ]
})
