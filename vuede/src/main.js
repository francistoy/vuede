// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'jquery'
import ElementUI from 'element-ui'
//名字一定要用router,不然运行会出现空白页
import router from './router/index'
//引入公共css
import './assets/css/common.scss'
import './assets/css/element-variables.scss'
Vue.config.productionTip = false
Vue.use(ElementUI)
/* eslint-disable no-new */

router.beforeEach((to, from, next) => {
  if (to.path == '/login') {
    sessionStorage.removeItem('user')
  }
  let user =sessionStorage.getItem('user');
  if (!user && to.path != '/login') {
    next({
      path: '/login'
    })
  } else {
    next()
  }
})

new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>',
  router
})
