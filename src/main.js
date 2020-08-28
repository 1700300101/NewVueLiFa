import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './assets/css/global.css'
import axios from 'axios'
import qs from 'qs'
import Store from './store/index'

import 'element-ui/lib/theme-chalk/index.css'

// axios.defaults.baseURL = ''
// axios.interceptors.request.use(config => {
//   config.headers.Authorization = window.seesionStorage.getItem('token')
//   return config
// })

// if (process.env.MOCK) {
//   require('@/mock/index.js')
// }
Vue.prototype.$http = axios
Vue.prototype.$axios = axios
Vue.prototype.$qs = qs
Vue.config.productionTip = false

new Vue({
  router,
  Store,
  render: h => h(App)
}).$mount('#app')
