import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";
import Showcase from "@/kit/Showcase";
import Components from "@/kit/Components";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/components",
    name: "Components",
    component: Components
  },
  {
    path: "/kit",
    name: "UI Kit",
    component: Showcase
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
