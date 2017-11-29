import Vue from 'vue'
import Router from 'vue-router'
import BootstrapWidthDemo from './../components/BootstrapWidthDemo.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', component: BootstrapWidthDemo},
    {path: '/more', component: BootstrapWidthDemo}
  ]
})
