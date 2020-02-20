import Vue from "vue";
import Router from "vue-router";

// 安装路由
Vue.use(Router);

import Layout from '@/layout'

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
      mate: {
        title: 'Dashboard',
        icon: 'dashboard',
        affix: true
      }
    }]
  },
];

export const asyncRoutes = [{
  path: '/permission',
  component: Layout,
  redirect: '/permission/page',
  children: [{
    path: 'page',
    component: () => import('views/permission/page'),
    name: 'PagePermission',
    mate: {
      title: 'Page Permission',
      roles: ['admin']
    }
  }]
}]

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
