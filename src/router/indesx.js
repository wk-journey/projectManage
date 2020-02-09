import Vue from "vue";
import Router from "vue-router";

// 安装路由
Vue.use(Router);

const routes = [];

// 创建路由
const router = new Router({
	routes,
	mode: "history"
});

// 导出路由
export default router;
