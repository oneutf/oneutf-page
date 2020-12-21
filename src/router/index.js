import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/views/Login.vue";
import layout from "@/layout";
// import menu from "@/assets/menu/menu.json";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "",
    component: layout
  }
];

const router = new VueRouter({
  mode: "history",
  routes: routes
});
// router.addRoutes(e);

export default router;
