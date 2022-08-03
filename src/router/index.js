import Vue from "vue";
import VueRouter from "vue-router";

const Home = () => import("../views/Home.vue");

//安装插件
Vue.use(VueRouter);

const routes = [
  {
    path: "",
    name: "Home",
    component: Home,
  },
];

//Uncaught (in promise) NavigationDuplicated解决方案如下
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
