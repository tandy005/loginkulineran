import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Foods from "../views/Foods.vue";
import FoodsDetail from "../views/FoodsDetail.vue";
import Keranjang from "../views/Keranjang.vue";
import Suksess from "../views/Suksess.vue";
import Login from "../views/Login.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: {
      name: "Login",
      component: Login,
    },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/foods",
    name: "Foods",
    component: Foods,
  },
  {
    path: "/foods/:id",
    name: "FoodsDetail",
    component: FoodsDetail,
  },
  {
    path: "/keranjang",
    name: "Keranjang",
    component: Keranjang,
  },
  {
    path: "/suksess",
    name: "Suksess",
    component: Suksess,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
