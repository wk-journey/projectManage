import Vue from "vue";
import Router from "vue-router";

const Login = () => import("common/login/Login");

// 安装路由
Vue.use(Router);

const routes = [
	{
		path: "/",
		redirect: "/login"
	},
	{
		path: "/login",
		component: Login
	}
];

// 创建路由
const router = new Router({
	mode: "history",
	routes
});

// 导出路由
export default router;
