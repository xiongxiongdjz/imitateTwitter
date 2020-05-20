import Vue from 'vue'
import Router from 'vue-router'

// 初始布局页面
import Layout from '@/components/Layout'

// 轮廓
import Profile from '@/components/Profile'
// 主页
import Home from '@/components/profile-childrens/home'
// 搜索
import Search from '@/components/profile-childrens/search'
// 通知
import Notice from '@/components/profile-childrens/notice'
// 私信
import Private from '@/components/profile-childrens/private'

// 登录
import LogIn from '@/components/LogIn'
// 注册
import Registered from '@/components/Registered'
// 找回
import FindBack from '@/components/FindBack'

Vue.use(Router)

export default new Router({
  routes: [
    // 初始布局页面
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      children: [
      ]
    },
    // 轮廓
    {
      path: '/profile',
      component: Profile,
      children: [
        // 默认
        {
          path: '/profile',
          component: Home,
          meta: {
            title: '主页'
          }
        },
        {
          path: '/profile/home',
          component: Home,
          meta: {
            title: '主页'
          }
        },
        {
          path: '/profile/search',
          component: Search,
          meta: {
            title: '搜索'
          }
        },
        {
          path: '/profile/notice',
          component: Notice,
          meta: {
            title: '通知'
          }
        },
        {
          path: '/profile/private',
          component: Private,
          meta: {
            title: '私信'
          }
        }
      ]
    },
    // 登录
    {
      path: '/LogIn',
      component: LogIn
    },
    // 注册
    {
      path: '/Registered',
      component: Registered
    },
    {
      path: '/FindBack',
      component: FindBack
    }
  ],
  mode: 'history'
})
