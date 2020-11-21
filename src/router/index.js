import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/views/Login.vue";
import layout from "@/layout";
import menu from "@/assets/menu/menu.json";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: Login
  },
  {
    path: "/index",
    component: layout
  }
];

console.log(menu);

const router = new VueRouter({
  mode: "history",
  routes: routes
});

export default router;
