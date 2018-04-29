// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import axios from 'axios'

// components
import ProductCard from '@/components/product/product-card'

Vue.prototype.$http = axios.create({
  baseURL: 'http://localhost:8000/api',
  timeout: 3000,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
  }
})

Vue.component('product-card', ProductCard)

Vue.use(Vuetify, {
  theme: {
    primary: '#2abaee',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107'
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
