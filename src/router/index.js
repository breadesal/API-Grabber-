import Vue from "vue";
import VueRouter from "vue-router";
import home from "@/components/myHome.vue";
// import posts from "@/components/myPost.vue";
import post from "@/components/myPost.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "home",
    component: home,
  },
  {
    path: "/post",
    name: "post",
    component: post,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
