import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/views/Login.vue";
import Index from "@/views/Index.vue";
import Org from "@/components/Org.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: Login
  },
  {
    path: "/index",
    name: "index",
    component: Index,
    children: [
      {
        path: "org",
        component: Org
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
