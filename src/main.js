// imports components downloaded by the terminal like Vue, Router and Bootstrap
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import {BootstrapVueIcons } from 'bootstrap-vue'

// Vue using bootstrap
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
