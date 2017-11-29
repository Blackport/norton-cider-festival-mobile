// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './components/App.vue'
import router from './router'
import vueResource from 'vue-resource'

Vue.config.productionTip = false
Vue.use(vueResource)

/* eslint-disable no-new */
new Vue({
  router,
  template: `
    <div id="app">
      <router-link to="/">Main</router-link>
      <router-link to="/more">More</router-link>
      <router-view></router-view>
    </div>
  `
}).$mount('#app')
