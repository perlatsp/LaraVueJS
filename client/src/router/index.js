import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import PostDetails from '@/components/product/product-details'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Home
    },
    {
      path: '/product/:id',
      name: 'PostDetails',
      component: PostDetails
    }
  ]
})
