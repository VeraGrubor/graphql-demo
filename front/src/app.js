import Vue from 'vue'
import App from './App.vue'
// router
import router from './router'
import './app.css'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
