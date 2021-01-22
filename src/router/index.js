import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Accounts/Login.vue")
  },
  {
    path: '/layouts',
    name: 'Layouts',
    component: () => 
      import(/* webpackChunkName: "layout" */ "../views/Accounts/Userdetail.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

// 路由守卫检测本地是否含有 token, 若没有 token 则跳转到登录界面
router.beforeEach((to, form, next) => {
  if (to.path === '/login') {
    next();
  } else {
    const token = localStorage.getItem("token");
    if (token) {
      next();
    } else {
      router.push('/login');
    }
  }
});

export default router;
