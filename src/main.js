// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Mint from 'mint-ui';
import buttomNav from "./components/buttomNav/buttomNav.vue";
import Header from './components/header/header.vue';

import $axios from './utils'

Vue.use(Mint)
Vue.component('ButtomNav',buttomNav)
Vue.component('Header',Header)


Vue.prototype.$axios = $axios 

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
