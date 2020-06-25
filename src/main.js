import Vue from 'vue'
import App from './App.vue'
import VueMaterial from 'vue-material'
import { store } from './store/store.js';

Vue.use(VueMaterial)

new Vue({
  store,
  el: '#app',
  render: h => h(App)
})