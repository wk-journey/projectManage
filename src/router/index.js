import Vue from "vue";
import Router from "vue-router";

// 安装路由
Vue.use(Router);

const originalPush = Router.prototype.push
Router.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

import Layout from '@/layout'

import tableRouter from './modules/table'

export const constantRoutes = [{
    path: "/login",
    component: () => import("views/login/index"),
    hidden: true
  },
  {
    path: "/",
    component: Layout,
    redirect: "/dashboard",
    children: [{
      path: 'dashboard',
      component: () => import('views/dashboard/index'),
      name: 'Dashboard',
      meta: {
        title: 'Dashboard',
        icon: 'dashboard',
        affix: true
      }
    }]
  },
  {
    path: '/documentation',
    component: Layout,
    children: [{
      path: 'index',
      component: () => import('views/documentation/index'),
      name: 'Documentation',
      meta: {
        title: 'Documentation',
        icon: 'documentation',
        affix: true
      }
    }]
  }
]

export const asyncRoutes = [{
    path: '/permission',
    component: Layout,
    redirect: '/permission/page',
    alwaysShow: true, // will always show root menu
    name: 'Permission',
    meta: {
      title: 'Permission'
    },
    children: [{
      path: 'page',
      component: () => import('views/permission/page'),
      name: 'PagePermission',
      meta: {
        title: 'Page Permission',
        roles: ['admin', 'read']
      }
    }]
  },
  tableRouter
]

const createRouter = () => new Router({
  mode: "history", // require service support
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRoutes
})

// 创建路由
const router = createRouter()

// 导出路由
export default router;
