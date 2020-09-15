import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/views/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: Login
  }
];

const router = new VueRouter({
  mode: "history",
  routes: routes
});

export default router;
