import Vue from 'vue'
import Router from 'vue-router'

// 首页
const Home = () => import('@views/home/index')
// 我的押码
const MyCode = () => import('@views/mycode/index')
// 个人中心
const My = () => import('@views/my/index')
// 登录
const Login = () => import('@views/login/index')
// 注册
const Register = () => import('@views/register/index')
// 菜单
const Menu = () => import('@components/menu/index')

Vue.use(Router)

export const constantRouterMap = [
  {
    path: '/',
    name: 'home',
    components: {
      default: Home,
      menu: Menu
    },
    meta: {
      title: '首页'
    }
  },
  {
    path: '/mycode',
    name: 'mycode',
    components: {
      default: MyCode,
      menu: Menu
    }
  },
  {
    path: '/my',
    name: 'my',
    components: {
      default: My,
      menu: Menu
    }
  },
  {
    path: '/login',
    name: 'Login',
    components: {
      default: Login
    },
    meta: {
      title: '登录'
    }
  },
  {
    path: '/register',
    name: 'Register',
    components: {
      default: Register
    },
    meta: {
      title: '注册'
    }
  }
]

let routes = constantRouterMap
const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: () => ({
    y: 0
  }),
  routes: routes
})

export default router
