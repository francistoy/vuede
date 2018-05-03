import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home/Home'
import Fruit from '../views/fruit/Fruit'
import TableList from '../views/tableList/TableList'
import Login from '../views/login/Login'

//如果组件名字写错了，则不会显示了
Vue.use(Router)
let routes = [{
  path: '/login',
  name: '登录',
  component: Login
}, {
  path: '/home',
  name: '导航一',
  component: Home,
  children: [{
    path: '/fruit',
    component: Fruit,
    name: '水果'
  }, {
    path: '/tableList',
    component: TableList,
    name: '列表'
  }]
}]
let router = new Router({
  mode: 'history',
  routes: routes
})
export default router
